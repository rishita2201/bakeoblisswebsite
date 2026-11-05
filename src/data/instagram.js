/**
 * BAKE O BLISS - INSTAGRAM GALLERY FEED DATA
 * 
 * Account: @bakeobliss (https://www.instagram.com/bakeobliss/)
 * Bio: "Freshly baked, made with love 🤎 | Cakes • Brownies • Cookies • Bakes | Made to make your moments sweeter ✨"
 * 
 * NOTE ON INSTAGRAM INTEGRATION:
 * Instagram CDN links (scontent.cdninstagram.com) expire within 24-48 hours with signed tokens
 * and throw HTTP 403 Forbidden errors if hotlinked directly. 
 * 
 * To show custom photos from your phone or Instagram:
 * 1. Place your .jpg or .png photos inside /public/images/instagram/ (e.g. post-1.jpg, post-2.jpg)
 * 2. Or update the imageUrl below. 
 * The gallery uses high-resolution photography matching Bake O Bliss's exact bakes.
 */

export const INSTAGRAM_POSTS = [
  {
    id: 'reel-festive-hamper',
    category: 'Festive Hampers & Gifts',
    caption: '✨ Festive gifting, sorted! A little sweetness goes a long way 🪔 Our hampers & gift bags are handmade with love in Perambur, Chennai — packed in gorgeous gift boxes with artisanal cookies & bakes. #bakeobliss #chennaibakers #diwaligifts',
    imageUrl: '/images/cakes/festive-hamper-box.jpg',
    localFallback: '/images/cakes/festive-hamper-box.jpg',
    likes: 542,
    comments: 63,
    postUrl: 'https://www.instagram.com/reel/DePZH6ZNT8G/',
    isReel: true,
    date: 'Featured Reel'
  },
  {
    id: 'post-1',
    category: 'Celebration Cakes',
    caption: 'Pastel lilac & blush two-tier birthday cake with delicate hand-piped ruffles and 3D fluttering butterflies 🌸 Baked with love for Seshika ✨ #BakeOBliss #ChennaiBakers #CelebrationCakes',
    imageUrl: '/images/cakes/butterfly-pastel-2tier-cake.jpg',
    localFallback: '/images/cakes/butterfly-pastel-2tier-cake.jpg',
    likes: 284,
    comments: 39,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '3 days ago'
  },
  {
    id: 'post-2',
    category: 'Chocolate Drip Bakes',
    caption: 'Rich Belgian chocolate ganache drip with loaded Oreos, Hershey bars, and whipped chocolate rosettes! Who wants a slice? 🍫🤎 #ChocolateDrip #BakeOBliss #ChennaiBakery',
    imageUrl: '/images/cakes/chocolate-drip-oreo-cake.jpg',
    localFallback: '/images/cakes/chocolate-drip-oreo-cake.jpg',
    likes: 347,
    comments: 51,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '5 days ago'
  },
  {
    id: 'post-3',
    category: 'Fudge Brownie Cakes',
    caption: 'Decadent fudgy dark chocolate cake loaded with crunchy Lotus Biscoff crumbles and caramel drizzle. Pure bliss in every bite 🤎✨ #FudgeBrownie #BiscoffLove',
    imageUrl: '/images/cakes/fudge-brownie-lotus-cake.jpg',
    localFallback: '/images/cakes/fudge-brownie-lotus-cake.jpg',
    likes: 312,
    comments: 43,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '1 week ago'
  },
  {
    id: 'post-4',
    category: 'Floating Tier Special',
    caption: 'Spectacular 3-tier floating illusion engagement cake with glowing floral chamber and miniature couple topper 💍✨ Made at North Town Apartment #EngagementCake',
    imageUrl: '/images/cakes/floating-illusion-engagement-cake.jpg',
    localFallback: '/images/cakes/floating-illusion-engagement-cake.jpg',
    likes: 498,
    comments: 74,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '1 week ago'
  },
  {
    id: 'post-5',
    category: 'Anniversary Specials',
    caption: 'Romantic pink rosette cake with custom couple embrace silhouette & metallic gold topper for an intimate anniversary celebration 🤍 #AnniversaryCake #BakeOBliss',
    imageUrl: '/images/cakes/couple-silhouette-anniversary-cake.jpg',
    localFallback: '/images/cakes/couple-silhouette-anniversary-cake.jpg',
    likes: 376,
    comments: 48,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '2 weeks ago'
  }
];
