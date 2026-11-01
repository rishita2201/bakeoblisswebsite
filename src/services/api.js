/**
 * BAKE O BLISS - FULL-STACK API CLIENT
 * 
 * Interacts with the backend Express server & SQLite database.
 * Includes resilient fallback to localStorage when backend is offline.
 */

const API_BASE = '/api';

// Local storage fallback keys
const FALLBACK_ORDERS_KEY = 'bake_o_bliss_offline_orders';
const FALLBACK_INQUIRIES_KEY = 'bake_o_bliss_offline_inquiries';
const FALLBACK_MESSAGES_KEY = 'bake_o_bliss_offline_messages';

// -------------------------------------------------------------
// 1. ADMIN AUTH & STATS
// -------------------------------------------------------------
export async function adminLogin(pin) {
  try {
    const res = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('bake_o_bliss_admin_token', data.token);
      return { success: true, data };
    }
    return { success: false, message: data.message || 'Login failed' };
  } catch (err) {
    // Offline / direct static PIN fallback
    if (pin.trim() === '8034') {
      localStorage.setItem('bake_o_bliss_admin_token', 'local_offline_token');
      return { success: true, data: { ownerName: 'Bake O Bliss Admin (Local Mode)' } };
    }
    return { success: false, message: 'Invalid Admin PIN. (Default PIN: 8034)' };
  }
}

export function isLocalAdminLoggedIn() {
  return Boolean(localStorage.getItem('bake_o_bliss_admin_token'));
}

export function adminLogout() {
  localStorage.removeItem('bake_o_bliss_admin_token');
}

export async function getAdminStats() {
  try {
    const res = await fetch(`${API_BASE}/admin/stats`);
    if (res.ok) return await res.json();
  } catch (e) {
    // offline fallback calculation
  }

  const localOrders = JSON.parse(localStorage.getItem(FALLBACK_ORDERS_KEY) || '[]');
  const localInquiries = JSON.parse(localStorage.getItem(FALLBACK_INQUIRIES_KEY) || '[]');
  const revenue = localOrders.reduce((sum, o) => sum + (o.total_amount || 0), 0);

  return {
    totalOrders: localOrders.length,
    pendingOrders: localOrders.filter((o) => o.status === 'pending').length,
    totalInquiries: localInquiries.length,
    totalProducts: 12,
    estimatedRevenue: revenue,
    unreadMessages: 0,
    isPureVeg: true
  };
}

// -------------------------------------------------------------
// 2. ORDERS
// -------------------------------------------------------------
export async function fetchOrders(status = 'all') {
  try {
    const url = status && status !== 'all' ? `${API_BASE}/orders?status=${status}` : `${API_BASE}/orders`;
    const res = await fetch(url);
    if (res.ok) {
      const serverOrders = await res.json();
      return serverOrders;
    }
  } catch (e) {
    // fallback
  }

  const localOrders = JSON.parse(localStorage.getItem(FALLBACK_ORDERS_KEY) || '[]');
  if (status && status !== 'all') {
    return localOrders.filter((o) => o.status === status);
  }
  return localOrders;
}

export async function createOrder(orderData) {
  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Backend server offline, saving order to local offline database.');
  }

  // Resilient offline fallback: Save to localStorage
  const localOrders = JSON.parse(localStorage.getItem(FALLBACK_ORDERS_KEY) || '[]');
  const newOrder = {
    id: 'ORD-' + Date.now().toString(36).toUpperCase(),
    customer_name: orderData.customerName,
    customer_phone: orderData.customerPhone,
    fulfillment_type: orderData.fulfillmentType,
    delivery_address: orderData.deliveryAddress || '',
    preferred_date: orderData.preferredDate,
    preferred_time: orderData.preferredTime || '',
    special_instructions: orderData.specialInstructions || '',
    items: orderData.items || [],
    total_amount: orderData.totalAmount || 0,
    status: 'pending',
    created_at: new Date().toISOString()
  };

  localOrders.unshift(newOrder);
  localStorage.setItem(FALLBACK_ORDERS_KEY, JSON.stringify(localOrders));

  return { success: true, orderId: newOrder.id, offline: true };
}

export async function updateOrderStatus(orderId, status) {
  try {
    const res = await fetch(`${API_BASE}/orders/${orderId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const localOrders = JSON.parse(localStorage.getItem(FALLBACK_ORDERS_KEY) || '[]');
  const updated = localOrders.map((o) => (o.id === orderId ? { ...o, status } : o));
  localStorage.setItem(FALLBACK_ORDERS_KEY, JSON.stringify(updated));
  return { success: true };
}

export async function deleteOrder(orderId) {
  try {
    const res = await fetch(`${API_BASE}/orders/${orderId}`, { method: 'DELETE' });
    if (res.ok) return await res.json();
  } catch (e) {}

  const localOrders = JSON.parse(localStorage.getItem(FALLBACK_ORDERS_KEY) || '[]');
  const updated = localOrders.filter((o) => o.id !== orderId);
  localStorage.setItem(FALLBACK_ORDERS_KEY, JSON.stringify(updated));
  return { success: true };
}

// -------------------------------------------------------------
// 3. CUSTOM INQUIRIES
// -------------------------------------------------------------
export async function fetchCustomInquiries() {
  try {
    const res = await fetch(`${API_BASE}/custom-inquiries`);
    if (res.ok) return await res.json();
  } catch (e) {}

  return JSON.parse(localStorage.getItem(FALLBACK_INQUIRIES_KEY) || '[]');
}

export async function createCustomInquiry(inquiryData) {
  try {
    const res = await fetch(`${API_BASE}/custom-inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inquiryData)
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const localInquiries = JSON.parse(localStorage.getItem(FALLBACK_INQUIRIES_KEY) || '[]');
  const newInq = {
    id: 'INQ-' + Date.now().toString(36).toUpperCase(),
    customer_name: inquiryData.customerName,
    customer_phone: inquiryData.customerPhone,
    occasion: inquiryData.occasion,
    required_date: inquiryData.requiredDate,
    cake_flavor: inquiryData.cakeFlavor || '',
    cake_size: inquiryData.cakeSize || '',
    preferred_design: inquiryData.preferredDesign || '',
    reference_image_url: inquiryData.referenceImageUrl || '',
    additional_notes: inquiryData.additionalNotes || '',
    status: 'new',
    created_at: new Date().toISOString()
  };

  localInquiries.unshift(newInq);
  localStorage.setItem(FALLBACK_INQUIRIES_KEY, JSON.stringify(localInquiries));
  return { success: true, inquiryId: newInq.id, offline: true };
}

export async function updateInquiryStatus(id, status) {
  try {
    const res = await fetch(`${API_BASE}/custom-inquiries/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const local = JSON.parse(localStorage.getItem(FALLBACK_INQUIRIES_KEY) || '[]');
  const updated = local.map((inq) => (inq.id === id ? { ...inq, status } : inq));
  localStorage.setItem(FALLBACK_INQUIRIES_KEY, JSON.stringify(updated));
  return { success: true };
}

export async function deleteInquiry(id) {
  try {
    const res = await fetch(`${API_BASE}/custom-inquiries/${id}`, { method: 'DELETE' });
    if (res.ok) return await res.json();
  } catch (e) {}

  const local = JSON.parse(localStorage.getItem(FALLBACK_INQUIRIES_KEY) || '[]');
  const updated = local.filter((inq) => inq.id !== id);
  localStorage.setItem(FALLBACK_INQUIRIES_KEY, JSON.stringify(updated));
  return { success: true };
}

// -------------------------------------------------------------
// 4. CONTACT MESSAGES
// -------------------------------------------------------------
export async function createMessage(msgData) {
  try {
    const res = await fetch(`${API_BASE}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(msgData)
    });
    if (res.ok) return await res.json();
  } catch (e) {}

  const local = JSON.parse(localStorage.getItem(FALLBACK_MESSAGES_KEY) || '[]');
  const newMsg = {
    id: 'MSG-' + Date.now().toString(36).toUpperCase(),
    ...msgData,
    status: 'unread',
    created_at: new Date().toISOString()
  };
  local.unshift(newMsg);
  localStorage.setItem(FALLBACK_MESSAGES_KEY, JSON.stringify(local));
  return { success: true, messageId: newMsg.id };
}

export async function fetchMessages() {
  try {
    const res = await fetch(`${API_BASE}/messages`);
    if (res.ok) return await res.json();
  } catch (e) {}
  return JSON.parse(localStorage.getItem(FALLBACK_MESSAGES_KEY) || '[]');
}
