import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ChevronUp, ChevronDown, Monitor, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPcMode, setIsPcMode] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Detect if it's a mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    };
    setIsMobileDevice(checkMobile());

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleViewMode = () => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      if (!isPcMode) {
        // Switch to PC Mode (Fixed width)
        viewport.setAttribute('content', 'width=1280');
        setIsPcMode(true);
      } else {
        // Switch back to Mobile Mode
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        setIsPcMode(false);
      }
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  // Calculate scale for the floating button in PC mode on mobile
  // If viewport is 1280 and device is 375, scale should be 1280/375
  const getScale = () => {
    if (isPcMode && isMobileDevice) {
      return 1280 / window.innerWidth;
    }
    return 1;
  };

  const buttonScale = getScale();

  return (
    <div 
      className="fixed bottom-6 right-6 z-[9999] flex flex-col space-y-3 items-end"
      style={{ 
        transform: `scale(${buttonScale})`,
        transformOrigin: 'bottom right'
      }}
    >
      {/* 1. Phone Call (Mobile Only - Hidden on Tablet/PC) */}
      <a
        href="tel:010-6355-8055"
        className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all md:hidden"
        title="전화 상담"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* 2. SMS (Mobile Only - Hidden on Tablet/PC) */}
      <a
        href="sms:010-6355-8055"
        className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all md:hidden"
        title="문자 문의"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* 3. PC/Mobile Mode Toggle (Mobile Only - Hidden on Tablet/PC) */}
      <button
        onClick={toggleViewMode}
        className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-dark transition-all md:hidden"
        title={isPcMode ? "모바일 화면으로 보기" : "PC 화면으로 보기"}
      >
        {isPcMode ? <Smartphone className="w-6 h-6" /> : <Monitor className="w-6 h-6" />}
      </button>

      {/* 4. Scroll Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-primary text-dark rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-all"
            title="맨 위로 이동"
          >
            <ChevronUp className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 5. Scroll Bottom */}
      <button
        onClick={scrollToBottom}
        className="w-14 h-14 bg-white text-secondary border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all"
        title="맨 아래로 이동"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </div>
  );
}
