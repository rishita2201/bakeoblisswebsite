/**
 * BAKE O BLISS - GLOBAL CONFIGURATION
 * 
 * Location: North Town Apartment, Perambur, Chennai
 * Specialty: 100% Pure Vegetarian & Eggless Home Bakery
 */

export const BAKERY_CONFIG = {
  brandName: 'Bake O Bliss',
  tagline: 'Artisanal Homemade Bakery',
  shortDescription: 'Chennai’s home bakery crafting celebration cakes, fudgy crinkle-top brownies, cupcakes, and sweet treats made fresh to order with pure dairy butter and rich chocolate.',
  
  // Dietary Speciality
  dietaryNote: 'Dedicated kitchen • Pure dairy butter • Zero gelatin • Zero eggs',
  isPureVeg: true,

  // WhatsApp ordering contact
  // FORMAT: Country code without '+' or special characters for wa.me links
  whatsappNumber: '919841511011', 
  whatsappDisplayNumber: '+91 98415 11011',
  phoneNumber: '+91 98415 11011',
  phoneCallUrl: 'tel:+919841511011',
  whatsappDefaultGreeting: 'Hello Bake O Bliss! I would like to inquire about placing an order.',

  // Social & Web Links
  instagramHandle: '@bakeobliss',
  instagramUrl: 'https://www.instagram.com/bakeobliss/',
  email: 'bakeobliss.chennai@gmail.com',
  
  // Location & Studio Address
  location: {
    title: 'Bake O Bliss Home Bakery',
    address: 'Flat No. 803, Tower 4, North Town Apartment, Stephenson Road, Binny Garden, Perambur',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600012',
    country: 'India',
    landmark: 'North Town Apartment (Perambur / Binny Garden). Self-pickup available at Tower 4.',
    googleMapsSearchUrl: 'https://maps.google.com/?q=North+Town+Apartment+Stephenson+Road+Binny+Garden+Perambur+Chennai+600012'
  },
  
  operatingHours: {
    days: 'Monday – Sunday (All 7 Days)',
    hours: '10:00 AM – 7:30 PM',
    leadTimeNotice: 'Standard bakes require 24 hours advance notice. Custom celebration cakes require 48-72 hours.',
  },

  // Currency & Ordering Settings
  currency: {
    symbol: '₹',
    code: 'INR',
    position: 'prefix'
  },

  // Order Confirmation Disclaimer
  orderDisclaimer: 'Please note: Submitting an order records your request in our bakery system and opens WhatsApp to coordinate directly with our baker. Your order is confirmed once we verify slot availability and share payment confirmation.',
  
  // Pickup / Delivery options
  fulfillmentOptions: [
    { 
      id: 'pickup', 
      label: 'Studio Self-Pickup (Free)', 
      description: 'Collect fresh from Tower 4, North Town Apartment, Perambur, Chennai.' 
    },
    { 
      id: 'delivery', 
      label: 'Chennai Local Delivery (via Porter / Swiggy Genie / Dunzo)', 
      description: 'Delivered safely in AC cab or temperature-protected delivery. Delivery charges at actuals.' 
    }
  ],

  // Admin access default PIN
  adminDefaultPin: '8034' // Flat 803 Tower 4
};
