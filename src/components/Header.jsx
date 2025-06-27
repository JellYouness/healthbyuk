import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Globe, Menu, X, Mail, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = ({ currentLang, t, isMenuOpen, setIsMenuOpen, handleLanguageChange, cart, logoUrl }) => {
  const isRTL = currentLang === 'ar';
  return (
    <>
      <div className="bg-green-700 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-4">
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <a href={`mailto:${t.emailAddress}`} className="hover:underline">{t.emailAddress}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <a href={`tel:${t.whatsappNumber}`} className="hover:underline">{t.whatsappNumber} ({t.callUs})</a>
          </div>
          <div className="flex items-center space-x-2">
            <Instagram size={16} />
            <a href={t.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{t.instagramHandle}</a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 glass-effect border-b border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={logoUrl} 
                alt="Health Beauty Store By Uk Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-green-800">{t.title}</h1>
                <p className="text-sm text-green-600 hidden md:block">{t.subtitle}</p>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-green-600" />
                  <select 
                    value={currentLang} 
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-transparent border border-green-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="fr">Français</option>
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <Button 
                  variant="outline" 
                  className="relative border-green-300 text-green-700 hover:bg-green-50"
                  onClick={() => toast({ title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine invite ! 🚀" })}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className={`ml-2 ${isRTL ? 'mr-2 ml-0' : ''}`}>{t.cart}</span>
                  {cart.length > 0 && (
                    <span className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`}>
                      {cart.length}
                    </span>
                  )}
                </Button>
              </div>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-green-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-green-200 bg-white/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-700">{t.language || 'Langue'}</span>
                  <select 
                    value={currentLang} 
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-transparent border border-green-300 rounded-md px-2 py-1 text-sm"
                  >
                    <option value="fr">Français</option>
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-green-300 text-green-700"
                  onClick={() => {
                    toast({ title: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine invite ! 🚀" });
                    setIsMenuOpen(false);
                  }}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {t.cart} ({cart.length})
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;