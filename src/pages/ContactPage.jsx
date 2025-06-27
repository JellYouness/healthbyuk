import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Instagram, MessageSquare } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactPage = ({ t }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };
  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

  const contactItems = [
    { icon: Mail, label: t.email, value: t.emailAddress, href: `mailto:${t.emailAddress}` },
    { icon: Phone, label: t.phone, value: t.whatsappNumber, href: `tel:${t.whatsappNumber}` },
    { icon: MessageSquare, label: "WhatsApp", value: t.whatsappNumber, href: `https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(t.whatsappDefaultMessage || "Bonjour, j'ai une question.")}` },
    { icon: Instagram, label: "Instagram", value: t.instagramHandle, href: t.instagramUrl, target: "_blank" },
    { icon: MapPin, label: t.addressLabel || "Adresse", value: t.address || "Casablanca, Maroc" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: t.messageSentTitle || "Message (simulation) envoyé!",
      description: t.messageSentDesc || "Nous vous répondrons bientôt. (Ceci est une démo)",
    });
    e.target.reset();
  };

  return (
    <motion.div 
      initial="page-enter"
      animate="page-enter-active"
      exit="page-exit"
      className="container-max py-8 md:py-12"
    >
      <section className="text-center mb-10 md:mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">{t.navContact || "Contactez-Nous"}</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {t.contactIntro || "Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous joindre."}
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-foreground mb-6">{t.sendMessage || "Envoyez-nous un message"}</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t.yourName || "Votre Nom"}</label>
              <input type="text" name="name" id="name" required className="w-full p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t.yourEmail || "Votre Email"}</label>
              <input type="email" name="email" id="email" required className="w-full p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">{t.subject || "Sujet"}</label>
              <input type="text" name="subject" id="subject" required className="w-full p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t.yourMessage || "Votre Message"}</label>
              <textarea name="message" id="message" rows="5" required className="w-full p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary"></textarea>
            </div>
            <Button type="submit" size="lg" className="w-full btn-primary">{t.submitMessage || "Envoyer le Message"}</Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
           <h2 className="text-2xl font-semibold text-foreground mb-2">{t.ourCoordinates || "Nos Coordonnées"}</h2>
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{item.label}</h3>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      target={item.target || "_self"} 
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="text-slate-600 hover:text-primary transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-600">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
       {/* Map (Placeholder) */}
      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl font-semibold text-center text-foreground mb-6">{t.ourLocation || "Notre Emplacement"}</h2>
        <div className="aspect-video bg-slate-200 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-slate-500">{t.mapPlaceholder || "Carte interactive bientôt disponible ici."} (OpenStreetMap)</p>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;