import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus, ShoppingBag, ArrowRight, CreditCard } from 'lucide-react';

const CartPage = ({ t, cart, currentLang, removeFromCartHandler, updateCartQuantityHandler }) => {
  const isRTL = currentLang === 'ar';
  const navigate = useNavigate();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };
  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.4 };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };


  if (cart.length === 0) {
    return (
      <motion.div 
        initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
        className="container-max py-12 text-center"
      >
        <ShoppingBag size={64} className="mx-auto text-slate-400 mb-6" />
        <h1 className="text-3xl font-semibold text-foreground mb-4">{t.cartEmptyTitle || "Votre panier est vide"}</h1>
        <p className="text-slate-600 mb-8">{t.cartEmptySubtitle || "Parcourez nos produits et commencez vos achats !"}</p>
        <Link to="/shop">
          <Button size="lg" className="btn-primary">
            {t.goToShop || "Aller à la boutique"} <ArrowRight size={20} className={isRTL ? "mr-2" : "ml-2"} />
          </Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="container-max py-8 md:py-12"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">{t.cart || "Votre Panier"}</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <motion.div 
              key={item.id} 
              layout 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 20 }}
              className="bg-card p-4 rounded-lg shadow-md flex items-center space-x-4 rtl:space-x-reverse"
            >
              <Link to={`/product/${item.id}`} className="flex-shrink-0">
                <img  
                  alt={item.name[currentLang]} 
                  className="w-20 h-20 object-cover rounded-md"
                  src={item.image} />
              </Link>
              <div className="flex-grow">
                <Link to={`/product/${item.id}`} className="hover:text-primary">
                  <h2 className="text-lg font-semibold text-foreground">{item.name[currentLang]}</h2>
                </Link>
                <p className="text-sm text-slate-500">{item.price} DH</p>
              </div>
              <div className="flex items-center border border-slate-300 rounded-md">
                <Button variant="ghost" size="icon" onClick={() => updateCartQuantityHandler(item.id, item.quantity - 1)} className="h-8 w-8 text-slate-600 hover:text-primary">
                  <Minus size={14} />
                </Button>
                <span className="px-2 text-md font-medium">{item.quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => updateCartQuantityHandler(item.id, item.quantity + 1)} className="h-8 w-8 text-slate-600 hover:text-primary">
                  <Plus size={14} />
                </Button>
              </div>
              <p className="text-md font-semibold text-primary w-20 text-center">{item.price * item.quantity} DH</p>
              <Button variant="ghost" size="icon" onClick={() => removeFromCartHandler(item.id)} className="text-red-500 hover:text-red-700">
                <X size={18} />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1 bg-card p-6 rounded-lg shadow-xl h-fit sticky top-24">
          <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-3">{t.orderSummary || "Résumé de la commande"}</h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-slate-600">
              <span>{t.subtotal || "Sous-total"} ({cart.reduce((sum, item) => sum + item.quantity, 0)} {t.items || "articles"})</span>
              <span>{totalAmount.toFixed(2)} DH</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>{t.shipping || "Livraison"}</span>
              <span>{t.shippingCostInfo || "Calculée à la prochaine étape"}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-foreground pt-3 border-t mt-3">
              <span>{t.total || "Total (approximatif)"}</span>
              <span>{totalAmount.toFixed(2)} DH</span>
            </div>
          </div>
          <Button size="lg" className="w-full btn-primary" onClick={handleProceedToCheckout}>
            <CreditCard size={20} className={isRTL ? "ml-2" : "mr-2"} /> {t.proceedToCheckout || "Commander"}
          </Button>
          <p className="text-xs text-slate-500 mt-3 text-center">{t.paymentMethod}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;