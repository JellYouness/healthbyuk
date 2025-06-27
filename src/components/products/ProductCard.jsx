import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product, t, currentLang, addToCartHandler, buyNowHandler, isRTL, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.05 } },
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="card-base card-hover flex flex-col group product-card"
    >
      <Link to={`/product/${product.id}`} className="block relative bg-slate-50">
        <div className="aspect-square w-full overflow-hidden rounded-t-lg">
          <img  
            alt={product.name[currentLang]} 
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            src={product.image} />
        </div>
        {product.originalPrice > product.price && (
          <div className={`absolute top-2 ${isRTL ? 'right-2' : 'left-2'} bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full text-xs font-semibold shadow-md`}>
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
         <div className={`absolute top-2 ${isRTL ? 'left-2' : 'right-2'} ${product.inStock ? 'bg-green-600' : 'bg-red-600'} text-white px-1.5 py-0.5 rounded-full text-xs font-semibold shadow-md`}>
          {product.inStock ? t.inStock : t.outOfStock}
        </div>
      </Link>

      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-semibold mb-1 h-10 sm:h-12 line-clamp-2">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
            {product.name[currentLang]}
          </Link>
        </h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={` ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
            />
          ))}
          <span className="text-xs text-slate-500 ml-1">({product.reviews})</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mb-3 h-8 sm:h-10 line-clamp-2">{product.description[currentLang]}</p>
        
        <div className="mt-auto">
          <div className="flex items-baseline mb-2">
            <span className="text-lg sm:text-xl font-bold text-primary">{product.price} DH</span>
            {product.originalPrice > product.price && (
              <span className={`text-xs sm:text-sm text-slate-500 line-through ${isRTL ? 'mr-1.5' : 'ml-1.5'}`}>
                {product.originalPrice} DH
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-1.5 mb-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full btn-outline text-xs px-2 py-1.5"
              onClick={() => addToCartHandler(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart size={14} className={isRTL ? "ml-1" : "mr-1"} />
              {t.addToCart}
            </Button>
            <Link to={`/product/${product.id}`} className="w-full">
              <Button variant="outline" size="sm" className="w-full border-slate-400 text-slate-700 hover:bg-slate-100 text-xs px-2 py-1.5">
                <Eye size={14} className={isRTL ? "ml-1" : "mr-1"} />
                {t.viewDetails}
              </Button>
            </Link>
          </div>
           <Button 
            size="sm" 
            className="w-full btn-primary text-xs px-2 py-1.5"
            onClick={() => buyNowHandler(product)}
            disabled={!product.inStock}
          >
            {t.buyNow}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;