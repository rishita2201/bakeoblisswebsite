/**
 * BAKE O BLISS - FRESH PRODUCT CATALOGUE
 * 
 * Location: North Town Apartment, Perambur, Chennai
 * Note: Since Bake O Bliss is exclusively a 100% pure vegetarian & eggless bakery,
 * individual product labels do not repeat "pure veg" on every single item.
 */

export const CATEGORIES = [
  'All',
  'Cakes',
  'Cupcakes',
  'Brownies',
  'Cookies',
  'Desserts',
  'Special Occasion Treats'
];

export const PRODUCTS = [
  {
    id: 'vintage-raspberry-rose-cake',
    name: 'Vintage Raspberry & Rose Petal Cake',
    category: 'Cakes',
    price: 1450,
    shortDescription: 'Soft vanilla sponge layered with homemade raspberry compote and rosewater buttercream.',
    description: 'A lovely celebration cake baked with fragrant vanilla sponge, sweet homemade raspberry compote, smooth rosewater buttercream, and dried rose petals.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: '500g', label: '500 grams (Serves 4-6)', price: 1450 },
      { id: '1kg', label: '1 kg (Serves 8-12)', price: 2600 },
      { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 3750 }
    ],
    flavorNotes: ['Madagascar Vanilla', 'Tart Raspberry', 'Rose Buttercream'],
    allergens: 'Contains Pure Dairy Butter, Gluten.'
  },
  {
    id: 'belgian-dark-chocolate-truffle-cake',
    name: 'Belgian Dark Chocolate Truffle Cake',
    category: 'Cakes',
    price: 1550,
    shortDescription: 'Moist dark chocolate sponge layered with rich chocolate ganache and cocoa dusting.',
    description: 'The ultimate treat for chocolate lovers. Moist layers baked with rich dark chocolate, filled with smooth chocolate ganache, and topped with chocolate truffles.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: false,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: '500g', label: '500 grams (Serves 4-6)', price: 1550 },
      { id: '1kg', label: '1 kg (Serves 8-12)', price: 2850 },
      { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 4100 }
    ],
    flavorNotes: ['70% Dark Chocolate', 'Smooth Ganache', 'Light Coffee Notes'],
    allergens: 'Contains Pure Dairy Butter, Gluten.'
  },
  {
    id: 'salted-caramel-biscoff-drip-cake',
    name: 'Salted Caramel Biscoff Drip Cake',
    category: 'Cakes',
    price: 1600,
    shortDescription: 'Spiced Biscoff sponge layered with caramel drizzle and Lotus biscuit crumb.',
    description: 'Warm spices meet velvety sweetness. Fluffy Biscoff cookie sponge paired with salted caramel cream, finished with a golden caramel drip and crispy Lotus biscuits.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: false,
    isSignature: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: '500g', label: '500 grams (Serves 4-6)', price: 1600 },
      { id: '1kg', label: '1 kg (Serves 8-12)', price: 2950 },
      { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 4200 }
    ],
    flavorNotes: ['Lotus Biscoff', 'Salted Caramel', 'Pure Butter Cream'],
    allergens: 'Contains Pure Dairy Butter, Gluten, Soy.'
  },
  {
    id: 'floral-pastel-celebration-cupcakes',
    name: 'Floral Buttercream Cupcakes',
    category: 'Cupcakes',
    price: 750,
    shortDescription: 'Box of delicate cupcakes piped with pretty buttercream flowers and garden roses.',
    description: 'Fluffy vanilla sponge cupcakes topped with smooth, silky buttercream piped into lovely pastel floral designs.',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    availability: 'in_stock',
    preparationTime: 'Same day (subject to slot) or 24h advance',
    variants: [
      { id: 'box-of-6', label: 'Box of 6 Assorted', price: 750 },
      { id: 'box-of-12', label: 'Box of 12 Assorted', price: 1400 }
    ],
    flavorNotes: ['Vanilla Bean', 'Raspberry Curd', 'Silky Buttercream'],
    allergens: 'Contains Pure Dairy Butter, Gluten.'
  },
  {
    id: 'fudge-brownie-cupcake-trio',
    name: 'Dark Chocolate Ganache Cupcakes',
    category: 'Cupcakes',
    price: 680,
    shortDescription: 'Moist chocolate cupcakes topped with whipped dark chocolate ganache swirl.',
    description: 'Delicious chocolate cupcakes made with rich cocoa and pure butter, topped with whipped dark chocolate ganache and chocolate pearls.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: false,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'box-of-6', label: 'Box of 6 Cupcakes', price: 680 },
      { id: 'box-of-12', label: 'Box of 12 Cupcakes', price: 1250 }
    ],
    flavorNotes: ['Rich Cocoa', 'Whipped Ganache', 'Dark Chocolate Pearls'],
    allergens: 'Contains Pure Dairy Butter, Gluten.'
  },
  {
    id: 'crinkle-top-fudge-brownies',
    name: 'Classic Crinkle-Top Fudge Brownies',
    category: 'Brownies',
    price: 650,
    shortDescription: 'Fudgy brownies with that classic shiny paper-thin crinkle crust.',
    description: 'Our customer favourite. Melted dark chocolate blended with pure dairy butter and baked into a dense, gooey center with crisp edges and a shiny crinkle top.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    availability: 'in_stock',
    preparationTime: 'Freshly baked daily',
    variants: [
      { id: 'box-of-4', label: 'Box of 4 Large Squares', price: 650 },
      { id: 'box-of-8', label: 'Box of 8 Large Squares', price: 1200 },
      { id: 'box-of-12', label: 'Party Box of 12 Squares', price: 1750 }
    ],
    flavorNotes: ['Dark Chocolate', 'Gooey Fudge Center', 'Pure Dairy Butter'],
    allergens: 'Contains Pure Dairy Butter, Gluten.'
  },
  {
    id: 'sea-salt-caramel-walnut-brownies',
    name: 'Salted Caramel & Roasted Walnut Brownies',
    category: 'Brownies',
    price: 720,
    shortDescription: 'Rich chocolate brownies swirled with homemade salted caramel and roasted walnuts.',
    description: 'Fudgy chocolate brownie squares swirled with homemade salted caramel and toasted walnuts for a delicious crunch.',
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: false,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'box-of-4', label: 'Box of 4 Squares', price: 720 },
      { id: 'box-of-8', label: 'Box of 8 Squares', price: 1350 }
    ],
    flavorNotes: ['Toasted Walnuts', 'Salted Caramel', 'Dark Chocolate'],
    allergens: 'Contains Tree Nuts, Pure Dairy Butter, Gluten.'
  },
  {
    id: 'nyc-style-chunky-chocolate-chip-cookies',
    name: 'NYC Style Chunky Choc-Chip Cookies',
    category: 'Cookies',
    price: 520,
    shortDescription: 'Thick golden cookies packed with melted chocolate chunks and a pinch of sea salt.',
    description: 'Crisp on the outside and soft, gooey in the center. Made with pure butter and loaded with rich chocolate chunks.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: false,
    availability: 'in_stock',
    preparationTime: 'Freshly baked daily',
    variants: [
      { id: 'pack-of-4', label: 'Pack of 4 Giant Cookies (100g each)', price: 520 },
      { id: 'pack-of-8', label: 'Pack of 8 Giant Cookies', price: 980 }
    ],
    flavorNotes: ['Pure Butter', 'Chocolate Chunks', 'Sea Salt'],
    allergens: 'Contains Pure Dairy Butter, Gluten.'
  },
  {
    id: 'pistachio-rose-shortbread-biscuits',
    name: 'Pistachio & Rose Pure Butter Shortbread',
    category: 'Cookies',
    price: 480,
    shortDescription: 'Melt-in-mouth butter cookies infused with rose and roasted pistachios.',
    description: 'Delicately crumbly butter cookies made with pure dairy butter, cardamom, rose petals, and roasted pistachios.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'jar-200g', label: 'Gift Jar (200 grams)', price: 480 },
      { id: 'box-400g', label: 'Tin Box (400 grams)', price: 890 }
    ],
    flavorNotes: ['Pure Butter', 'Toasted Pistachios', 'Rose Petals'],
    allergens: 'Contains Tree Nuts, Pure Dairy Butter, Gluten.'
  },
  {
    id: 'paris-macaron-gift-box',
    name: 'Classic Macaron Box',
    category: 'Desserts',
    price: 850,
    shortDescription: 'Crisp egg-free macarons with smooth chocolate and fruit fillings.',
    description: 'Delicate egg-free macarons made with almond flour and delicious fillings including Rose Lychee, Dark Chocolate, Salted Caramel, and Pistachio.',
    image: 'https://images.unsplash.com/photo-1569864321390-dc8727ff068f?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'box-of-6', label: 'Box of 6 Assorted', price: 850 },
      { id: 'box-of-12', label: 'Box of 12 Assorted', price: 1600 }
    ],
    flavorNotes: ['Rose Lychee', 'Dark Chocolate', 'Pistachio', 'Salted Caramel'],
    allergens: 'Contains Almonds (Nuts), Pure Dairy Butter.'
  },
  {
    id: 'tiered-floral-wedding-cake',
    name: 'Two-Tiered Celebration Cake',
    category: 'Special Occasion Treats',
    price: 4900,
    shortDescription: 'Two-tiered celebration cake with textured ivory frosting and fresh flowers.',
    description: 'Perfect for birthdays, engagements, and anniversaries. A lovely two-tier cake with your choice of flavours, textured buttercream, and fresh floral decoration.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: false,
    isSignature: true,
    availability: 'pre_order_only',
    preparationTime: 'Minimum 3 to 4 days advance booking',
    variants: [
      { id: '2-tier-2kg', label: '2 Tiers - 2.5 kg (Serves 20-25)', price: 4900 },
      { id: '2-tier-3.5kg', label: '2 Tiers - 3.5 kg (Serves 35-40)', price: 6800 }
    ],
    flavorNotes: ['Custom Flavour Selection', 'Moist Cake Crumb', 'Fresh Floral Styling'],
    allergens: 'Contains Pure Dairy Butter, Gluten.'
  },
  {
    id: 'luxury-festive-dessert-hamper',
    name: 'Celebration Gift Hamper',
    category: 'Special Occasion Treats',
    price: 2450,
    shortDescription: 'Curated gift box with brownies, macarons, pistachio cookies, and sweet treats.',
    description: 'A lovely gift box tied with satin ribbon. Includes 4 fudge brownies, 6 macarons, 1 jar pistachio shortbread, and chocolate treats.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: true,
    isSignature: true,
    availability: 'pre_order_only',
    preparationTime: '48 hours advance notice',
    variants: [
      { id: 'classic-hamper', label: 'Classic Gift Box', price: 2450 },
      { id: 'luxury-keepsake-hamper', label: 'Grand Gift Box with Floral Accent', price: 3800 }
    ],
    flavorNotes: ['Assortment of Best-Selling Bakes'],
    allergens: 'Varies by item. Contains Pure Dairy Butter, Nuts.'
  }
];
