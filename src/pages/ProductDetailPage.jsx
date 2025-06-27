import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, CheckCircle, Star, Minus, Plus, X } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';

const ProductDetailPage = ({ t, products, currentLang, buyNowHandler, addToCartHandler }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id.toString() === productId);
  const [quantity, setQuantity] = useState(1);
  const isRTL = currentLang === 'ar';

  if (!product) {
    return (
      <div className="container-max py-8 text-center">
        <h1 className="text-xl font-semibold">{t.productNotFound || "Produit non trouvé"}</h1>
        <Link to="/shop" className="text-primary hover:underline mt-4 inline-block">{t.backToShop || "Retour à la boutique"}</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleAddToCart = () => {
    addToCartHandler(product, quantity);
  };
  
  const handleBuyNow = () => {
     buyNowHandler({...product, quantity});
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.3 }}
      className="container-max py-6 md:py-8"
    >
      <Button variant="ghost" onClick={() => navigate(-1)} className={`mb-4 text-slate-600 hover:text-primary text-sm ${isRTL ? 'float-right' : 'float-left'}`}>
        <ArrowLeft size={18} className={isRTL ? "ml-2" : "mr-2"} /> {t.back || "Retour"}
      </Button>
      <div className="clear-both grid md:grid-cols-2 gap-6 lg:gap-8 items-start pt-2">
        <motion.div 
          variants={contentVariants}
          className="aspect-square bg-slate-50 rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
        >
          <img
            alt={product.name[currentLang]} 
            className="w-full max-w-md h-full object-contain transition-transform duration-500 ease-in-out hover:scale-105"
            src={product.image} 
          />
        </motion.div>

        <motion.div 
          variants={contentVariants}
          className="space-y-4"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{product.name[currentLang]}</h1>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={` ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
              ))}
            </div>
            <span className="text-slate-600 text-sm">({product.reviews} {t.reviews})</span>
          </div>

          <div className="flex items-baseline space-x-3 rtl:space-x-reverse">
            <span className="text-2xl md:text-3xl font-bold text-primary">{product.price} DH</span>
            {product.originalPrice > product.price && (
              <span className="text-lg md:text-xl text-slate-500 line-through">{product.originalPrice} DH</span>
            )}
          </div>

          <div className={`flex items-center space-x-2 rtl:space-x-reverse ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? <CheckCircle size={18} /> : <X size={18} />}
            <span className="text-sm">{product.inStock ? t.inStock : t.outOfStock}</span>
          </div>
          
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <h4 className="font-semibold text-slate-800 text-base">{t.description || "Description"}</h4>
            <p className="whitespace-pre-line text-sm">{product.fullDescription?.[currentLang] || product.description[currentLang]}</p>
          </div>

          <div className="flex items-center space-x-3 rtl:space-x-reverse pt-2">
            <span className="font-medium text-sm">{t.quantity || "Quantité"}:</span>
            <div className="flex items-center border border-slate-300 rounded-md">
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="h-8 w-8 rounded-r-none" aria-label={t.decreaseQuantity || "Diminuer la quantité"}>
                <Minus size={14} />
              </Button>
              <span className="px-3 text-base font-medium tabular-nums">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="h-8 w-8 rounded-l-none" aria-label={t.increaseQuantity || "Augmenter la quantité"}>
                <Plus size={14} />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <Button 
              size="lg" 
              className="flex-1 btn-outline text-sm"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart size={18} className={isRTL ? "ml-2" : "mr-2"} /> {t.addToCart}
            </Button>
            <Button 
              size="lg" 
              className="flex-1 btn-primary text-sm"
              onClick={handleBuyNow}
              disabled={!product.inStock}
            >
              {t.buyNow}
            </Button>
          </div>

          <div className="pt-3 border-t border-slate-200">
             <p className="text-sm text-slate-600"><span className="font-semibold">{t.category || "Catégorie"}:</span> {product.category && t[product.category] ? t[product.category] : product.category}</p>
          </div>
        </motion.div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">{t.relatedProducts || "Produits Similaires"}</h2>
          <div className="product-grid">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard 
                key={relatedProduct.id} 
                product={relatedProduct} 
                t={t} 
                currentLang={currentLang} 
                addToCartHandler={addToCartHandler} 
                buyNowHandler={buyNowHandler}
                isRTL={isRTL}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProductDetailPage;