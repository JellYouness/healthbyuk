import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppFloat = ({ phoneNumber, t, isRTL }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(t.whatsappDefaultMessage || "Bonjour, j'ai une question.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`whatsapp-float ${isRTL ? 'rtl-true' : 'rtl-false'}`}
      aria-label={t.contactOnWhatsApp || "Contactez-nous sur WhatsApp"}
    >
      <MessageSquare size={28} />
    </button>
  );
};

export default WhatsAppFloat;