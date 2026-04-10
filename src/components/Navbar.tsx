import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LOGO_URL = "https://i.postimg.cc/BnHHTFpZ/Whats-App-Image-2026-04-10-at-10-59-57.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Minor Service', path: '/services#minor-service' },
    { name: 'Major Service', path: '/services#major-service' },
    { name: 'Routine Maintenance', path: '/services#maintenance' },
    { name: 'Aircon Installation', path: '/services#aircon' },
    { name: 'Gas Refilling', path: '/services#gas' },
    { name: 'Leak Fixing', path: '/services#leak' },
    { name: 'Fault Finding', path: '/services#fault' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={LOGO_URL} 
                alt="Airtech Solutions Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-primary block leading-none">AIRTECH</span>
                <span className="text-xs font-medium text-slate-500 tracking-widest uppercase">Solutions Systems</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => link.hasDropdown && setIsServicesHovered(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesHovered(false)}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-semibold transition-colors hover:text-primary flex items-center gap-1 ${
                    isActive(link.path) ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />}
                </Link>

                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-2xl py-4 mt-0 z-50"
                      >
                        <div className="grid grid-cols-1 gap-1 px-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link
              to="/booking"
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium rounded-md ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-white px-3 py-4 rounded-md text-base font-bold shadow-sm"
              >
                Book a Service
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
