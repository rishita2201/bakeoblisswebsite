# Bake O Bliss – Artisanal Home Bakery Website 🍰✨

A website crafted for **Bake O Bliss**, an artisanal home bakery brand specializing in freshly baked celebration cakes, brownies, cupcakes, and confections.

Live Brand Instagram: [https://www.instagram.com/bakeobliss/](https://www.instagram.com/bakeobliss/)

---

## 🌸 Brand Identity & Aesthetic Direction

- **Brand Personality:** Warm, artisanal, premium, elegant, and feminine.
- **Color Palette:**
  - Warm Ivory (`#FFF9F3`)
  - Soft Blush Pink (`#F4DDE0`)
  - Dusty Rose (`#C98F96`)
  - Chocolate Brown (`#593B35`)
  - Cream (`#F8EFE5`)
- **Typography:**
  - Headings: *Playfair Display* & *Cormorant Garamond* (Elegant editorial serifs)
  - Body Text: *Plus Jakarta Sans* (Clean, modern sans-serif)

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 18 with Vite
- **Styling:** Tailwind CSS with custom bakery color palettes and soft shadows
- **Icons:** Lucide React
- **Routing:** React Router v6
- **State Management:** React Context API (`CartContext`)
- **Persistence:** LocalStorage for shopping cart state
- **Ordering Engine:** WhatsApp Click-to-Chat integration (No paid backend infrastructure required, with structured, human-readable orders)
- **Deployment Ready:** Cloudflare Pages (includes SPA routing `_redirects`) & GitHub

---

## 📂 Project Directory Structure

```text
bake-o-bliss/
├── public/
│   ├── favicon.svg             # Handcrafted SVG cupcake icon
│   └── _redirects              # Cloudflare Pages / Netlify SPA client-side routing
├── src/
│   ├── assets/                 # Brand assets
│   ├── components/
│   │   ├── CartItem.jsx        # Shopping cart item row with qty controls
│   │   ├── Footer.jsx          # Studio info, links, hours, Instagram & disclaimer
│   │   ├── Hero.jsx            # Editorial hero with photography, CTAs & value badges
│   │   ├── Navbar.jsx          # Responsive header, cart badge & mobile drawer
│   │   ├── ProductCard.jsx     # Responsive rounded card with badges & quick actions
│   │   ├── ProductGrid.jsx     # Search bar, category filters & price sorting
│   │   ├── ScrollToTop.jsx     # Automatically scrolls to top on route change
│   │   ├── Toast.jsx           # Floating confirmation when treats are added
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp direct chat button
│   ├── context/
│   │   └── CartContext.jsx     # Cart state, LocalStorage sync & quantity handlers
│   ├── data/
│   │   ├── config.js           # Central bakery settings, WhatsApp number, hours, studio location
│   │   └── products.js         # Demonstration sample catalogue with variants & images
│   ├── pages/
│   │   ├── Home.jsx            # Homepage with hero, categories, bestsellers, reviews, IG grid
│   │   ├── Menu.jsx            # Full catalogue with category filters and search
│   │   ├── ProductDetails.jsx  # Gallery, variant selector, eggless toggle & direct order
│   │   ├── CustomOrders.jsx    # Bespoke cake consultation inquiry form with design gallery
│   │   ├── Cart.jsx            # Shopping basket with line totals & lead time reminders
│   │   ├── Checkout.jsx        # Customer details, delivery/pickup toggle & WhatsApp order generator
│   │   ├── About.jsx           # Brand story, baking philosophy & ingredient purity
│   │   └── Contact.jsx         # Direct WhatsApp line, studio hours & message inquiry
│   ├── utils/
│   │   ├── currency.js         # Currency formatting (₹ INR / customizable)
│   │   └── whatsapp.js         # Formatted WhatsApp message link builders
│   ├── App.jsx                 # App routing & layout wrapper
│   ├── index.css               # Tailwind directives & delicate scrollbar styling
│   └── main.jsx                # Application root entry
├── index.html                  # SEO meta tags, OpenGraph previews & Google Fonts
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Local Development Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```
This produces an optimized production build in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📋 Checklist: Information the Bakery Owner Must Provide

To personalize this website for the live business, update the following clearly marked files:

1. **WhatsApp Contact Number (`src/data/config.js`)**:
   - Update `whatsappNumber` (e.g. `919876543210` with country code, no `+` sign).
   - Update `whatsappDisplayNumber` (e.g. `+91 98765 43210`).

2. **Studio Location & Operating Hours (`src/data/config.js`)**:
   - Update `location.title`, `location.address`, and `location.city`.
   - Update `operatingHours.days` and `operatingHours.hours`.

3. **Menu Products & Real Pricing (`src/data/products.js`)**:
   - Replace the sample demonstration products with your actual baked offerings.
   - Adjust product names, categories, weight/size options (e.g., 500g, 1kg), prices, and photo URLs.

4. **Brand Story (`src/pages/About.jsx`)**:
   - Personalize the "Our Story" section with the founder/baker's journey, inspirations, and specialty creations.

5. **Currency / Region (`src/data/config.js`)**:
   - Currently set to `₹` (INR). You can change this to `$` (USD), `£` (GBP), `€` (EUR), or `AED` if desired.

---

## 🚀 GitHub Setup Instructions

1. **Initialize Git & Commit** (if not already done):
   ```bash
   git add .
   git commit -m "Initial commit: Production-ready Bake O Bliss website"
   ```

2. **Create a New Repository on GitHub**:
   - Go to [GitHub.com/new](https://github.com/new).
   - Name your repository (e.g., `bake-o-bliss-website`).
   - Leave it **Public** or **Private**.
   - Do **not** initialize with README or .gitignore (already created).

3. **Link and Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/bake-o-bliss-website.git
   git branch -M main
   git push -u origin main
   ```

---

## ☁️ Cloudflare Pages Deployment Instructions (100% Free)

Cloudflare Pages provides lightning-fast global hosting with free SSL, automatic git deployments, and unlimited bandwidth.

### Method 1: Git Integration (Recommended for continuous updates)
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, click on **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your GitHub repository (`bake-o-bliss-website`).
4. Configure the build settings:
   - **Project Name:** `bake-o-bliss`
   - **Production branch:** `main`
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.
6. Cloudflare will automatically build and publish your site with a free `.pages.dev` domain and free SSL! Whenever you push updates to GitHub, Cloudflare will automatically rebuild and redeploy.

### Method 2: Direct Upload via Wrangler (Optional)
If you prefer deploying directly from your terminal:
```bash
npx wrangler pages deploy dist --project-name=bake-o-bliss
```

---

## 🔒 Ordering & Privacy Transparency

- **WhatsApp Click-to-Chat:** Orders are sent as pre-formatted messages directly to the baker's WhatsApp.
- **No Stored Payment Data:** The website never collects or stores sensitive credit card or banking details.
- **Availability Confirmation:** Customers are explicitly informed that orders require confirmation by the baker before they are finalized.
