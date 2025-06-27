import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ t }) => {
  return (
    <section className="relative py-20 hero-pattern overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-green-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="delivery-badge">
              <Truck className="h-5 w-5" />
              <span>{t.deliveryCasablanca}</span>
            </div>
            <div className="delivery-badge">
              <Truck className="h-5 w-5" />
              <span>{t.deliveryOtherCities}</span>
            </div>
            <div className="delivery-badge">
              <Package className="h-5 w-5" />
              <span>{t.paymentInfo}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="gradient-bg text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              {t.shopNow}
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-20 left-10 animate-float opacity-50">
        <div className="w-20 h-20 bg-green-200 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-50" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-emerald-200 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;