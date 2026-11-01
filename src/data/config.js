/**
 * BAKE O BLISS - GLOBAL CONFIGURATION
 * 
 * Bakery Owner Note:
 * Update this file to change your contact details, WhatsApp number,
 * pickup location, operating hours, and social media links.
 */

export const BAKERY_CONFIG = {
  brandName: 'Bake O Bliss',
  tagline: 'Baked with Love, Made to Delight',
  shortDescription: 'Artisanal handcrafted celebration cakes, gourmet brownies, cupcakes, and tea-time delights made fresh with the purest ingredients in our home studio.',
  
  // WhatsApp ordering contact
  // FORMAT: Country code without '+' or special characters for wa.me links
  // e.g. 919876543210 for +91 98765 43210
  whatsappNumber: '919876543210', 
  whatsappDisplayNumber: '+91 98765 43210',
  whatsappDefaultGreeting: 'Hello Bake O Bliss! I would like to inquire about placing an order.',

  // Social & Web Links
  instagramHandle: '@bakeobliss',
  instagramUrl: 'https://www.instagram.com/bakeobliss/',
  email: 'hello@bakeobliss.com', // Placeholder for customer inquiries
  
  // Location & Operations (Demonstration placeholder - customizable by baker)
  location: {
    title: 'Bake O Bliss Home Studio',
    address: 'Boutique Kitchen, Green Glen Layout, Bellandur / Koramangala',
    city: 'Bengaluru, Karnataka',
    country: 'India',
    landmark: 'Pickup point shared upon order confirmation',
  },
  
  operatingHours: {
    days: 'Tuesday – Sunday (Closed on Mondays)',
    hours: '10:00 AM – 7:30 PM',
    leadTimeNotice: 'Standard orders require 24 hours advance notice. Custom celebration cakes require 48-72 hours.',
  },

  // Currency & Ordering Settings
  currency: {
    symbol: '₹',
    code: 'INR',
    position: 'prefix' // 'prefix' or 'suffix'
  },

  // Order Confirmation Disclaimer
  orderDisclaimer: 'Please note: Submitting an order through this website opens WhatsApp to send your request directly to our baker. Your order is confirmed only after we verify availability, delivery slot, and share payment details.',
  
  // Pickup / Delivery options
  fulfillmentOptions: [
    { id: 'pickup', label: 'Studio Self-Pickup (Free)', description: 'Collect fresh from our boutique home kitchen.' },
    { id: 'delivery', label: 'Local Delivery (Charges via Dunzo / Porter / Swiggy Genie)', description: 'Delivered safely in a temperature-protected carrier. Delivery fee calculated upon confirmation.' }
  ]
};
