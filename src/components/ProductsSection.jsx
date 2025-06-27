import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product, t, currentLang, addToCart, buyNow, openProductModal, index, isRTL }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="product-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 hover:border-green-400"
      onClick={() => openProductModal(product)}
    >
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name[currentLang]}
          className="w-full h-64 object-contain rounded-xl"
        />
        {product.originalPrice > product.price && (
          <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold`}>
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
        <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} ${product.inStock ? 'bg-green-500' : 'bg-red-500'} text-white px-2 py-1 rounded-full text-xs`}>
          {product.inStock ? t.inStock : t.outOfStock}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-green-800 line-clamp-2 h-14">
          {product.name[currentLang]}
        </h3>
        
        <p className="text-sm text-green-600 line-clamp-2 h-10">
          {product.description[currentLang]}
        </p>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews} {t.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-800">
                {product.price} DH
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-500 line-through">
                  {product.originalPrice} DH
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex space-x-2 pt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
            disabled={!product.inStock}
          >
            <ShoppingCart className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t.addToCart}
          </Button>
          <Button
            size="sm"
            className="flex-1 gradient-bg text-white hover:scale-105 transition-transform"
            onClick={(e) => { e.stopPropagation(); buyNow(product); }}
            disabled={!product.inStock}
          >
            {t.buyNow}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};


const ProductsSection = ({ products, categories, currentLang, t, addToCart, buyNow, openProductModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('nameAsc');
  const isRTL = currentLang === 'ar';

  const filteredProducts = products.filter(product => {
    const name = product.name[currentLang] || product.name['fr']; // Fallback to French if current lang name is missing
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const nameA = a.name[currentLang] || a.name['fr'];
    const nameB = b.name[currentLang] || b.name['fr'];
    switch (sortBy) {
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      case 'nameDesc':
        return nameB.localeCompare(nameA);
      default: // nameAsc
        return nameA.localeCompare(nameB);
    }
  });

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{t.allProducts}</h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            {t.discoverPremiumSupplements || 'Découvrez notre sélection de compléments alimentaires de qualité premium'}
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500`} />
            <input
              type="text"
              placeholder={t.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 backdrop-blur-sm`}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`category-filter px-4 py-2 rounded-full border transition-all ${
                    selectedCategory === category.id
                      ? 'active'
                      : 'border-green-300 text-green-700 hover:bg-green-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 inline ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {category.name[currentLang]}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white/80 backdrop-blur-sm"
            >
              <option value="nameAsc">{t.nameAsc}</option>
              <option value="nameDesc">{t.nameDesc}</option>
              <option value="priceAsc">{t.priceAsc}</option>
              <option value="priceDesc">{t.priceDesc}</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          <AnimatePresence>
            {sortedProducts.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                t={t}
                currentLang={currentLang}
                addToCart={addToCart}
                buyNow={buyNow}
                openProductModal={openProductModal}
                index={index}
                isRTL={isRTL}
              />
            ))}
          </AnimatePresence>
        </div>

        {sortedProducts.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Package className="h-16 w-16 text-green-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">{t.noResults}</h3>
            <p className="text-green-600">{t.tryDifferentFilters || 'Essayez de modifier vos filtres ou votre recherche'}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;