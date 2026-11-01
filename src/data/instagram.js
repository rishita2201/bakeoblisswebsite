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
    id: 'post-1',
    category: 'Celebration Cakes',
    caption: 'Lovely piped buttercream cake with fresh homemade raspberry compote. Baked fresh to order in our Perambur kitchen ✨ #BakeOBliss #ChennaiBakers #EgglessCakes #CakesOfInstagram',
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    localFallback: '/images/instagram/post-1.jpg',
    likes: 184,
    comments: 29,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '3 days ago'
  },
  {
    id: 'post-2',
    category: 'Fudge Brownies',
    caption: 'That coveted shiny paper-thin crinkle crust with dense, fudgy dark chocolate center. Who wants a warm corner slice? 🤎 #BrownieLovers #CrinkleTop #BakeOBliss',
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    localFallback: '/images/instagram/post-2.jpg',
    likes: 247,
    comments: 41,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '5 days ago'
  },
  {
    id: 'post-3',
    category: 'Buttercream Cupcakes',
    caption: 'Delicate hand-piped buttercream hydrangeas & roses on our fluffy vanilla cupcakes. Baked for an intimate family party 🌸 #FloralCupcakes #HomeBaking',
    imageUrl: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80',
    localFallback: '/images/instagram/post-3.jpg',
    likes: 312,
    comments: 53,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '1 week ago'
  },
  {
    id: 'post-4',
    category: 'Fresh Cookies',
    caption: 'NYC Style Chunky Chocolate Chip Cookies fresh from the oven! Crispy golden edges and soft gooey melted chocolate pockets inside 🍪 #NYCStyleCookies #FreshlyBaked #Perambur',
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    localFallback: '/images/instagram/post-4.jpg',
    likes: 198,
    comments: 34,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '1 week ago'
  },
  {
    id: 'post-5',
    category: 'Dark Chocolate Truffle',
    caption: 'Rich Belgian dark chocolate ganache drip with salted caramel pearls & gold leaf leafing. The showstopper of the weekend celebration! 🍫👑 #ChocolateTruffle #CelebrationCakes',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    localFallback: '/images/instagram/post-5.jpg',
    likes: 276,
    comments: 38,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '2 weeks ago'
  },
  {
    id: 'post-6',
    category: 'Tiered Cakes',
    caption: 'Rustic textured ivory buttercream adorned with eucalyptus and garden blush blooms. Made with love at Flat 803, North Town Apartment 🤍🌿 #WeddingCake #CustomCakes',
    imageUrl: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80',
    localFallback: '/images/instagram/post-6.jpg',
    likes: 421,
    comments: 67,
    postUrl: 'https://www.instagram.com/bakeobliss/',
    date: '2 weeks ago'
  }
];
