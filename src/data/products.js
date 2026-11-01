/**
 * BAKE O BLISS - 100% PURE VEGETARIAN & EGGLESS CATALOGUE
 * 
 * Location: North Town Apartment, Perambur, Chennai
 * 
 * All treats are 100% Eggless & Pure Vegetarian.
 * Prepared in a dedicated vegetarian home studio.
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
    shortDescription: '100% Eggless vanilla sponge layered with house raspberry compote & organic rosewater Swiss-style buttercream.',
    description: 'An ethereal celebration centerpiece inspired by European tea salons. 100% Eggless, aromatic Madagascar vanilla sponge filled with tart hand-cooked raspberry reduction, frosted with silky rosewater buttercream and adorned with edible dried organic rose petals and blush piping.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock', // 'in_stock', 'pre_order_only', 'sold_out'
    preparationTime: '24 hours advance notice',
    variants: [
      { id: '500g', label: '500 grams (Serves 4-6)', price: 1450 },
      { id: '1kg', label: '1 kg (Serves 8-12)', price: 2600 },
      { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 3750 }
    ],
    flavorNotes: ['Madagascar Vanilla', 'Tart Raspberry', 'Damask Rose Buttercream'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Dairy, Gluten.'
  },
  {
    id: 'belgian-dark-chocolate-truffle-cake',
    name: 'Belgian Dark Chocolate Truffle Cake',
    category: 'Cakes',
    price: 1550,
    shortDescription: '100% Eggless intense 70% Callebaut chocolate sponge drenched in espresso ganache & velvet cocoa dusting.',
    description: 'The ultimate indulgence for true chocolate aficionados. 100% Eggless, ultra-rich moist layers baked with single-origin Belgian cocoa, filled with silky dark chocolate ganache, and crowned with hand-rolled artisan truffles and edible gold leaf.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: false,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: '500g', label: '500 grams (Serves 4-6)', price: 1550 },
      { id: '1kg', label: '1 kg (Serves 8-12)', price: 2850 },
      { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 4100 }
    ],
    flavorNotes: ['70% Belgian Dark Chocolate', 'Silky Ganache', 'Espresso Undertone'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Dairy, Gluten.'
  },
  {
    id: 'salted-caramel-biscoff-drip-cake',
    name: 'Salted Caramel Biscoff Drip Cake',
    category: 'Cakes',
    price: 1600,
    shortDescription: '100% Eggless spiced speculoos sponge layered with house salted caramel drizzle & Biscoff biscuit crunch.',
    description: 'Warm spices meet velvety sweetness. Fluffy eggless Biscoff cookie butter sponge paired with layers of salted butter caramel cream, finished with an amber caramel drip and loaded with crispy Lotus biscuits.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: false,
    isSignature: true,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: '500g', label: '500 grams (Serves 4-6)', price: 1600 },
      { id: '1kg', label: '1 kg (Serves 8-12)', price: 2950 },
      { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 4200 }
    ],
    flavorNotes: ['Lotus Speculoos', 'Sea Salt Caramel', 'Brown Butter Notes'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Dairy, Gluten, Soy.'
  },
  {
    id: 'floral-pastel-celebration-cupcakes',
    name: 'Eggless Floral Buttercream Cupcakes',
    category: 'Cupcakes',
    price: 750,
    shortDescription: '100% Eggless box of delicate cupcakes piped with hand-piped floral hydrangeas & garden blooms.',
    description: 'Each cupcake is a miniature work of edible floral art. Made with fluffy 100% eggless vanilla bean sponge, topped with silky buttercream piped in subtle dusty rose and ivory petals.',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: 'Same day (subject to slot) or 24h advance',
    variants: [
      { id: 'box-of-6', label: 'Box of 6 Assorted', price: 750 },
      { id: 'box-of-12', label: 'Box of 12 Assorted', price: 1400 }
    ],
    flavorNotes: ['Vanilla Bean', 'Raspberry Curd', 'Silky Buttercream'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Dairy, Gluten.'
  },
  {
    id: 'fudge-brownie-cupcake-trio',
    name: 'Eggless Dark Chocolate Ganache Cupcakes',
    category: 'Cupcakes',
    price: 680,
    shortDescription: '100% Eggless moist chocolate cupcakes topped with whipped Belgian dark ganache swirl.',
    description: 'Decadent, deep chocolate cupcakes made with premium Dutch cocoa and cultured butter, crowned with whipped Belgian dark chocolate ganache and chocolate crisp pearls.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: false,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'box-of-6', label: 'Box of 6 Cupcakes', price: 680 },
      { id: 'box-of-12', label: 'Box of 12 Cupcakes', price: 1250 }
    ],
    flavorNotes: ['Dutch Cocoa', 'Whipped Ganache', 'Dark Chocolate Pearls'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Dairy, Gluten.'
  },
  {
    id: 'crinkle-top-fudge-brownies',
    name: 'Signature Eggless Crinkle-Top Brownies',
    category: 'Brownies',
    price: 650,
    shortDescription: '100% Eggless signature ultra-fudgy brownies with that coveted shiny crinkle crust.',
    description: 'Our pride and joy. Slow-melted French dark chocolate blended with pure dairy butter and baked into a dense, gooey, eggless center with crisp edges and a shiny, paper-thin crinkle top.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: 'Freshly baked daily',
    variants: [
      { id: 'box-of-4', label: 'Box of 4 Large Squares', price: 650 },
      { id: 'box-of-8', label: 'Box of 8 Large Squares', price: 1200 },
      { id: 'box-of-12', label: 'Party Box of 12 Squares', price: 1750 }
    ],
    flavorNotes: ['French Dark Chocolate', 'Gooey Fudge Center', 'Pure Dairy Butter'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Dairy, Gluten.'
  },
  {
    id: 'sea-salt-caramel-walnut-brownies',
    name: 'Eggless Salted Caramel & Walnut Brownies',
    category: 'Brownies',
    price: 720,
    shortDescription: '100% Eggless chocolate brownie squares swirled with house caramel and roasted California walnuts.',
    description: 'Rich dark chocolate eggless brownie base generously swirled with slow-simmered artisanal sea salt caramel and oven-toasted California walnuts for an addictive crunch.',
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: false,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'box-of-4', label: 'Box of 4 Gourmet Squares', price: 720 },
      { id: 'box-of-8', label: 'Box of 8 Gourmet Squares', price: 1350 }
    ],
    flavorNotes: ['Toasted Walnuts', 'Fleur de Sel Caramel', 'Dark Chocolate'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Tree Nuts, Dairy, Gluten.'
  },
  {
    id: 'nyc-style-chunky-chocolate-chip-cookies',
    name: 'Eggless NYC Chunky Choc-Chip Cookies',
    category: 'Cookies',
    price: 520,
    shortDescription: '100% Eggless extra-thick golden cookies packed with melted chocolate chunks & flaky sea salt.',
    description: 'Crisp on the outer rim and soft, gooey in the center. Made with brown butter, packed with semi-sweet and milk chocolate chunks, and finished with Maldon sea salt flakes.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: false,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: 'Freshly baked daily',
    variants: [
      { id: 'pack-of-4', label: 'Pack of 4 Giant Cookies (100g each)', price: 520 },
      { id: 'pack-of-8', label: 'Pack of 8 Giant Cookies', price: 980 }
    ],
    flavorNotes: ['Browned Butter', 'Belgian Chocolate Chunks', 'Maldon Sea Salt'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Dairy, Gluten.'
  },
  {
    id: 'pistachio-rose-shortbread-biscuits',
    name: 'Pistachio & Rose Pure Butter Shortbread',
    category: 'Cookies',
    price: 480,
    shortDescription: '100% Eggless melt-in-mouth Scottish shortbread infused with rose & slivered Iranian pistachios.',
    description: 'Delicately crumbly butter shortbread made with pure cultured dairy butter, scented with cardamom and organic rose petals, rolled in roasted Iranian pistachio crumb.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: true,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'jar-200g', label: 'Gift Jar (200 grams)', price: 480 },
      { id: 'box-400g', label: 'Gourmet Tin (400 grams)', price: 890 }
    ],
    flavorNotes: ['Pure Cultured Butter', 'Toasted Pistachios', 'Persian Rose'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Tree Nuts, Dairy, Gluten.'
  },
  {
    id: 'paris-macaron-gift-box',
    name: 'Eggless Parisian Macaron Collection',
    category: 'Desserts',
    price: 850,
    shortDescription: '100% Eggless crisp almond meringue shells with luscious ganache & fruit reduction fillings.',
    description: 'Handcrafted French-style macarons made with pure aquafaba and almond flour. 100% Eggless with delicate pieds and soft chewy centers. Includes Rose Lychee, Dark Chocolate, Salted Caramel, and Pistachio Praline.',
    image: 'https://images.unsplash.com/photo-1569864321390-dc8727ff068f?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'box-of-6', label: 'Prestige Box of 6 Assorted', price: 850 },
      { id: 'box-of-12', label: 'Luxury Keepsake Box of 12', price: 1600 }
    ],
    flavorNotes: ['Rose Lychee', 'Dark Cocoa Ganache', 'Pistachio', 'Salted Caramel'],
    allergens: '100% Pure Vegetarian & Eggless. Contains Almonds (Nuts), Dairy.'
  },
  {
    id: 'tiered-floral-wedding-cake',
    name: 'Two-Tiered Eggless Botanical Cake',
    category: 'Special Occasion Treats',
    price: 4900,
    shortDescription: '100% Eggless two-tiered centerpiece cake finished with textured ivory stucco & fresh blooms.',
    description: 'Created for birthdays, engagements, and milestone anniversaries. A breathtaking two-tier 100% eggless creation with your choice of sponge flavours, covered in subtle rustic buttercream texture and natural garden florals.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: false,
    isSignature: true,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'pre_order_only',
    preparationTime: 'Minimum 3 to 4 days advance booking',
    variants: [
      { id: '2-tier-2kg', label: '2 Tiers - 2.5 kg (Serves 20-25)', price: 4900 },
      { id: '2-tier-3.5kg', label: '2 Tiers - 3.5 kg (Serves 35-40)', price: 6800 }
    ],
    flavorNotes: ['Custom Flavour Selection', 'Eggless Moist Crumb', 'Fresh Floral Styling'],
    allergens: '100% Pure Vegetarian & Eggless. Dairy, Gluten.'
  },
  {
    id: 'luxury-festive-dessert-hamper',
    name: 'Grand 100% Veg Keepsake Hamper',
    category: 'Special Occasion Treats',
    price: 2450,
    shortDescription: 'Curated 100% eggless gift box with brownies, macarons, pistachio shortbread & confections.',
    description: 'The ultimate bespoke gifting experience. Beautifully presented in a reusable pastel rigid box tied with silk ribbon and personal calligraphy card. Contains 4 eggless fudge brownies, 6 eggless macarons, 1 jar pistachio shortbread, and chocolate crispies.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: true,
    isSignature: true,
    isPureVeg: true,
    egglessAvailable: true,
    availability: 'pre_order_only',
    preparationTime: '48 hours advance notice',
    variants: [
      { id: 'classic-hamper', label: 'Classic Gift Box', price: 2450 },
      { id: 'luxury-keepsake-hamper', label: 'Luxury Grand Hamper with Floral Accent', price: 3800 }
    ],
    flavorNotes: ['Curated Assortment of 100% Pure Veg Confections'],
    allergens: '100% Pure Vegetarian & Eggless.'
  }
];
