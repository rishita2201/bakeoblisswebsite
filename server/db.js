import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure server data directory exists
const dbDir = path.join(__dirname, 'data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'bakeobliss.sqlite');
const db = new Database(dbPath);

// Enable WAL mode for high performance and concurrency
db.pragma('journal_mode = WAL');

// Initialize schema
export function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      short_description TEXT,
      description TEXT,
      image TEXT,
      is_bestseller INTEGER DEFAULT 0,
      is_signature INTEGER DEFAULT 0,
      is_pure_veg INTEGER DEFAULT 1,
      availability TEXT DEFAULT 'in_stock',
      preparation_time TEXT,
      variants TEXT,
      flavor_notes TEXT,
      allergens TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      customer_name TEXT NOT NULL,
      customer_phone TEXT NOT NULL,
      fulfillment_type TEXT NOT NULL,
      delivery_address TEXT,
      preferred_date TEXT NOT NULL,
      preferred_time TEXT,
      special_instructions TEXT,
      items TEXT NOT NULL,
      total_amount REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS custom_inquiries (
      id TEXT PRIMARY KEY,
      customer_name TEXT NOT NULL,
      customer_phone TEXT NOT NULL,
      occasion TEXT NOT NULL,
      required_date TEXT NOT NULL,
      cake_flavor TEXT,
      cake_size TEXT,
      preferred_design TEXT,
      reference_image_url TEXT,
      additional_notes TEXT,
      status TEXT DEFAULT 'new',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT,
      email TEXT,
      message_type TEXT,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'unread',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);

  // Default bakery settings with Chennai North Town Apartment address
  const defaultSettings = [
    ['brandName', 'Bake O Bliss'],
    ['tagline', '100% Pure Vegetarian & Eggless Home Bakery'],
    ['dietaryNote', '100% Pure Vegetarian & Eggless Home Bakery'],
    ['whatsappNumber', '919841511011'],
    ['whatsappDisplayNumber', '+91 98415 11011'],
    ['address', 'Flat No. 803, Tower 4, North Town Apartment, Stephenson Road, Binny Garden, Perambur'],
    ['city', 'Chennai'],
    ['state', 'Tamil Nadu'],
    ['pincode', '600012'],
    ['operatingDays', 'Tuesday – Sunday (Closed Mondays)'],
    ['operatingHours', '10:00 AM – 7:30 PM'],
    ['adminPin', '8034'] // Flat 803 Tower 4
  ];

  const setSettingStmt = db.prepare(`
    INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)
  `);

  for (const [key, val] of defaultSettings) {
    setSettingStmt.run(key, val);
  }

  // Check if products need seeding
  const count = db.prepare('SELECT count(*) as total FROM products').get().total;
  if (count === 0) {
    seedInitialProducts();
  }
}

// Seed initial 100% Pure Veg products
function seedInitialProducts() {
  const insertProduct = db.prepare(`
    INSERT INTO products (
      id, name, category, price, short_description, description,
      image, is_bestseller, is_signature, is_pure_veg, availability,
      preparation_time, variants, flavor_notes, allergens
    ) VALUES (
      @id, @name, @category, @price, @short_description, @description,
      @image, @is_bestseller, @is_signature, @is_pure_veg, @availability,
      @preparation_time, @variants, @flavor_notes, @allergens
    )
  `);

  const initialProducts = [
    {
      id: 'vintage-raspberry-rose-cake',
      name: 'Vintage Raspberry & Rose Petal Cake',
      category: 'Cakes',
      price: 1450,
      short_description: 'Vanilla sponge layered with homemade raspberry compote and rosewater buttercream.',
      description: 'A lovely celebration cake baked with fragrant vanilla sponge, sweet homemade raspberry compote, smooth rosewater buttercream, and dried rose petals.',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
      is_bestseller: 1,
      is_signature: 1,
      is_pure_veg: 1,
      availability: 'in_stock',
      preparation_time: '24 hours advance notice',
      variants: JSON.stringify([
        { id: '500g', label: '500 grams (Serves 4-6)', price: 1450 },
        { id: '1kg', label: '1 kg (Serves 8-12)', price: 2600 },
        { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 3750 }
      ]),
      flavor_notes: JSON.stringify(['Madagascar Vanilla', 'Tart Raspberry', 'Damask Rose Buttercream']),
      allergens: 'Contains Pure Dairy Butter, Gluten.'
    },
    {
      id: 'belgian-dark-chocolate-truffle-cake',
      name: 'Belgian Dark Chocolate Truffle Cake',
      category: 'Cakes',
      price: 1550,
      short_description: 'Intense 70% Callebaut chocolate sponge drenched in espresso ganache & velvet cocoa dusting.',
      description: 'The ultimate indulgence for chocolate lovers. Moist layers baked with single-origin Belgian cocoa, silky ganache, and edible gold leaf.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
      is_bestseller: 1,
      is_signature: 0,
      is_pure_veg: 1,
      availability: 'in_stock',
      preparation_time: '24 hours advance notice',
      variants: JSON.stringify([
        { id: '500g', label: '500 grams (Serves 4-6)', price: 1550 },
        { id: '1kg', label: '1 kg (Serves 8-12)', price: 2850 },
        { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 4100 }
      ]),
      flavor_notes: JSON.stringify(['70% Belgian Dark Chocolate', 'Silky Ganache', 'Espresso Undertone']),
      allergens: 'Contains Pure Dairy Butter, Gluten.'
    },
    {
      id: 'crinkle-top-fudge-brownies',
      name: 'Classic Crinkle-Top Fudge Brownies',
      category: 'Brownies',
      price: 650,
      short_description: 'Signature ultra-fudgy brownies with that coveted shiny crinkle crust.',
      description: 'Slow-melted French dark chocolate blended with pure dairy butter and baked into a dense, gooey center with crisp edges.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
      is_bestseller: 1,
      is_signature: 1,
      is_pure_veg: 1,
      availability: 'in_stock',
      preparation_time: 'Freshly baked daily',
      variants: JSON.stringify([
        { id: 'box-of-4', label: 'Box of 4 Large Squares', price: 650 },
        { id: 'box-of-8', label: 'Box of 8 Large Squares', price: 1200 },
        { id: 'box-of-12', label: 'Party Box of 12 Squares', price: 1750 }
      ]),
      flavor_notes: JSON.stringify(['French Dark Chocolate', 'Gooey Fudge Center', 'Pure Dairy Butter']),
      allergens: 'Contains Pure Dairy Butter, Gluten.'
    },
    {
      id: 'floral-pastel-celebration-cupcakes',
      name: 'Floral Buttercream Cupcakes',
      category: 'Cupcakes',
      price: 750,
      short_description: 'Box of delicate cupcakes piped with pretty buttercream flowers and garden roses.',
      description: 'Fluffy vanilla sponge cupcakes topped with smooth, silky buttercream piped into lovely floral designs.',
      image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1000&q=80',
      is_bestseller: 1,
      is_signature: 1,
      is_pure_veg: 1,
      availability: 'in_stock',
      preparation_time: '24 hours advance notice',
      variants: JSON.stringify([
        { id: 'box-of-6', label: 'Box of 6 Assorted', price: 750 },
        { id: 'box-of-12', label: 'Box of 12 Assorted', price: 1400 }
      ]),
      flavor_notes: JSON.stringify(['Vanilla Bean', 'Raspberry Curd', 'Silky Buttercream']),
      allergens: 'Contains Pure Dairy Butter, Gluten.'
    },
    {
      id: 'nyc-style-chunky-chocolate-chip-cookies',
      name: 'NYC Style Chunky Choc-Chip Cookies',
      category: 'Cookies',
      price: 520,
      short_description: 'Extra-thick golden cookies packed with melted chocolate chunks & flaky sea salt.',
      description: 'Crisp on the outer rim and soft, chewy in the center. Made with brown butter, loaded with chocolate chunks, and finished with Maldon sea salt.',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80',
      is_bestseller: 1,
      is_signature: 0,
      is_pure_veg: 1,
      availability: 'in_stock',
      preparation_time: 'Freshly baked daily',
      variants: JSON.stringify([
        { id: 'pack-of-4', label: 'Pack of 4 Giant Cookies (100g each)', price: 520 },
        { id: 'pack-of-8', label: 'Pack of 8 Giant Cookies', price: 980 }
      ]),
      flavor_notes: JSON.stringify(['Browned Butter', 'Belgian Chocolate Chunks', 'Maldon Sea Salt']),
      allergens: 'Contains Pure Dairy Butter, Gluten.'
    },
    {
      id: 'paris-macaron-gift-box',
      name: 'Artisan Parisian Macaron Collection',
      category: 'Desserts',
      price: 850,
      short_description: 'Crisp almond meringue shells with luscious ganache & fruit reduction fillings.',
      description: 'Handcrafted French-style macarons made with pure aquafaba and almond flour. Featuring delicate pieds and soft chewy centers.',
      image: 'https://images.unsplash.com/photo-1569864321390-dc8727ff068f?auto=format&fit=crop&w=1000&q=80',
      is_bestseller: 1,
      is_signature: 1,
      is_pure_veg: 1,
      availability: 'in_stock',
      preparation_time: '24 hours advance notice',
      variants: JSON.stringify([
        { id: 'box-of-6', label: 'Prestige Box of 6 Assorted', price: 850 },
        { id: 'box-of-12', label: 'Luxury Keepsake Box of 12', price: 1600 }
      ]),
      flavor_notes: JSON.stringify(['Rose Lychee', 'Dark Cocoa Ganache', 'Pistachio', 'Salted Caramel']),
      allergens: 'Contains Almonds (Nuts), Pure Dairy Butter.'
    }
  ];

  for (const item of initialProducts) {
    insertProduct.run(item);
  }
}

export default db;
