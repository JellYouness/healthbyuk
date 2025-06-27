import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';
import { ShoppingBag, Package, Send } from 'lucide-react';

const moroccanCities = [
  "Agadir", "Al Hoceima", "Asilah", "Azemmour", "Azrou", "Beni Mellal", "Ben Slimane", "Berkane", 
  "Berrechid", "Boujdour", "Boulemane", "Casablanca", "Chefchaouen", "Dakhla", "El Jadida", 
  "El Kelaa des Sraghna", "Errachidia", "Essaouira", "Fès", "Figuig", "Fnideq", "Fquih Ben Salah", 
  "Guelmim", "Guercif", "Ifrane", "Imintanoute", "Inezgane", "Jerada", "Kasba Tadla", "Kénitra", 
  "Khemisset", "Khenifra", "Khouribga", "Ksar El Kebir", "Laâyoune", "Larache", "Marrakech", 
  "Meknès", "Midelt", "Mohammedia", "Nador", "Ouarzazate", "Ouazzane", "Oujda", "Rabat", 
  "Safi", "Salé", "Sefrou", "Settat", "Sidi Bennour", "Sidi Ifni", "Sidi Kacem", "Sidi Slimane", 
  "Skhirat", "Souk El Arbaa", "Tanger", "Tan-Tan", "Taounate", "Taourirt", "Tarfaya", "Taroudant", 
  "Taza", "Témara", "Tétouan", "Tiflet", "Tinghir", "Tiznit", "Youssoufia", "Zagora"
];


const CheckoutPage = ({ t, cart, currentLang, clearCart }) => {
  const navigate = useNavigate();
  const isRTL = currentLang === 'ar';
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

  useEffect(() => {
    if (cart.length === 0 && !sessionStorage.getItem('checkout_reloaded_once')) {
      sessionStorage.setItem('checkout_reloaded_once', 'true');
      navigate('/cart');
      toast({
        title: t.cartEmptyTitle || "Panier vide",
        description: t.checkoutCartEmptyMsg || "Votre panier est vide. Veuillez ajouter des produits avant de commander.",
        variant: "destructive",
        duration: 4000,
      });
    } else if (cart.length === 0 && sessionStorage.getItem('checkout_reloaded_once')) {
      setShowEmptyCartMessage(true);
    } else {
      setShowEmptyCartMessage(false);
    }
    
    return () => {
      sessionStorage.removeItem('checkout_reloaded_once');
    };
  }, [cart, navigate, t]);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };
  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: null}));
    }
  };

  const handleCityChange = (value) => {
    setFormData(prev => ({ ...prev, city: value }));
     if (errors.city) {
      setErrors(prev => ({...prev, city: null}));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = t.errorRequired || "Ce champ est requis.";
    if (!formData.lastName.trim()) newErrors.lastName = t.errorRequired || "Ce champ est requis.";
    if (!formData.email.trim()) {
      newErrors.email = t.errorRequired || "Ce champ est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.errorInvalidEmail || "Adresse e-mail invalide.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t.errorRequired || "Ce champ est requis.";
    } else if (!/^(0|\+212)[5-7]\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
       newErrors.phone = t.errorInvalidPhone || "Numéro de téléphone marocain invalide (ex: 0612345678 ou +212612345678).";
    }
    if (!formData.city) newErrors.city = t.errorRequired || "Ce champ est requis.";
    if (!formData.address.trim()) newErrors.address = t.errorRequired || "Ce champ est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCost = formData.city === "Casablanca" ? 19 : (formData.city ? "35-45" : 0);
  
  let finalTotalString;
  if (formData.city === "Casablanca") {
    finalTotalString = `${(totalAmount + 19).toFixed(2)} DH`;
  } else if (formData.city) {
    finalTotalString = `${(totalAmount + 35).toFixed(2)} DH - ${(totalAmount + 45).toFixed(2)} DH`;
  } else {
    finalTotalString = `${totalAmount.toFixed(2)} DH`;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      toast({
        title: t.errorFormValidation || "Erreur de validation",
        description: t.errorFillAllFields || "Veuillez corriger les erreurs dans le formulaire.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    const orderDate = new Date().toLocaleString(currentLang === 'ar' ? 'ar-MA' : 'fr-FR', { dateStyle: 'full', timeStyle: 'short' });
    const subject = `${t.newOrderSubject || "Nouvelle Commande"} - ${formData.lastName} ${formData.firstName}`;
    let emailBody = `
${t.newOrderNotification || "Vous avez reçu une nouvelle commande :"}

${t.formFirstName || "Prénom"}: ${formData.firstName}
${t.formLastName || "Nom"}: ${formData.lastName}
${t.formEmail || "Email"}: ${formData.email}
${t.formPhone || "Téléphone"}: ${formData.phone}
${t.formCity || "Ville"}: ${formData.city}
${t.formAddress || "Adresse"}: ${formData.address}
${t.formNotes || "Remarques"}: ${formData.notes || (t.noNotes || "Aucune")}

${t.orderedProducts || "Produits Commandés"}:
${cart.map(item => `- ${item.name[currentLang]} x ${item.quantity} (${(item.price * item.quantity).toFixed(2)} DH)`).join('\n')}

${t.subtotal || "Sous-total"}: ${totalAmount.toFixed(2)} DH
${t.shipping || "Livraison (" + formData.city + ")"}: ${typeof deliveryCost === 'number' ? deliveryCost.toFixed(2) : deliveryCost} DH
${t.totalAmount || "Montant Total Estimé"}: ${finalTotalString}

${t.orderDate || "Date de la commande"}: ${orderDate}
${t.paymentMethodLabel || "Mode de paiement"}: ${t.paymentMethod}
    `;

    const mailtoLink = `mailto:${t.emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    try {
      window.location.href = mailtoLink;
      toast({
        title: t.orderPlacedTitle || "Commande en cours de préparation !",
        description: t.orderPlacedMsgEmail || "Votre commande va être envoyée par email. Veuillez vérifier votre client de messagerie.",
        duration: 5000,
      });
      clearCart();
      setTimeout(() => {
        navigate('/');
        setIsSubmitting(false);
      }, 500); 
    } catch (error) {
       toast({
        title: t.errorEmailClient || "Erreur Client Messagerie",
        description: t.errorEmailClientMsg || "Impossible d'ouvrir le client de messagerie. Veuillez copier les détails et les envoyer manuellement.",
        variant: "destructive",
        duration: 7000,
      });
      console.error("Failed to open mailto link:", error);
      
      const fallbackDetails = `${subject}\n\n${emailBody}`;
      const orderDetailsArea = document.createElement('textarea');
      orderDetailsArea.value = fallbackDetails;
      document.body.appendChild(orderDetailsArea);
      orderDetailsArea.select();
      try {
        document.execCommand('copy');
         toast({
            title: t.orderDetailsCopied || "Détails copiés",
            description: t.orderDetailsCopiedMsg || "Les détails de la commande ont été copiés dans votre presse-papiers. Veuillez les coller dans un e-mail et les envoyer à " + t.emailAddress,
            duration: 10000
        });
      } catch (copyError) {
        console.error("Failed to copy order details:", copyError);
        toast({
            title: t.errorCopyDetails || "Erreur de copie",
            description: t.errorCopyDetailsMsg || "Impossible de copier les détails de la commande. Veuillez les copier manuellement.",
            variant: "destructive",
            duration: 10000
        });
      }
      document.body.removeChild(orderDetailsArea);
      setIsSubmitting(false);
    }
  };
  
  if (showEmptyCartMessage) {
     return (
        <motion.div 
            initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
            className="container-max py-12 text-center"
        >
            <ShoppingBag size={64} className="mx-auto text-slate-400 mb-6" />
            <h1 className="text-3xl font-semibold text-foreground mb-4">{t.cartEmptyTitle || "Votre panier est vide"}</h1>
            <p className="text-slate-600 mb-8">{t.checkoutCartEmptyMsg || "Votre panier est vide. Veuillez ajouter des produits avant de commander."}</p>
            <Button onClick={() => navigate('/shop')} size="lg" className="btn-primary">
                {t.goToShop || "Aller à la boutique"}
            </Button>
        </motion.div>
    );
  }


  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="container-max py-8 md:py-12"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">{t.navCheckout || "Valider la Commande"}</h1>
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-card p-6 md:p-8 rounded-xl shadow-xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className={`mb-1 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.formFirstName || "Prénom"}</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder={t.formFirstNamePlaceholder || "Votre prénom"} className={errors.firstName ? "border-red-500" : ""}/>
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName" className={`mb-1 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.formLastName || "Nom"}</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder={t.formLastNamePlaceholder || "Votre nom"} className={errors.lastName ? "border-red-500" : ""} />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="email" className={`mb-1 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.formEmail || "Adresse e-mail"}</Label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={t.formEmailPlaceholder || "exemple@domaine.com"} className={errors.email ? "border-red-500" : ""} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone" className={`mb-1 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.formPhone || "Numéro de téléphone"}</Label>
            <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={t.formPhonePlaceholder || "06 XX XX XX XX"} className={errors.phone ? "border-red-500" : ""} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          
          <div>
            <Label htmlFor="city" className={`mb-1 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.formCity || "Ville"}</Label>
            <Select name="city" onValueChange={handleCityChange} value={formData.city}>
              <SelectTrigger className={`w-full ${errors.city ? "border-red-500" : ""}`}>
                <SelectValue placeholder={t.formCityPlaceholder || "Sélectionnez votre ville"} />
              </SelectTrigger>
              <SelectContent>
                {moroccanCities.sort((a,b) => a.localeCompare(b)).map(city => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          <div>
            <Label htmlFor="address" className={`mb-1 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.formAddress || "Adresse complète"}</Label>
            <Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder={t.formAddressPlaceholder || "Votre adresse complète (rue, numéro, appartement, etc.)"} className={errors.address ? "border-red-500" : ""} />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div>
            <Label htmlFor="notes" className={`mb-1 block ${isRTL ? 'text-right' : 'text-left'}`}>{t.formNotes || "Remarque (optionnel)"}</Label>
            <Textarea id="notes" name="notes" value={formData.notes} onChange={handleInputChange} placeholder={t.formNotesPlaceholder || "Instructions spéciales pour la livraison, etc."} />
          </div>
          
          <Button type="submit" size="lg" className="w-full btn-primary" disabled={isSubmitting}>
            <Send size={20} className={isRTL ? "ml-2" : "mr-2"} /> 
            {isSubmitting ? (t.submittingOrder || "Envoi en cours...") : (t.submitOrder || "Envoyer la Commande")}
          </Button>
        </form>

        <div className="lg:col-span-1 bg-card p-6 rounded-xl shadow-xl h-fit sticky top-24">
          <h2 className="text-2xl font-semibold text-foreground mb-6 border-b pb-4 flex items-center">
            <ShoppingBag size={28} className={`${isRTL ? 'ml-3' : 'mr-3'} text-primary`} />
            {t.yourOrder || "Votre Commande"}
          </h2>
          <div className="space-y-3 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name[currentLang]} className="w-12 h-12 object-cover rounded-md mr-3 rtl:mr-0 rtl:ml-3" />
                  <div>
                    <span className="font-medium text-foreground">{item.name[currentLang]}</span>
                    <p className="text-xs text-slate-500">x {item.quantity}</p>
                  </div>
                </div>
                <span className="font-medium text-slate-600">{(item.price * item.quantity).toFixed(2)} DH</span>
              </div>
            ))}
          </div>
          <div className="space-y-2 pt-4 border-t">
            <div className="flex justify-between text-md text-slate-600">
              <span>{t.subtotal || "Sous-total"}</span>
              <span>{totalAmount.toFixed(2)} DH</span>
            </div>
            <div className="flex justify-between text-md text-slate-600">
              <span>{t.shipping || "Livraison"} {formData.city && `(${formData.city})`}</span>
              <span>{typeof deliveryCost === 'number' && deliveryCost > 0 ? `${deliveryCost.toFixed(2)} DH` : (typeof deliveryCost === 'string' ? `${deliveryCost} DH` : (t.selectCityForShipping || "Sélectionnez une ville"))}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-primary pt-2 border-t mt-2">
              <span>{t.totalAmount || "Montant Total"}</span>
              <span>{finalTotalString}</span>
            </div>
          </div>
          <div className="mt-8 bg-slate-100 p-4 rounded-lg text-sm text-slate-700 space-y-2">
            <p className="font-semibold text-foreground flex items-center"><Package size={18} className={`${isRTL ? 'ml-2' : 'mr-2'} text-primary`} />{t.deliveryConditions || "Conditions de Livraison"}:</p>
            <p>• {t.deliveryCasablanca}</p>
            <p>• {t.deliveryOtherCities}</p>
            <p className="mt-2 font-semibold text-foreground">{t.paymentMethodLabel || "Mode de paiement"}:</p>
            <p>• {t.paymentMethod}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutPage;