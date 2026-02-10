import { Target, Eye, Heart, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            À propos d'<span className="text-gradient">ANCRIATECH</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous croyons que l'intelligence artificielle est un levier de transformation majeur pour les entreprises africaines. Notre mission : rendre l'IA accessible, concrète et rentable.
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/50 pt-0">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 -mt-4">
          <div className="card-elevated p-8">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
              <Target size={24} className="text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-4">Notre Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Accompagner les entreprises africaines dans leur transformation numérique par l'adoption intelligente de l'IA et l'automatisation, en proposant des solutions pragmatiques, sur mesure et orientées résultats.
            </p>
          </div>
          <div className="card-elevated p-8">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
              <Eye size={24} className="text-secondary" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-4">Notre Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              Devenir le partenaire de référence en intelligence artificielle pour les entreprises du continent africain, en contribuant à un écosystème technologique innovant, inclusif et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Nos <span className="text-gradient">valeurs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Impact", desc: "Chaque projet doit créer de la valeur mesurable pour nos clients et leur écosystème." },
              { icon: Globe, title: "Accessibilité", desc: "Nous rendons l'IA compréhensible et accessible, même pour les non-techniciens." },
              { icon: Award, title: "Excellence", desc: "Nous visons la qualité et l'innovation dans chaque solution que nous déployons." },
            ].map((v) => (
              <div key={v.title} className="card-elevated p-8 text-center">
                <v.icon size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Un positionnement <span className="text-gradient">unique</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            ANCRIATECH se distingue par sa connaissance approfondie des réalités économiques africaines combinée à une expertise de pointe en intelligence artificielle. Nous ne vendons pas de la technologie pour la technologie : nous apportons des solutions concrètes qui répondent à de vrais enjeux business.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Notre approche pédagogique permet à vos équipes de s'approprier les outils IA, garantissant une adoption durable et un retour sur investissement optimal.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
