import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Solutions from './pages/Solutions';
import AboutUs from './pages/AboutUs';
import ContactSupport from './pages/ContactSupport';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-support" element={<ContactSupport />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
