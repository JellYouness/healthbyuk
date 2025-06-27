import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = ({ t }) => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/35d67f9d-ab26-49f1-806f-ad0a85ce9339/5dc2485443c85c362e2dc261cd4ac2f4.jpg"
              alt="Health Beauty Store By Uk Logo" 
              className="h-16 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-green-200 text-sm">
              {t.footerSlogan || "Votre partenaire de confiance pour des compléments alimentaires de qualité premium."}
            </p>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">{t.quickLinks || "Liens rapides"}</span>
            <div className="space-y-2">
              <p className="text-green-200 hover:text-white cursor-pointer transition-colors text-sm">{t.aboutUs}</p>
              <p className="text-green-200 hover:text-white cursor-pointer transition-colors text-sm">{t.contactUs}</p>
              <p className="text-green-200 hover:text-white cursor-pointer transition-colors text-sm">{t.privacy}</p>
              <p className="text-green-200 hover:text-white cursor-pointer transition-colors text-sm">{t.terms}</p>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">{t.contact || "Contact"}</span>
            <div className="space-y-3 text-green-200">
              <a href={`mailto:${t.emailAddress}`} className="flex items-center space-x-2 hover:text-white transition-colors text-sm">
                <Mail size={18} />
                <span>{t.emailAddress}</span>
              </a>
              <a href={`tel:${t.whatsappNumber}`} className="flex items-center space-x-2 hover:text-white transition-colors text-sm">
                <Phone size={18} />
                <span>{t.whatsappNumber}</span>
              </a>
              <a href={t.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors text-sm">
                <Instagram size={18} />
                <span>{t.instagramHandle}</span>
              </a>
              <p className="text-sm">📍 {t.address || "Casablanca, Maroc"}</p>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">{t.followUs}</span>
            <div className="flex space-x-3">
              <a href={t.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
                <Instagram size={20} />
              </a>
              {/* Add other social links here if needed */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200 text-sm">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;