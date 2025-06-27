import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Globe, Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ currentLang, t, handleLanguageChange, cartItemCount, logoUrl, isRTL }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: t.navHome || "Accueil" },
    { to: "/shop", label: t.navShop || "Boutique" },
    { to: "/about", label: t.navAbout || "À Propos" },
    { to: "/contact", label: t.navContact || "Contact" },
  ];

  const activeClassName = "text-primary font-semibold border-b-2 border-primary";
  const inactiveClassName = "text-slate-700 hover:text-primary transition-colors";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <div className="bg-primary text-primary-foreground py-1.5 text-xs">
        <div className="container-max flex flex-wrap justify-center md:justify-between items-center gap-x-3 gap-y-1">
          <div className="flex items-center space-x-1.5">
            <Mail size={12} />
            <a href={`mailto:${t.emailAddress}`} className="hover:underline text-xs">{t.emailAddress}</a>
          </div>
          <div className="flex items-center space-x-1.5">
            <Phone size={12} />
            <a href={`tel:${t.whatsappNumber}`} className="hover:underline text-xs">{t.whatsappNumber}</a>
          </div>
          <div className="flex items-center space-x-1.5">
            <Instagram size={12} />
            <a href={t.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-xs">{t.instagramHandle}</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-card shadow-md">
        <div className="container-max py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <img src={logoUrl} alt={t.siteTitle} className="h-8 sm:h-10 w-auto" />
              <span className="text-lg sm:text-xl font-bold text-primary hidden sm:block">{t.siteTitle}</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `${isActive ? activeClassName : inactiveClassName} pb-1 text-sm`}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="relative group">
                 <select 
                    value={currentLang} 
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-transparent border border-slate-300 rounded-md px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-primary text-slate-700"
                    aria-label={t.language || "Select language"}
                  >
                    <option value="fr">FR</option>
                    <option value="ar">AR</option>
                    <option value="en">EN</option>
                  </select>
              </div>
              <Link to="/cart" className="relative text-slate-700 hover:text-primary transition-colors">
                <ShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-slate-700 hover:text-primary p-1"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-slate-200 shadow-lg"
            >
              <nav className="container-max py-3 flex flex-col space-y-2">
                {navLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={toggleMobileMenu}
                    className={({ isActive }) => 
                      `block px-3 py-2 rounded-md text-sm font-medium 
                       ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-100 hover:text-primary'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;