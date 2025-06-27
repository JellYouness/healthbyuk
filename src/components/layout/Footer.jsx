import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = ({ t, logoUrl }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300 pt-12 pb-8">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logoUrl} alt={t.siteTitle} className="h-12 w-auto bg-white p-1 rounded" />
            </Link>
            <p className="text-sm mb-4">{t.footerSlogan || "Votre source de confiance pour les compléments alimentaires de qualité."}</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href={t.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">{t.quickLinks || "Liens Utiles"}</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors text-sm">{t.navHome || "Accueil"}</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors text-sm">{t.navShop || "Boutique"}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors text-sm">{t.navAbout || "À Propos"}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors text-sm">{t.navContact || "Contact"}</Link></li>
              <li><Link to="/cart" className="hover:text-white transition-colors text-sm">{t.cart || "Panier"}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-4">{t.contactInfo || "Contactez-nous"}</h5>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                <Mail size={18} className="text-primary" />
                <a href={`mailto:${t.emailAddress}`} className="hover:text-white transition-colors">{t.emailAddress}</a>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                <Phone size={18} className="text-primary" />
                <a href={`tel:${t.whatsappNumber}`} className="hover:text-white transition-colors">{t.whatsappNumber}</a>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                <MapPin size={18} className="text-primary" />
                <span>{t.address || "Casablanca, Maroc"}</span>
              </li>
            </ul>
          </div>
          
          <div>
             <h5 className="text-lg font-semibold text-white mb-4">{t.newsletter || "Newsletter"}</h5>
             <p className="text-sm mb-3">{t.newsletterSub || "Abonnez-vous pour les dernières offres."}</p>
             <form onSubmit={(e) => {e.preventDefault(); toast({title: t.featureNotImplemented || "Fonctionnalité non implémentée", description: t.featureNotImplementedDesc || "Cette fonctionnalité sera bientôt disponible."})}}>
                <div className="flex">
                    <input type="email" placeholder={t.emailPlaceholder || "Votre email"} className="w-full px-3 py-2 rounded-l-md border border-slate-600 bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-primary" />
                    <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md font-semibold text-sm">{t.subscribe || "S'abonner"}</button>
                </div>
             </form>
          </div>

        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {t.siteTitle}. {t.allRightsReserved || "Tous droits réservés."}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;