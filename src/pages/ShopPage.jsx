import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/products/ProductCard';
import { Filter, Search, X as XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ShopPage = ({ t, products, categories: allCategories, currentLang, buyNowHandler, addToCartHandler }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('nameAsc');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const isRTL = currentLang === 'ar';

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };
  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.4 };

  const categoriesForFilter = [{ id: 'all', name: {fr: "Toutes", en: "All", ar: "الكل"} }, ...allCategories.filter(cat => cat.id !== 'all')];

  const filteredAndSortedProducts = products
    .filter(product => {
      const name = product.name[currentLang] || product.name['fr'];
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const searchMatch = name.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      const nameA = a.name[currentLang] || a.name['fr'];
      const nameB = b.name[currentLang] || b.name['fr'];
      switch (sortBy) {
        case 'priceAsc': return a.price - b.price;
        case 'priceDesc': return b.price - a.price;
        case 'nameDesc': return nameB.localeCompare(nameA);
        default: return nameA.localeCompare(nameB);
      }
    });

  const FiltersSidebar = () => (
    <aside className={`w-full md:w-64 ${isRTL ? 'md:ml-6' : 'md:mr-6'} space-y-4 mb-6 md:mb-0`}>
      <div>
        <h3 className="text-base font-semibold mb-3">{t.categories}</h3>
        <div className="space-y-1">
          {categoriesForFilter.map(cat => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'ghost'}
              className={`w-full justify-start text-sm ${selectedCategory === cat.id ? 'btn-primary' : 'text-slate-700 hover:bg-slate-100'}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name[currentLang]}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-3">{t.sortBy}</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary text-sm"
        >
          <option value="nameAsc">{t.nameAsc}</option>
          <option value="nameDesc">{t.nameDesc}</option>
          <option value="priceAsc">{t.priceAsc}</option>
          <option value="priceDesc">{t.priceDesc}</option>
        </select>
      </div>
    </aside>
  );

  return (
    <motion.div 
      initial="page-enter"
      animate="page-enter-active"
      exit="page-exit"
      className="container-max py-6 md:py-8"
    >
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t.navShop}</h1>
        <p className="text-slate-600 text-sm">{t.shopSubtitle || "Découvrez notre gamme complète de produits"}</p>
      </div>

      <div className="relative mb-6">
        <Search size={18} className={`absolute top-1/2 transform -translate-y-1/2 text-slate-400 ${isRTL ? 'right-3' : 'left-3'}`} />
        <input
          type="text"
          placeholder={t.searchProducts || "Rechercher des produits..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary text-sm ${isRTL ? 'pr-10' : 'pl-10'}`}
        />
      </div>
      
      <div className="md:hidden mb-4 flex justify-end">
        <Button variant="outline" onClick={() => setIsFiltersOpen(!isFiltersOpen)} className="flex items-center text-sm">
          <Filter size={16} className={isRTL ? "ml-2" : "mr-2"} /> {t.filters || "Filtres"}
        </Button>
      </div>

      {isFiltersOpen && (
        <div className="md:hidden mb-6 p-4 bg-slate-50 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{t.filters || "Filtres"}</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsFiltersOpen(false)}><XIcon size={18}/></Button>
          </div>
          <FiltersSidebar />
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block">
          <FiltersSidebar />
        </div>
        
        <main className="flex-1">
          {filteredAndSortedProducts.length > 0 ? (
            <div className="product-grid">
              {filteredAndSortedProducts.map((product, index) => (
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
          ) : (
            <div className="text-center py-8">
              <h2 className="text-xl font-semibold mb-3">{t.noProductsFound || "Aucun produit trouvé"}</h2>
              <p className="text-slate-600 text-sm">{t.tryAdjustingFilters || "Essayez d'ajuster vos filtres ou votre recherche."}</p>
            </div>
          )}
        </main>
      </div>
    </motion.div>
  );
};

export default ShopPage;