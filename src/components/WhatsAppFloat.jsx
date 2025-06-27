import React from 'react';
import { MessageSquare } from 'lucide-react'; // Using MessageSquare for WhatsApp icon

const WhatsAppFloat = ({ phoneNumber }) => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare size={28} />
    </button>
  );
};

export default WhatsAppFloat;