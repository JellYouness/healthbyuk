import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header.jsx';
import Footer from '@/components/layout/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ShopPage from '@/pages/ShopPage.jsx';
import ProductDetailPage from '@/pages/ProductDetailPage.jsx'; 
import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import CartPage from '@/pages/CartPage.jsx';
import CheckoutPage from '@/pages/CheckoutPage.jsx';
import WhatsAppFloat from '@/components/common/WhatsAppFloat.jsx';
import { products as initialProductsData, categories as initialCategoriesData } from '@/data/products.js';
import { translations } from '@/data/translations.js';

const AppContent = () => {
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState('fr');
  const [cart, setCart] = useState([]);
  const [products, setProductsData] = useState([]);
  const [categories, setCategoriesData] = useState([]);

  useEffect(() => {
    const savedLang = localStorage.getItem('healthBeautyStoreLang');
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang);
    }
    const savedCart = localStorage.getItem('healthBeautyStoreCart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          setCart([]);
        }
      } catch (error) {
        console.error("Erreur lors de l'analyse du panier depuis localStorage:", error);
        setCart([]);
      }
    }
    
    setProductsData(initialProductsData);
    setCategoriesData(initialCategoriesData);

  }, []);

  useEffect(() => {
    localStorage.setItem('healthBeautyStoreCart', JSON.stringify(cart));
  }, [cart]);
  
  useEffect(() => {
    console.log("Produits chargés dans App.jsx:", initialProductsData.length);
    setProductsData(initialProductsData);
    setCategoriesData(initialCategoriesData);
  }, [initialProductsData, initialCategoriesData]);


  const t = translations[currentLang];
  const isRTL = currentLang === 'ar';

  const siteTranslations = {
    ...t,
    siteTitle: "Health Beauty Store By Uk",
    deliveryCasablanca: "Livraison Casablanca : 19 MAD (24h)",
    deliveryOtherCities: "Autres villes : 35-45 MAD (24h-96h)",
    paymentMethod: "Paiement à la livraison uniquement (Cash à la livraison)",
    whatsappNumber: "+212676905470",
    emailAddress: "healthbeautybyuk@gmail.com",
    instagramUrl: "https://www.instagram.com/health_beauty_store_by_uk?igsh=Y2syZmRoYWJmbDI=",
    instagramHandle: "@health_beauty_store_by_uk",
    callUs: "Appelez-nous",
    navHome: t.navHome || "Accueil",
    navShop: t.navShop || "Boutique",
    navAbout: t.navAbout || "À Propos",
    navContact: t.navContact || "Contact",
    navCheckout: t.navCheckout || "Commander",
  };

  if (currentLang === 'ar') {
    siteTranslations.siteTitle = "هيلث بيوتي ستور باي يوكي";
    siteTranslations.copyright = `© ${new Date().getFullYear()} هيلث بيوتي ستور باي يوكي. كل الحقوق محفوظة.`;
    siteTranslations.paymentMethod = "الدفع عند الاستلام فقط (نقداً عند الاستلام)";
  } else if (currentLang === 'en') {
    siteTranslations.siteTitle = "Health Beauty Store By Uk";
    siteTranslations.copyright = `© ${new Date().getFullYear()} Health Beauty Store By Uk. All rights reserved.`;
    siteTranslations.paymentMethod = "Cash on delivery only";
  } else {
    siteTranslations.copyright = `© ${new Date().getFullYear()} Health Beauty Store By Uk. Tous droits réservés.`;
  }

  const addToCartHandler = (product, quantity = 1) => {
    if (!product || !product.id || !product.name || !product.name[currentLang]) {
      toast({
        title: `❌ ${siteTranslations.errorOccurred || 'Une erreur est survenue'}`,
        description: siteTranslations.productInvalid || 'Informations produit invalides.',
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      let newCart;
      if (existingProductIndex > -1) {
        newCart = [...prevCart];
        newCart[existingProductIndex].quantity += quantity;
      } else {
        newCart = [...prevCart, { ...product, quantity }];
      }
      return newCart;
    });
    toast({
      title: `✅ ${siteTranslations.productAdded || 'Produit ajouté !'}`,
      description: `${product.name[currentLang]} ${siteTranslations.addedToCartMsg || 'a été ajouté à votre panier.'}`,
      duration: 3000,
    });
  };
  
  const removeFromCartHandler = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
     toast({
      title: `🗑️ ${siteTranslations.productRemoved || 'Produit retiré !'}`,
      description: `${siteTranslations.productRemovedMsg || 'Le produit a été retiré de votre panier.'}`,
      duration: 3000,
    });
  };

  const updateCartQuantityHandler = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCartHandler(productId);
    } else {
      setCart(prevCart => 
        prevCart.map(item => 
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const buyNowHandler = (product) => {
    if (!product || !product.name || !product.name[currentLang]) {
       toast({
        title: `❌ ${siteTranslations.errorOccurred || 'Une erreur est survenue'}`,
        description: siteTranslations.productInvalid || 'Informations produit invalides pour l\'achat.',
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    const productName = product.name[currentLang];
    const message = encodeURIComponent(
      `${siteTranslations.buyNowMessage || 'Bonjour, je suis intéressé(e) par le produit:'} ${productName}. ${siteTranslations.buyNowPrice || 'Prix:'} ${product.price} DH`
    );
    const whatsappUrl = `https://wa.me/${siteTranslations.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('healthBeautyStoreLang', lang);
  };

  const clearCart = () => {
    setCart([]);
  }

  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/5dc2485443c85c362e2dc261cd4ac2f4.jpg";

  if (products.length === 0) {
     return (
      <div className="flex items-center justify-center h-screen bg-slate-50 text-slate-800">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-lg font-medium">{t.loadingProducts || "Chargement des produits..."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-800 ${isRTL ? 'rtl arabic-font' : 'ltr'}`}>
      <Toaster />
      <Header
        currentLang={currentLang}
        t={siteTranslations}
        handleLanguageChange={handleLanguageChange}
        cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        logoUrl={logoUrl}
        isRTL={isRTL}
      />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage t={siteTranslations} products={products} currentLang={currentLang} buyNowHandler={buyNowHandler} addToCartHandler={addToCartHandler} />} />
            <Route path="/shop" element={<ShopPage t={siteTranslations} products={products} categories={categories} currentLang={currentLang} buyNowHandler={buyNowHandler} addToCartHandler={addToCartHandler} />} />
            <Route path="/product/:productId" element={<ProductDetailPage t={siteTranslations} products={products} currentLang={currentLang} buyNowHandler={buyNowHandler} addToCartHandler={addToCartHandler} />} />
            <Route path="/about" element={<AboutPage t={siteTranslations} />} />
            <Route path="/contact" element={<ContactPage t={siteTranslations} />} />
            <Route path="/cart" element={<CartPage t={siteTranslations} cart={cart} currentLang={currentLang} removeFromCartHandler={removeFromCartHandler} updateCartQuantityHandler={updateCartQuantityHandler} />} />
            <Route path="/checkout" element={<CheckoutPage t={siteTranslations} cart={cart} currentLang={currentLang} clearCart={clearCart} />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer t={siteTranslations} logoUrl={logoUrl} />
      <WhatsAppFloat phoneNumber={siteTranslations.whatsappNumber} t={siteTranslations} isRTL={isRTL} />
    </div>
  );
}

const App = () => (
  <Router>
    <AppContent />
  </Router>
);


export default App;