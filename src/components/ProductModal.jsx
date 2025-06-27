import React from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductModal = ({ product, onClose, t, currentLang, addToCart, buyNow }) => {
  if (!product) return null;
  const isRTL = currentLang === 'ar';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`modal-content relative ${isRTL ? 'rtl arabic-font' : 'ltr'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} text-gray-500 hover:text-gray-800`}
          onClick={onClose}
        >
          <X size={24} />
        </Button>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="w-full h-80 md:h-auto">
            <img 
              src={product.image} 
              alt={product.name[currentLang]} 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-800">{product.name[currentLang]}</h2>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-md text-gray-600">
                {product.rating} ({product.reviews} {t.reviews})
              </span>
            </div>

            <p className="text-lg text-gray-700">{product.description[currentLang]}</p>
            
            {product.fullDescription && product.fullDescription[currentLang] && (
                 <p className="text-md text-gray-600">{product.fullDescription[currentLang]}</p>
            )}

            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-bold text-green-800">{product.price} DH</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-gray-500 line-through">{product.originalPrice} DH</span>
              )}
            </div>

            <div className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? t.inStock : t.outOfStock}
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
              <Button
                variant="outline"
                size="lg"
                className="flex-1 border-green-500 text-green-700 hover:bg-green-50 hover:text-green-800"
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
              >
                <ShoppingCart className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t.addToCart}
              </Button>
              <Button
                size="lg"
                className="flex-1 gradient-bg text-white hover:opacity-90"
                onClick={() => buyNow(product)}
                disabled={!product.inStock}
              >
                {t.buyNow}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;