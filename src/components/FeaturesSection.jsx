import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Star, Heart } from 'lucide-react';

const FeaturesSection = ({ t }) => {
  const features = [
    { icon: Truck, title: t.deliveryCasablanca, desc: t.deliveryCasablancaDesc || "Livraison rapide en 24h à Casablanca" },
    { icon: Truck, title: t.deliveryOtherCities, desc: t.deliveryOtherCitiesDesc || "Livraison en 24-96h dans les autres villes" },
    { icon: Package, title: t.cashOnDelivery, desc: t.cashOnDeliveryDesc || "Paiement sécurisé à la livraison" },
    { icon: Star, title: t.qualityGuarantee, desc: t.qualityGuaranteeDesc || "Produits certifiés et authentiques" },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-green-600">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;