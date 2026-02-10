import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Lightbulb, Rocket, GraduationCap, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search, number: "01", title: "Diagnostic",
    desc: "Nous analysons votre environnement, vos processus et vos objectifs pour identifier les opportunités d'automatisation et d'IA les plus pertinentes.",
    details: ["Audit des processus existants", "Entretiens avec les équipes clés", "Analyse des données disponibles"],
  },
  {
    icon: Lightbulb, number: "02", title: "Conception de la solution",
    desc: "Nous concevons une solution sur mesure en sélectionnant les technologies et approches les plus adaptées à vos besoins et contraintes.",
    details: ["Architecture technique", "Choix des outils et modèles IA", "Prototypage rapide"],
  },
  {
    icon: Rocket, number: "03", title: "Déploiement",
    desc: "Nous déployons la solution de manière progressive, en intégrant les outils à votre environnement existant et en minimisant les perturbations.",
    details: ["Intégration avec vos outils", "Tests et validation", "Mise en production progressive"],
  },
  {
    icon: GraduationCap, number: "04", title: "Formation",
    desc: "Nous formons vos équipes à l'utilisation des nouveaux outils pour garantir une adoption durable et une autonomie rapide.",
    details: ["Formation pratique des utilisateurs", "Documentation personnalisée", "Support post-formation"],
  },
  {
    icon: RefreshCw, number: "05", title: "Suivi & Optimisation",
    desc: "Nous assurons un suivi continu pour mesurer l'impact, ajuster les solutions et identifier de nouvelles opportunités d'amélioration.",
    details: ["Tableau de bord de performance", "Optimisations continues", "Veille technologique"],
  },
];

const Methodology = () => {
  return (
    <>
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Notre <span className="text-gradient">méthodologie</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Une approche structurée et éprouvée pour garantir le succès de votre transformation IA.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.number} className="relative flex gap-6 md:gap-10 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                    <span className="text-primary font-heading font-bold text-sm md:text-base">{step.number}</span>
                  </div>
                  <div className="card-elevated p-6 md:p-8 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon size={20} className="text-primary" />
                      <h2 className="text-xl font-heading font-semibold">{step.title}</h2>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.desc}</p>
                    <ul className="space-y-1">
                      {step.details.map((d) => (
                        <li key={d} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto text-center">
          <div className="hero-dark rounded-2xl p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[hsl(var(--hero-fg))]">
              Prêt à démarrer votre projet IA ?
            </h2>
            <p className="text-[hsl(var(--hero-fg)/0.7)] mb-6">
              Commençons par un diagnostic gratuit de vos besoins.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Planifier un diagnostic <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Methodology;
