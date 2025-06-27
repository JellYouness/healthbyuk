import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/ProductCard';
import { ArrowRight, Award, ShieldCheck, Zap } from 'lucide-react';

const HomePage = ({ t, products, currentLang, buyNowHandler, addToCartHandler }) => {
  const featuredProducts = products.slice(0, 3); // Show first 3 products as featured
  const isRTL = currentLang === 'ar';

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      },
    }),
  };
  
  const features = [
    { icon: Award, title: t.qualityGuarantee, text: t.qualityGuaranteeDesc },
    { icon: ShieldCheck, title: t.securePayment, text: t.securePaymentDesc },
    { icon: Zap, title: t.fastDelivery, text: t.fastDeliveryDesc },
  ];

  return (
    <motion.div
      initial="page-enter"
      animate="page-enter-active"
      exit="page-exit"
      className="space-y-8 md:space-y-16 pb-8 md:pb-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background pt-8 pb-8 md:pt-16 md:pb-12">
        <div className="container-max grid md:grid-cols-2 items-center gap-6">
          <motion.div variants={heroVariants} initial="hidden" animate="visible" className={isRTL ? "md:order-2" : ""}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              {t.heroTitle || "Votre Santé, Notre Priorité."}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-6">
              {t.heroSubtitle || "Découvrez nos compléments alimentaires premium pour une vie saine et équilibrée."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/shop">
                <Button size="lg" className="btn-primary w-full sm:w-auto text-sm">
                  {t.shopNow} <ArrowRight size={16} className={isRTL ? "mr-2" : "ml-2"} />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto btn-outline text-sm">
                  {t.learnMore}
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            variants={heroVariants} 
            initial="hidden" 
            animate="visible" 
            className={`relative ${isRTL ? "md:order-1" : ""}`}
          >
            <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
              <img  
                alt={t.heroImageAlt || "Healthy lifestyle with supplements"} 
                className="w-full h-full object-cover"
               src="https://images.unsplash.com/photo-1701859077364-ac698f2c09d4" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-accent rounded-full opacity-50 hidden md:block"></div>
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary rounded-lg opacity-30 hidden md:block transform rotate-12"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container-max">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">{t.featuredProducts || "Nos Meilleurs Produits"}</h2>
          <Link to="/shop" className="text-primary hover:underline flex items-center text-sm">
            {t.viewAll} <ArrowRight size={16} className={isRTL ? "mr-1" : "ml-1"} />
          </Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              t={t} 
              currentLang={currentLang} 
              addToCartHandler={addToCartHandler}
              buyNowHandler={buyNowHandler}
              isRTL={isRTL}
              index={index}
            />
          ))}
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-slate-100 py-8 md:py-12">
        <div className="container-max">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8">{t.whyChooseUs || "Pourquoi Nous Choisir ?"}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  custom={index}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-card p-4 md:p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="inline-block p-3 bg-primary/10 rounded-full mb-3">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container-max text-center">
        <div className="bg-primary text-primary-foreground p-6 md:p-8 rounded-lg shadow-xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">{t.ctaTitle || "Prêt à Booster Votre Bien-être ?"}</h2>
          <p className="text-sm md:text-base mb-4 mx-auto max-w-2xl">{t.ctaSubtitle || "Parcourez notre catalogue complet et trouvez les compléments parfaits pour vous."}</p>
          <Link to="/shop">
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm">
              {t.exploreShop}
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;