import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  X,
  Phone,
  Mail,
  MessageSquare,
  ArrowUp,
  Headphones
} from 'lucide-react';

const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons when scrolled more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Also close menu if scrolled back to top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const actions = [
    {
      id: 'chat',
      icon: <MessageSquare size={20} />,
      label: 'Message',
      color: 'bg-indigo-600',
      onClick: () => {
        navigate('/contact');
        setIsOpen(false);
      }
    },
    {
      id: 'email',
      icon: <Mail size={20} />,
      label: 'Email',
      color: 'bg-blue-600',
      onClick: () => window.location.href = 'mailto:yasiruln215@gmail.com'
    },
    {
      id: 'call',
      icon: <Phone size={20} />,
      label: 'Call',
      color: 'bg-emerald-600',
      onClick: () => window.location.href = 'tel:+94703875215'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-[9999] flex flex-col-reverse items-end gap-4"
        >
          {/* 1. Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="relative group w-14 h-14 flex items-center justify-center"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Outer Ring Border */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 group-hover:border-blue-400 transition-colors duration-300" />
            
            {/* Inner Blue Circle */}
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:bg-blue-500 transition-colors duration-300">
              <ArrowUp size={20} strokeWidth={3} className="text-white" />
            </div>

            {/* Tooltip */}
            <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap pointer-events-none border border-slate-700/50 backdrop-blur-md translate-x-2 group-hover:translate-x-0">
              Scroll to Top
            </span>
          </motion.button>

          {/* 2. Contact Menu Group */}
          <div className="flex flex-col-reverse items-end gap-4">
            {/* Main Header/Support Toggle */}
            <motion.button
              onClick={toggleMenu}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 border border-white/10 ${isOpen ? 'bg-slate-800' : 'bg-blue-600 hover:bg-blue-500'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                {isOpen ? (
                  <X size={24} strokeWidth={2.5} />
                ) : (
                  <Headphones size={24} strokeWidth={2.5} />
                )}
              </motion.div>
            </motion.button>

            {/* Expanded Actions Stack */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="flex flex-col-reverse items-end gap-3"
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {actions.map((action, index) => (
                    <motion.div
                      key={action.id}
                      variants={{
                        open: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 }
                        },
                        closed: {
                          opacity: 0,
                          y: 20,
                          scale: 0.5,
                          transition: { duration: 0.2 }
                        }
                      }}
                      className="group relative flex items-center gap-3"
                    >
                      <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap pointer-events-none border border-slate-700/50 backdrop-blur-md">
                        {action.label}
                      </span>
                      <button
                        onClick={action.onClick}
                        className={`${action.color} text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border border-white/10`}
                      >
                        {action.icon}
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionMenu;
