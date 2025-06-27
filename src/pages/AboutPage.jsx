import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Leaf } from 'lucide-react';

const AboutPage = ({ t }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };
  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

  const teamMembers = [
    { name: t.founderName || "Nom du Fondateur", role: t.founderRole || "Fondateur & CEO", imagePlaceholder: "Fondateur de Health Beauty Store By Uk", description: t.founderDescription || "Passionné par la santé et le bien-être, avec une vision d'apporter des produits de qualité au Maroc." },
  ];

  const values = [
    { icon: Leaf, title: t.valueQuality || "Qualité Supérieure", text: t.valueQualityDesc || "Nous sélectionnons uniquement les meilleurs ingrédients et produits pour nos clients." },
    { icon: Heart, title: t.valueCustomer || "Satisfaction Client", text: t.valueCustomerDesc || "Votre bien-être est notre priorité. Nous sommes là pour vous conseiller et vous accompagner." },
    { icon: Target, title: t.valueIntegrity || "Intégrité et Transparence", text: t.valueIntegrityDesc || "Nous croyons en l'honnêteté et la clarté dans toutes nos interactions et informations produits." },
  ];

  return (
    <motion.div 
      initial="page-enter"
      animate="page-enter-active"
      exit="page-exit"
      className="container-max py-8 md:py-12 space-y-12 md:space-y-16"
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">{t.aboutUs || "À Propos de Nous"}</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {t.aboutIntro || "Chez Health Beauty Store By Uk, nous sommes dédiés à vous fournir des compléments alimentaires de la plus haute qualité pour soutenir votre parcours vers une vie plus saine et plus belle."}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <img  
            alt={t.aboutImageAlt1 || "Storefront or lifestyle image"} 
            className="w-full h-full object-cover"
           src="https://images.unsplash.com/photo-1603771628357-a2b2d72c2ea0" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-foreground mb-4">{t.ourMission || "Notre Mission"}</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            {t.ourMissionText || "Notre mission est de rendre accessibles des produits de santé et de beauté naturels et efficaces, en mettant l'accent sur la qualité, la transparence et le conseil personnalisé. Nous voulons être votre partenaire de confiance dans votre quête de bien-être."}
          </p>
          <p className="text-slate-700 leading-relaxed">
            {t.ourCommitment || "Nous nous engageons à sélectionner rigoureusement nos produits, à travailler avec des marques réputées et à offrir un service client exceptionnel."}
          </p>
        </div>
      </section>

      <section className="bg-slate-100 py-12 md:py-16 rounded-lg">
        <div className="container-max">
          <h2 className="text-3xl font-semibold text-center text-foreground mb-10">{t.ourValues || "Nos Valeurs"}</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-card rounded-lg shadow-md">
                  <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center text-foreground mb-10">{t.meetTheTeam || "Rencontrez l'Équipe"}</h2>
        <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                <img  
                  alt={member.name} 
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-slate-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;