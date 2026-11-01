# Bake O Bliss – 100% Pure Veg Artisanal Home Bakery (Full-Stack) 🍰🌱✨

A complete, production-ready full-stack website for **Bake O Bliss**, a boutique **100% Pure Vegetarian & Eggless** home bakery located in Chennai, Tamil Nadu.

- **Verified Studio Address:** Flat No. 803, Tower 4, North Town Apartment, Stephenson Road, Binny Garden, Perambur, Chennai, Tamil Nadu 600012
- **Dietary Standard:** 100% Pure Vegetarian & Eggless (Sanitized dedicated vegetarian bake-ware, zero gelatin, zero animal fat)
- **Instagram:** [https://www.instagram.com/bakeobliss/](https://www.instagram.com/bakeobliss/)
- **Owner Admin Portal:** `/admin` (Default PIN: `8034`)

---

## 🛠️ Full-Stack Technology Architecture

### 1. Frontend
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS with custom bakery color tokens (`#FFF9F3`, `#F4DDE0`, `#C98F96`, `#593B35`, `#F8EFE5`)
- **Icons:** Lucide React
- **Routing:** React Router v6
- **State Management:** React Context API (`CartContext`) with `LocalStorage` persistence
- **Admin Dashboard:** `/admin` equipped with PIN login, analytics, order status workflows, bespoke inquiry management, and 1-click WhatsApp customer messaging.

### 2. Backend & REST API
- **Runtime:** Node.js + Express
- **Port:** `5000` (auto-proxied via Vite on `/api`)
- **Endpoints:**
  - `GET /api/health` — System status & studio verification
  - `GET /api/settings`, `PUT /api/settings` — Studio address, phone & hours
  - `POST /api/admin/login` — PIN-secured authentication (Default: `8034`)
  - `GET /api/admin/stats` — Real-time revenue, orders & inquiry counts
  - `GET /api/orders`, `POST /api/orders`, `PATCH /api/orders/:id/status`, `DELETE /api/orders/:id`
  - `GET /api/custom-inquiries`, `POST /api/custom-inquiries`, `PATCH /api/custom-inquiries/:id/status`
  - `GET /api/messages`, `POST /api/messages` — Contact inquiries

### 3. Database
- **Engine:** SQLite (`better-sqlite3`) — Zero-configuration, zero-cost, persistent ACID SQL database stored locally in `server/data/bakeobliss.sqlite`.
- **Auto-Seeding:** Automatically initializes tables (`products`, `orders`, `custom_inquiries`, `messages`, `settings`) with the Chennai North Town Apartment studio address and 100% pure veg product offerings.
- **Resilience:** Includes client-side offline fallback storage so customer orders are never lost even if the backend is temporarily offline.

---

## 📂 Project Directory Structure

```text
bakeoblisswebsite/
├── public/
│   ├── favicon.svg             # Custom artisanal bakery logo
│   └── _redirects              # SPA routing rules for Cloudflare Pages / Netlify
├── server/
│   ├── data/                   # SQLite database storage (bakeobliss.sqlite)
│   ├── db.js                   # SQLite schema, WAL mode & auto-seed script
│   └── index.js                # Express REST API server
├── src/
│   ├── assets/                 # Brand assets
│   ├── components/
│   │   ├── CartItem.jsx        # Basket item with variant tags & quantity controls
│   │   ├── Footer.jsx          # Perambur studio info, hours, Instagram, WhatsApp, Admin link
│   │   ├── Hero.jsx            # Editorial hero with pure veg badge & value pillars
│   │   ├── Navbar.jsx          # Pure veg announcement bar, frosted header, cart badge & drawer
│   │   ├── ProductCard.jsx     # Card with 100% Pure Veg badge, bestseller tags & quick add
│   │   ├── ProductGrid.jsx     # Search bar, category filter pills & price sorting
│   │   ├── ScrollToTop.jsx     # Automatically scrolls to top on route change
│   │   ├── Toast.jsx           # Floating snackbar notification for basket additions
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp direct chat button
│   ├── context/
│   │   └── CartContext.jsx     # Cart state, LocalStorage sync & quantity handlers
│   ├── data/
│   │   ├── config.js           # Studio address (Perambur, Chennai), hours, WhatsApp number
│   │   └── products.js         # 100% Pure Vegetarian & Eggless catalogue
│   ├── pages/
│   │   ├── Admin.jsx           # Owner Dashboard (Orders, Inquiries, Metrics, Status updates)
│   │   ├── Home.jsx            # Homepage with hero, categories, bestsellers, reviews, IG grid
│   │   ├── Menu.jsx            # Full catalogue with category filters and search
│   │   ├── ProductDetails.jsx  # Dynamic gallery, variant selection, eggless badge & direct order
│   │   ├── CustomOrders.jsx    # Bespoke cake consultation inquiry form with design gallery
│   │   ├── Cart.jsx            # Shopping basket review, subtotal calculation, lead time notice
│   │   ├── Checkout.jsx        # Customer details, pickup/delivery selector & dual WhatsApp + DB submission
│   │   ├── About.jsx           # Chennai studio story, 4-pillar philosophy & pure veg vow
│   │   └── Contact.jsx         # Direct WhatsApp line, studio hours, location & message form
│   ├── services/
│   │   └── api.js              # Full-stack API client with offline fallback support
│   ├── utils/
│   │   ├── currency.js         # Currency formatting (₹ INR)
│   │   └── whatsapp.js         # Formatted WhatsApp message link builders
│   ├── App.jsx                 # Routes & layout structure
│   ├── index.css               # Tailwind directives & theme base
│   └── main.jsx                # Application root entry point
├── index.html                  # SEO meta tags, OpenGraph previews & Google Fonts
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Local Running & Development Commands

Open PowerShell or terminal in the project directory:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Both Backend & Frontend Simultaneously
```bash
npm run dev
```
- **Backend API & SQLite DB:** `http://localhost:5000`
- **Frontend Website:** `http://localhost:3000`

### 3. Or Run Independently
- Start Backend API only: `npm run server`
- Start Frontend only: `npm run client`

### 4. Build Frontend for Production
```bash
npm run build
```

---

## 🔐 Owner Admin Panel Guide

1. Open your browser and navigate to: `http://localhost:3000/admin` (or click **Owner Portal** in the website footer).
2. Enter the Owner PIN: **`8034`** (derived from Tower 4, Flat 803).
3. The Admin Panel allows you to:
   - **View Live Orders:** See customer name, WhatsApp phone number, pickup vs. delivery choice, delivery address, requested date/time slot, ordered treats, and line totals.
   - **Update Order Status:** Instantly update status between *Pending*, *Confirmed*, *Baking*, *Ready for Pickup*, *Out for Delivery*, and *Completed*.
   - **1-Click WhatsApp Chat:** Click *"Chat with Customer on WhatsApp"* on any order card to directly open a chat with the customer about their specific order!
   - **Manage Custom Cake Inquiries:** Review bespoke cake themes, required dates, flavor preferences, and reference image links.
   - **View Revenue Analytics:** Track recorded earnings, active orders, and customer messages.
   - **Studio Verification:** Verify your Perambur address and operating hours.

---

## 📍 Studio & Ordering Highlights

- **Boutique Address:** Flat No. 803, Tower 4, North Town Apartment, Stephenson Road, Binny Garden, Perambur, Chennai, Tamil Nadu 600012
- **Fulfillment Choices:**
  1. *Studio Self-Pickup (Free)* — Collection at Tower 4, North Town Apartment.
  2. *Chennai Doorstep Delivery* — Coordinated via temperature-protected cab/courier (Porter / Swiggy Genie / Dunzo).
- **Dual Confirmation:** Submitting an order saves it immediately to the backend SQLite database AND opens WhatsApp with a pre-filled summary, ensuring zero lost orders.
