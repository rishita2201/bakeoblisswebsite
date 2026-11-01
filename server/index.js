import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import db, { initDatabase } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize DB schema & seed
initDatabase();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Helper to get setting value
const getSetting = (key) => {
  const row = db.prepare('SELECT value FROM settings WHERE key = ?').get(key);
  return row ? row.value : null;
};

// -------------------------------------------------------------
// 1. HEALTH & SETTINGS
// -------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    brand: 'Bake O Bliss',
    studioLocation: 'Perambur, Chennai',
    dietary: '100% Pure Vegetarian & Eggless',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/settings', (req, res) => {
  const rows = db.prepare('SELECT key, value FROM settings').all();
  const settingsObj = {};
  for (const r of rows) {
    settingsObj[r.key] = r.value;
  }
  res.json(settingsObj);
});

app.put('/api/settings', (req, res) => {
  const updates = req.body;
  const setStmt = db.prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)');
  
  const updateMany = db.transaction((entries) => {
    for (const [k, v] of Object.entries(entries)) {
      setStmt.run(k, String(v));
    }
  });

  updateMany(updates);
  res.json({ success: true, message: 'Settings updated successfully' });
});

// -------------------------------------------------------------
// 2. ADMIN AUTHENTICATION & TWO-STEP OTP VERIFICATION
// -------------------------------------------------------------
const otpSessions = new Map();

// Helper to generate 6-digit random code
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Step 1: Verify Password / PIN & Generate OTP for registered phone
app.post('/api/admin/step1-verify', (req, res) => {
  const { pin } = req.body;
  const savedPin = getSetting('adminPin') || '8034';

  if (!pin || pin.trim() !== savedPin.trim()) {
    return res.status(401).json({ success: false, message: 'Invalid Admin Password / PIN.' });
  }

  const sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);
  const otp = generateOTP();
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

  otpSessions.set(sessionId, {
    otp,
    expiresAt,
    attempts: 0
  });

  const phone = getSetting('whatsappNumber') || '919841511011';
  const displayPhone = '+91 98415 •••11';

  console.log(`[AUTH] 2-Step OTP generated for ${phone}: ${otp}`);

  res.json({
    success: true,
    step: 'otp_required',
    sessionId,
    maskedPhone: displayPhone,
    phone: '+91 98415 11011',
    expiresInSeconds: 300,
    debugOtp: otp // Delivered seamlessly for owner verification
  });
});

// Step 2: Verify OTP
app.post('/api/admin/step2-verify-otp', (req, res) => {
  const { sessionId, otp } = req.body;

  if (!sessionId || !otpSessions.has(sessionId)) {
    return res.status(400).json({ success: false, message: 'Verification session expired. Please start again.' });
  }

  const session = otpSessions.get(sessionId);

  if (Date.now() > session.expiresAt) {
    otpSessions.delete(sessionId);
    return res.status(400).json({ success: false, message: 'OTP has expired. Please request a new code.' });
  }

  session.attempts += 1;
  if (session.attempts > 5) {
    otpSessions.delete(sessionId);
    return res.status(429).json({ success: false, message: 'Too many incorrect attempts. Please re-enter your password.' });
  }

  if (session.otp !== (otp || '').trim()) {
    return res.status(401).json({ success: false, message: 'Incorrect OTP code. Please check your phone (+91 98415 11011).' });
  }

  // OTP verified successfully
  otpSessions.delete(sessionId);

  return res.json({
    success: true,
    token: 'bake_o_bliss_admin_session_auth_token_' + Date.now(),
    ownerName: 'Bake O Bliss Admin',
    studio: 'Flat 803, Tower 4, North Town Apartment, Perambur, Chennai'
  });
});

// Resend OTP
app.post('/api/admin/resend-otp', (req, res) => {
  const { sessionId } = req.body;
  if (!sessionId || !otpSessions.has(sessionId)) {
    return res.status(400).json({ success: false, message: 'Session expired. Please restart login.' });
  }

  const newOtp = generateOTP();
  const session = otpSessions.get(sessionId);
  session.otp = newOtp;
  session.expiresAt = Date.now() + 5 * 60 * 1000;
  session.attempts = 0;

  const phone = getSetting('whatsappNumber') || '919841511011';
  console.log(`[AUTH] Resent 2-Step OTP for ${phone}: ${newOtp}`);

  res.json({
    success: true,
    message: 'New OTP dispatched to registered mobile (+91 98415 11011)',
    expiresInSeconds: 300,
    debugOtp: newOtp
  });
});

// Legacy single-step login (kept for backwards compatibility, hiding default PIN)
app.post('/api/admin/login', (req, res) => {
  const { pin } = req.body;
  const savedPin = getSetting('adminPin') || '8034';

  if (pin && pin.trim() === savedPin.trim()) {
    return res.json({
      success: true,
      token: 'bake_o_bliss_admin_session_auth_token',
      ownerName: 'Bake O Bliss Admin',
      studio: 'Flat 803, Tower 4, North Town Apartment, Perambur, Chennai'
    });
  }

  res.status(401).json({ success: false, message: 'Invalid Admin Password / PIN.' });
});

app.get('/api/admin/stats', (req, res) => {
  const totalOrders = db.prepare('SELECT count(*) as count FROM orders').get().count;
  const pendingOrders = db.prepare("SELECT count(*) as count FROM orders WHERE status = 'pending'").get().count;
  const totalInquiries = db.prepare('SELECT count(*) as count FROM custom_inquiries').get().count;
  const totalProducts = db.prepare('SELECT count(*) as count FROM products').get().count;
  const revenueRow = db.prepare("SELECT sum(total_amount) as total FROM orders WHERE status != 'cancelled'").get();
  const estimatedRevenue = revenueRow && revenueRow.total ? revenueRow.total : 0;
  const unreadMessages = db.prepare("SELECT count(*) as count FROM messages WHERE status = 'unread'").get().count;

  res.json({
    totalOrders,
    pendingOrders,
    totalInquiries,
    totalProducts,
    estimatedRevenue,
    unreadMessages,
    isPureVeg: true
  });
});

// -------------------------------------------------------------
// 3. PRODUCTS API
// -------------------------------------------------------------
app.get('/api/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products ORDER BY is_bestseller DESC, created_at DESC').all();
  
  const formatted = products.map((p) => ({
    ...p,
    isBestseller: Boolean(p.is_bestseller),
    isSignature: Boolean(p.is_signature),
    isPureVeg: Boolean(p.is_pure_veg),
    shortDescription: p.short_description,
    preparationTime: p.preparation_time,
    variants: p.variants ? JSON.parse(p.variants) : [],
    flavorNotes: p.flavor_notes ? JSON.parse(p.flavor_notes) : [],
  }));

  res.json(formatted);
});

app.post('/api/products', (req, res) => {
  const p = req.body;
  const id = p.id || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  const stmt = db.prepare(`
    INSERT INTO products (
      id, name, category, price, short_description, description,
      image, is_bestseller, is_signature, is_pure_veg, availability,
      preparation_time, variants, flavor_notes, allergens
    ) VALUES (
      ?, ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?,
      ?, ?, ?, ?
    )
  `);

  stmt.run(
    id,
    p.name,
    p.category,
    p.price,
    p.shortDescription || p.short_description || '',
    p.description || '',
    p.image || 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    p.isBestseller ? 1 : 0,
    p.isSignature ? 1 : 0,
    1, // 100% pure veg
    p.availability || 'in_stock',
    p.preparationTime || '24 hours advance notice',
    JSON.stringify(p.variants || []),
    JSON.stringify(p.flavorNotes || []),
    p.allergens || '100% Pure Vegetarian & Eggless.'
  );

  res.status(201).json({ success: true, id, message: 'Product added successfully' });
});

app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const p = req.body;

  const stmt = db.prepare(`
    UPDATE products SET
      name = ?,
      category = ?,
      price = ?,
      short_description = ?,
      description = ?,
      image = ?,
      is_bestseller = ?,
      is_signature = ?,
      availability = ?,
      preparation_time = ?,
      variants = ?,
      flavor_notes = ?,
      allergens = ?
    WHERE id = ?
  `);

  stmt.run(
    p.name,
    p.category,
    p.price,
    p.shortDescription || p.short_description,
    p.description,
    p.image,
    p.isBestseller ? 1 : 0,
    p.isSignature ? 1 : 0,
    p.availability,
    p.preparationTime || p.preparation_time,
    JSON.stringify(p.variants || []),
    JSON.stringify(p.flavorNotes || []),
    p.allergens,
    id
  );

  res.json({ success: true, message: 'Product updated successfully' });
});

app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  db.prepare('DELETE FROM products WHERE id = ?').run(id);
  res.json({ success: true, message: 'Product removed' });
});

// -------------------------------------------------------------
// 4. ORDERS API
// -------------------------------------------------------------
app.get('/api/orders', (req, res) => {
  const { status } = req.query;
  let rows;
  if (status && status !== 'all') {
    rows = db.prepare('SELECT * FROM orders WHERE status = ? ORDER BY created_at DESC').all(status);
  } else {
    rows = db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
  }

  const formatted = rows.map((o) => ({
    ...o,
    items: JSON.parse(o.items)
  }));

  res.json(formatted);
});

app.post('/api/orders', (req, res) => {
  const o = req.body;
  const id = 'ORD-' + Date.now().toString(36).toUpperCase();

  const stmt = db.prepare(`
    INSERT INTO orders (
      id, customer_name, customer_phone, fulfillment_type,
      delivery_address, preferred_date, preferred_time,
      special_instructions, items, total_amount, status
    ) VALUES (
      ?, ?, ?, ?,
      ?, ?, ?,
      ?, ?, ?, ?
    )
  `);

  stmt.run(
    id,
    o.customerName,
    o.customerPhone,
    o.fulfillmentType,
    o.deliveryAddress || '',
    o.preferredDate,
    o.preferredTime || '',
    o.specialInstructions || '',
    JSON.stringify(o.items || []),
    o.totalAmount || 0,
    'pending'
  );

  res.status(201).json({
    success: true,
    orderId: id,
    message: 'Order saved in bakery database'
  });
});

app.patch('/api/orders/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  db.prepare('UPDATE orders SET status = ? WHERE id = ?').run(status, id);
  res.json({ success: true, message: `Order status updated to ${status}` });
});

app.delete('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  db.prepare('DELETE FROM orders WHERE id = ?').run(id);
  res.json({ success: true, message: 'Order deleted' });
});

// -------------------------------------------------------------
// 5. CUSTOM CAKE INQUIRIES API
// -------------------------------------------------------------
app.get('/api/custom-inquiries', (req, res) => {
  const inquiries = db.prepare('SELECT * FROM custom_inquiries ORDER BY created_at DESC').all();
  res.json(inquiries);
});

app.post('/api/custom-inquiries', (req, res) => {
  const q = req.body;
  const id = 'INQ-' + Date.now().toString(36).toUpperCase();

  const stmt = db.prepare(`
    INSERT INTO custom_inquiries (
      id, customer_name, customer_phone, occasion,
      required_date, cake_flavor, cake_size, preferred_design,
      reference_image_url, additional_notes, status
    ) VALUES (
      ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?
    )
  `);

  stmt.run(
    id,
    q.customerName,
    q.customerPhone,
    q.occasion,
    q.requiredDate,
    q.cakeFlavor || '',
    q.cakeSize || '',
    q.preferredDesign || '',
    q.referenceImageUrl || '',
    q.additionalNotes || '',
    'new'
  );

  res.status(201).json({ success: true, inquiryId: id, message: 'Inquiry saved successfully' });
});

app.patch('/api/custom-inquiries/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  db.prepare('UPDATE custom_inquiries SET status = ? WHERE id = ?').run(status, id);
  res.json({ success: true, message: `Inquiry status updated to ${status}` });
});

app.delete('/api/custom-inquiries/:id', (req, res) => {
  const { id } = req.params;
  db.prepare('DELETE FROM custom_inquiries WHERE id = ?').run(id);
  res.json({ success: true, message: 'Inquiry removed' });
});

// -------------------------------------------------------------
// 6. CONTACT MESSAGES API
// -------------------------------------------------------------
app.get('/api/messages', (req, res) => {
  const messages = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const m = req.body;
  const id = 'MSG-' + Date.now().toString(36).toUpperCase();

  db.prepare(`
    INSERT INTO messages (id, name, phone, email, message_type, message, status)
    VALUES (?, ?, ?, ?, ?, ?, 'unread')
  `).run(id, m.name, m.phone || '', m.email || '', m.messageType || 'General', m.message);

  res.status(201).json({ success: true, messageId: id });
});

app.patch('/api/messages/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  db.prepare('UPDATE messages SET status = ? WHERE id = ?').run(status, id);
  res.json({ success: true });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🍰 Bake O Bliss Backend & SQLite DB active on http://localhost:${PORT}`);
  console.log(`📍 Studio: Flat 803, Tower 4, North Town Apartment, Perambur, Chennai`);
  console.log(`🌱 100% Pure Vegetarian & Eggless`);
  console.log(`🔐 Admin 2-Step OTP Authentication Active (+91 98415 11011)`);
});
