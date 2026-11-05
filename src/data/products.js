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
  'Gift Hampers',
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
    image: '/images/cakes/rose-gold-leaf-2tier-cake.jpg',
    additionalImages: [
      '/images/cakes/lavender-floral-40th-cake.jpg',
      '/images/cakes/butterflies-pink-ombre-cake.jpg'
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
    description: 'The ultimate treat for chocolate lovers. Moist layers baked with rich dark chocolate, filled with smooth chocolate ganache, and topped with chocolate truffles and Oreos.',
    image: '/images/cakes/chocolate-drip-oreo-cake.jpg',
    additionalImages: [
      '/images/cakes/fudge-brownie-lotus-cake.jpg',
      '/images/cakes/navy-gold-leaf-birthday-cake.jpg'
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
    name: 'Lotus Biscoff Fudge Drip Cake',
    category: 'Cakes',
    price: 1600,
    shortDescription: 'Spiced Biscoff sponge layered with caramel drizzle and crunchy Lotus biscuit crumb.',
    description: 'Warm spices meet velvety sweetness. Fluffy Biscoff cookie sponge paired with salted caramel cream, finished with a golden caramel drip and crispy Lotus biscuits.',
    image: '/images/cakes/fudge-brownie-lotus-cake.jpg',
    additionalImages: [
      '/images/cakes/chocolate-drip-oreo-cake.jpg'
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
    image: '/images/cakes/pink-rainbow-cloud-cake.jpg',
    additionalImages: [
      '/images/cakes/ballerina-rainbow-birthday-cake.jpg',
      '/images/cakes/hot-air-balloon-rainbow-cake.jpg'
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
    image: '/images/cakes/spiderman-birthday-cake.jpg',
    additionalImages: [
      '/images/cakes/outer-space-galaxy-cake.jpg'
    ],
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
    image: '/images/cakes/fudge-brownie-lotus-cake.jpg',
    additionalImages: [
      '/images/cakes/chocolate-drip-oreo-cake.jpg'
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
    image: '/images/cakes/chocolate-drip-oreo-cake.jpg',
    additionalImages: [
      '/images/cakes/fudge-brownie-lotus-cake.jpg'
    ],
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
    image: '/images/cakes/festive-hamper-box.jpg',
    additionalImages: [
      '/images/instagram/diwali-hamper-reel.jpg'
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
    image: '/images/cakes/festive-hamper-box.jpg',
    additionalImages: [
      '/images/instagram/diwali-hamper-reel.jpg'
    ],
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
    name: 'Classic Rosette & Macaron Box',
    category: 'Desserts',
    price: 850,
    shortDescription: 'Delicious party treats with delicate chocolate and fruit fillings.',
    description: 'Delicate treats made with almond flour and delicious fillings including Rose Lychee, Dark Chocolate, Salted Caramel, and Pistachio.',
    image: '/images/cakes/peach-rosette-piping-cake.jpg',
    additionalImages: [
      '/images/cakes/sunflower-yellow-heart-cake.jpg'
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
    name: 'Royal Wedding & Engagement Tier Cake',
    category: 'Special Occasion Treats',
    price: 4900,
    shortDescription: 'Two-tiered celebration cake with textured ivory frosting and fresh roses.',
    description: 'Perfect for birthdays, engagements, and anniversaries. A lovely multi-tier cake with your choice of flavours, textured buttercream, fresh roses, and gold leafing.',
    image: '/images/cakes/royal-wedding-gold-leaf-2tier.jpg',
    additionalImages: [
      '/images/cakes/floating-illusion-engagement-cake.jpg',
      '/images/cakes/gold-crown-butterfly-2tier-cake.jpg'
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
    name: 'Artisanal Festive Gift Hamper & Celebration Box',
    category: 'Gift Hampers',
    price: 1250,
    shortDescription: 'Curated luxury gift box packed with artisanal cookies, fudge brownies, and celebration treats.',
    description: 'As featured on our Instagram Reel! A little sweetness goes a long way 🪔 Our handcrafted festive hampers and gift bags are handmade with love in our Perambur studio and packed in a gorgeous keepsake gift box. Featuring freshly baked gourmet cookies, rich fudge brownies, and sweet delicacies. Perfect for family, friends, colleagues, and corporate gifting in Chennai.',
    image: '/images/cakes/festive-hamper-box.jpg',
    additionalImages: [
      '/images/instagram/diwali-hamper-reel.jpg'
    ],
    isBestseller: true,
    isSignature: true,
    reelUrl: 'https://www.instagram.com/reel/DePZH6ZNT8G/',
    availability: 'in_stock',
    preparationTime: 'Slots fill up fast — advance booking recommended',
    variants: [
      { id: 'festive-treat-bag', label: 'Festive Treat Gift Bag (Assorted Bakes)', price: 650 },
      { id: 'signature-hamper-box', label: 'Signature Gift Hamper Box (Cookies & Brownies)', price: 1250 },
      { id: 'royal-celebration-box', label: 'Grand Celebration Hamper (Complete Treat Selection)', price: 2150 }
    ],
    flavorNotes: ['Fudge Brownies', 'Gourmet Cookies', 'Pure Butter Shortbread', 'Festive Treats'],
    allergens: 'Contains Pure Dairy Butter, Nuts (Almonds/Pistachios), Gluten.'
  }
];
