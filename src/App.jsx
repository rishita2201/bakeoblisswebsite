import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Toast } from './components/Toast';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { ProductDetails } from './pages/ProductDetails';
import { CustomOrders } from './pages/CustomOrders';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

function NotFound() {
  return (
    <div className="py-24 max-w-md mx-auto px-4 text-center space-y-4">
      <span className="font-serif text-6xl font-bold text-rose-500">404</span>
      <h2 className="font-serif text-2xl font-bold text-chocolate">Page Not Found</h2>
      <p className="text-sm text-chocolate/70">
        The sweet treat or page you were looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-chocolate text-ivory text-xs font-semibold hover:bg-chocolate-600 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}

export function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-ivory selection:bg-blush selection:text-chocolate">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/custom-orders" element={<CustomOrders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <Toast />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
