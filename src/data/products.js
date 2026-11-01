/**
 * BAKE O BLISS - SAMPLE PRODUCT CATALOGUE
 * 
 * IMPORTANT NOTE FOR BAKERY OWNER:
 * The items below are sample demonstration products created to showcase your online store.
 * You can edit, add, or remove products anytime by modifying this file.
 * All prices, variants, descriptions, and images can be updated here directly.
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
    shortDescription: 'Delicate vanilla sponge layered with house-made raspberry compote and organic rosewater Swiss buttercream.',
    description: 'An ethereal celebration centerpiece inspired by European tea salons. Soft, aromatic Madagascar vanilla sponge filled with tart hand-cooked raspberry reduction, frosted with smooth rosewater-infused Swiss meringue buttercream and adorned with edible dried organic rose petals and blush piping.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    egglessAvailable: true,
    availability: 'in_stock', // 'in_stock', 'pre_order_only', 'sold_out'
    preparationTime: '24 hours advance notice',
    variants: [
      { id: '500g', label: '500 grams (Serves 4-6)', price: 1450 },
      { id: '1kg', label: '1 kg (Serves 8-12)', price: 2600 },
      { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 3750 }
    ],
    flavorNotes: ['Madagascar Vanilla', 'Tart Raspberry', 'Damask Rose Buttercream'],
    allergens: 'Contains Dairy, Gluten. 100% Eggless option available on request.'
  },
  {
    id: 'belgian-dark-chocolate-truffle-cake',
    name: 'Belgian Dark Chocolate Truffle Cake',
    category: 'Cakes',
    price: 1550,
    shortDescription: 'Intense 70% Callebaut chocolate sponge drenched in espresso ganache and cocoa velvet dusting.',
    description: 'The ultimate indulgence for true chocolate aficionados. Rich, moist layers baked with single-origin Belgian cocoa, filled with silky dark chocolate ganache, and crowned with hand-rolled artisan truffles and gold dust.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: false,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: '500g', label: '500 grams (Serves 4-6)', price: 1550 },
      { id: '1kg', label: '1 kg (Serves 8-12)', price: 2850 },
      { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 4100 }
    ],
    flavorNotes: ['70% Belgian Dark Chocolate', 'Silky Ganache', 'Espresso Undertone'],
    allergens: 'Contains Dairy, Gluten. Eggless option available.'
  },
  {
    id: 'salted-caramel-biscoff-drip-cake',
    name: 'Salted Caramel Biscoff Drip Cake',
    category: 'Cakes',
    price: 1600,
    shortDescription: 'Spiced speculoos sponge layered with house salted caramel drizzle and crunchy Biscoff crumb.',
    description: 'Warm spices meet velvety sweetness. Fluffy Biscoff cookie butter sponge paired with layers of salted butter caramel cream, finished with an amber caramel drip and loaded with crispy lotus biscuits.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: false,
    isSignature: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: '500g', label: '500 grams (Serves 4-6)', price: 1600 },
      { id: '1kg', label: '1 kg (Serves 8-12)', price: 2950 },
      { id: '1.5kg', label: '1.5 kg (Serves 14-18)', price: 4200 }
    ],
    flavorNotes: ['Lotus Speculoos', 'Sea Salt Caramel', 'Brown Butter'],
    allergens: 'Contains Dairy, Gluten, Soy.'
  },
  {
    id: 'floral-pastel-celebration-cupcakes',
    name: 'Artisanal Floral Buttercream Cupcakes',
    category: 'Cupcakes',
    price: 750,
    shortDescription: 'Box of delicate cupcakes piped with hand-piped floral hydrangeas and English garden roses.',
    description: 'Each cupcake is a miniature work of edible floral art. Made with fluffy vanilla bean and lemon curd sponge, topped with silky Swiss buttercream piped in subtle dusty rose and ivory petals.',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: 'Same day (subject to slot) or 24h advance',
    variants: [
      { id: 'box-of-6', label: 'Box of 6 Assorted', price: 750 },
      { id: 'box-of-12', label: 'Box of 12 Assorted', price: 1400 }
    ],
    flavorNotes: ['Vanilla Bean', 'Raspberry Curd', 'Swiss Buttercream'],
    allergens: 'Contains Dairy, Gluten.'
  },
  {
    id: 'fudge-brownie-cupcake-trio',
    name: 'Dark Chocolate Ganache Cupcakes',
    category: 'Cupcakes',
    price: 680,
    shortDescription: 'Super moist chocolate cupcakes topped with whipped dark chocolate ganache swirl.',
    description: 'Decadent, deep chocolate cupcakes made with premium Dutch cocoa, crowned with a swirl of whipped Belgian dark ganache and sprinkled with crunchy chocolate crisp pearls.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: false,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'box-of-6', label: 'Box of 6 Cupcakes', price: 680 },
      { id: 'box-of-12', label: 'Box of 12 Cupcakes', price: 1250 }
    ],
    flavorNotes: ['Dutch Cocoa', 'Whipped Ganache', 'Dark Chocolate Pearls'],
    allergens: 'Contains Dairy, Gluten.'
  },
  {
    id: 'crinkle-top-fudge-brownies',
    name: 'Classic Crinkle-Top Fudge Brownies',
    category: 'Brownies',
    price: 650,
    shortDescription: 'Signature ultra-fudgy brownies with that coveted paper-thin shiny crinkle crust.',
    description: 'Our pride and joy. Slow-melted French dark chocolate blended with pure dairy butter and baked to a dense, gooey center with crisp edges and a shiny, paper-thin crinkle top.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: 'Freshly baked daily',
    variants: [
      { id: 'box-of-4', label: 'Box of 4 Large Squares', price: 650 },
      { id: 'box-of-8', label: 'Box of 8 Large Squares', price: 1200 },
      { id: 'box-of-12', label: 'Party Box of 12 Squares', price: 1750 }
    ],
    flavorNotes: ['French Dark Chocolate', 'Fudge Center', 'Molasses Undertones'],
    allergens: 'Contains Dairy, Gluten. Eggless version available.'
  },
  {
    id: 'sea-salt-caramel-walnut-brownies',
    name: 'Salted Caramel & Roasted Walnut Brownies',
    category: 'Brownies',
    price: 720,
    shortDescription: 'Deep chocolate brownie squares swirled with sea salt caramel and toasted walnuts.',
    description: 'Rich dark chocolate brownie base generously swirled with our slow-simmered artisanal salted caramel and loaded with oven-toasted California walnuts for an addictive crunch.',
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: false,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'box-of-4', label: 'Box of 4 Gourmet Squares', price: 720 },
      { id: 'box-of-8', label: 'Box of 8 Gourmet Squares', price: 1350 }
    ],
    flavorNotes: ['Toasted Walnuts', 'Fleur de Sel Caramel', 'Dark Chocolate'],
    allergens: 'Contains Tree Nuts, Dairy, Gluten.'
  },
  {
    id: 'nyc-style-chunky-chocolate-chip-cookies',
    name: 'NYC Style Chunky Choc-Chip Cookies',
    category: 'Cookies',
    price: 520,
    shortDescription: 'Extra-thick, golden-baked cookies with melted chocolate pockets and flaky sea salt.',
    description: 'Crisp on the outer rim and soft, chewy, and gooey in the center. Made with brown butter, loaded with semi-sweet and milk chocolate chunks, and finished with Maldon sea salt flakes.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: false,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: 'Freshly baked daily',
    variants: [
      { id: 'pack-of-4', label: 'Pack of 4 Giant Cookies (100g each)', price: 520 },
      { id: 'pack-of-8', label: 'Pack of 8 Giant Cookies', price: 980 }
    ],
    flavorNotes: ['Browned Butter', 'Belgian Chocolate Chunks', 'Maldon Sea Salt'],
    allergens: 'Contains Dairy, Gluten.'
  },
  {
    id: 'pistachio-rose-shortbread-biscuits',
    name: 'Pistachio & Rose Artisanal Shortbread',
    category: 'Cookies',
    price: 480,
    shortDescription: 'Melt-in-mouth Scottish shortbread infused with Persian rose and slivered Iranian pistachios.',
    description: 'Delicately crumbly butter shortbread made with pure cultured butter, scented with cardamon and rose petals, rolled in roasted Iranian pistachio crumb.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: true,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'jar-200g', label: 'Gift Jar (200 grams)', price: 480 },
      { id: 'box-400g', label: 'Gourmet Tin (400 grams)', price: 890 }
    ],
    flavorNotes: ['Pure Cultured Butter', 'Toasted Pistachios', 'Persian Rose'],
    allergens: 'Contains Tree Nuts, Dairy, Gluten. 100% Eggless by default.'
  },
  {
    id: 'paris-macaron-gift-box',
    name: 'Artisan Parisian Macaron Collection',
    category: 'Desserts',
    price: 850,
    shortDescription: 'Crisp almond meringue shells with luscious ganache and fruit reduction fillings.',
    description: 'Handcrafted traditional French macarons with delicate pieds and soft, chewy centers. Includes an assortment of Rose Lychee, Dark Chocolate Ganache, Salted Caramel, and Pistachio Praline.',
    image: 'https://images.unsplash.com/photo-1569864321390-dc8727ff068f?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isSignature: true,
    egglessAvailable: false,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'box-of-6', label: 'Prestige Box of 6 Assorted', price: 850 },
      { id: 'box-of-12', label: 'Luxury Keepsake Box of 12', price: 1600 }
    ],
    flavorNotes: ['Rose Lychee', 'Dark Cocoa Ganache', 'Pistachio', 'Salted Caramel'],
    allergens: 'Contains Almonds (Nuts), Egg Whites, Dairy. Gluten-free recipe.'
  },
  {
    id: 'vanilla-berry-tart-entremet',
    name: 'Fresh Mixed Berry & Vanilla Tart',
    category: 'Desserts',
    price: 890,
    shortDescription: 'All-butter sweet pastry crust filled with silky vanilla diplomat cream and fresh berries.',
    description: 'Crisp, golden pâte sablée tart shell brushed with white chocolate, filled with smooth Tahitian vanilla pastry cream, and piled high with fresh seasonal strawberries, blueberries, and mint.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: false,
    isSignature: false,
    egglessAvailable: true,
    availability: 'in_stock',
    preparationTime: '24 hours advance notice',
    variants: [
      { id: 'individual-trio', label: 'Box of 3 Individual Tarts', price: 890 },
      { id: 'large-tart', label: 'Large 8-inch Tart (Serves 6)', price: 1650 }
    ],
    flavorNotes: ['Tahitian Vanilla Bean', 'Crisp Butter Sablée', 'Fresh Berries'],
    allergens: 'Contains Dairy, Gluten.'
  },
  {
    id: 'tiered-floral-wedding-cake',
    name: 'Two-Tiered Botanical Celebration Cake',
    category: 'Special Occasion Treats',
    price: 4900,
    shortDescription: 'Stunning two-tiered centerpiece cake finished with textured ivory stucco and fresh botanical blooms.',
    description: 'Created for birthdays, engagements, and milestone anniversaries. A breathtaking two-tier creation with your choice of sponge flavours, covered in subtle rustic buttercream texture, natural greenery and fresh garden florals.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: false,
    isSignature: true,
    egglessAvailable: true,
    availability: 'pre_order_only',
    preparationTime: 'Minimum 3 to 4 days advance booking',
    variants: [
      { id: '2-tier-2kg', label: '2 Tiers - 2.5 kg (Serves 20-25)', price: 4900 },
      { id: '2-tier-3.5kg', label: '2 Tiers - 3.5 kg (Serves 35-40)', price: 6800 }
    ],
    flavorNotes: ['Custom Flavour Selection', 'Velvety Crumb', 'Fresh Floral Styling'],
    allergens: 'Customizable. Eggless options readily provided.'
  },
  {
    id: 'luxury-festive-dessert-hamper',
    name: 'Grand Bake O Bliss Keepsake Hamper',
    category: 'Special Occasion Treats',
    price: 2450,
    shortDescription: 'Curated gift box featuring brownies, macarons, shortbread jar, and mini floral cake.',
    description: 'The ultimate bespoke gifting experience. Beautifully presented in a reusable pastel rigid box tied with silk ribbon and personal calligraphy card. Contains 4 fudge brownies, 6 macarons, 1 tin pistachio shortbread, and chocolate crispies.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [],
    isBestseller: true,
    isSignature: true,
    egglessAvailable: true,
    availability: 'pre_order_only',
    preparationTime: '48 hours advance notice',
    variants: [
      { id: 'classic-hamper', label: 'Classic Gift Box', price: 2450 },
      { id: 'luxury-keepsake-hamper', label: 'Luxury Grand Hamper with Floral Accent', price: 3800 }
    ],
    flavorNotes: ['Curated Assortment of Best-Selling Confections'],
    allergens: 'Varies by item.'
  }
];
