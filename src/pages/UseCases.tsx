import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BarChart3, Megaphone, BookOpen, HeadphonesIcon } from "lucide-react";

const useCases = [
  {
    icon: FileText,
    title: "Automatisation de publication de contenu",
    desc: "Automatisez la création, la planification et la publication de vos contenus sur les réseaux sociaux et votre blog grâce à des workflows IA.",
    results: ["Gain de 80% de temps sur la gestion de contenu", "Publication cohérente et régulière", "Contenu optimisé par l'IA"],
  },
  {
    icon: BarChart3,
    title: "IA pour la productivité interne",
    desc: "Optimisez les processus internes : reporting automatisé, gestion documentaire intelligente, extraction de données et synthèses automatiques.",
    results: ["Réduction de 60% des tâches administratives", "Rapports générés en quelques secondes", "Meilleure prise de décision"],
  },
  {
    icon: Megaphone,
    title: "IA pour le marketing digital",
    desc: "Personnalisez vos campagnes marketing, analysez les performances et générez du contenu ciblé grâce à l'intelligence artificielle.",
    results: ["Segmentation client automatisée", "ROI marketing multiplié par 3", "Campagnes personnalisées à grande échelle"],
  },
  {
    icon: BookOpen,
    title: "IA pour la formation",
    desc: "Créez des parcours de formation adaptatifs, générez des supports pédagogiques et suivez la progression des apprenants avec l'IA.",
    results: ["Parcours de formation personnalisés", "Création de contenu pédagogique automatisée", "Suivi de progression intelligent"],
  },
  {
    icon: HeadphonesIcon,
    title: "IA pour la relation client",
    desc: "Déployez des chatbots intelligents, automatisez le support client et analysez la satisfaction pour améliorer l'expérience client.",
    results: ["Support disponible 24/7", "Temps de réponse divisé par 10", "Satisfaction client en hausse de 40%"],
  },
];

const UseCases = () => {
  return (
    <>
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Cas d'<span className="text-gradient">usage</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Découvrez comment l'IA transforme concrètement les entreprises au quotidien.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto space-y-6">
          {useCases.map((uc, i) => (
            <div key={uc.title} className="glass rounded-xl p-8 md:p-10 hover:border-primary/40 transition-all animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <uc.icon size={22} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-foreground">{uc.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Résultats</h3>
                  <ul className="space-y-2">
                    {uc.results.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto text-center">
          <div className="glass rounded-2xl p-10 md:p-14 glow-cyan">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Vous avez un cas d'usage spécifique ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Parlons-en. Nous identifions ensemble les opportunités IA pour votre activité.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Discuter de mon projet <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCases;
