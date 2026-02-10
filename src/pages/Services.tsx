import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, GraduationCap, ArrowRight, Search, LineChart, Workflow, Bot, Users, BookOpen } from "lucide-react";

const services = [
  {
    category: "Conseil en Intelligence Artificielle",
    icon: Brain,
    items: [
      {
        icon: Search,
        title: "Audit IA",
        problem: "Vous ne savez pas par où commencer avec l'IA.",
        solution: "Nous analysons vos processus et identifions les opportunités d'optimisation par l'IA.",
        benefits: ["Cartographie des opportunités IA", "Priorisation par impact business", "Feuille de route actionnable"],
      },
      {
        icon: LineChart,
        title: "Stratégie IA",
        problem: "Vous souhaitez intégrer l'IA mais manquez de vision stratégique.",
        solution: "Nous concevons votre stratégie IA alignée sur vos objectifs de croissance.",
        benefits: ["Plan stratégique IA sur 12-24 mois", "Identification des KPIs", "Budget et ROI prévisionnel"],
      },
    ],
  },
  {
    category: "Automatisation & Agents IA",
    icon: Cpu,
    items: [
      {
        icon: Workflow,
        title: "Workflows & Automatisation",
        problem: "Vos équipes perdent du temps sur des tâches répétitives.",
        solution: "Nous automatisons vos processus avec n8n, Make et des solutions sur mesure.",
        benefits: ["Réduction de 70% du temps sur les tâches répétitives", "Zéro erreur humaine", "Scalabilité immédiate"],
      },
      {
        icon: Bot,
        title: "Agents IA Métiers",
        problem: "Vous cherchez à augmenter la capacité de vos équipes.",
        solution: "Nous développons des agents IA spécialisés pour vos besoins métiers.",
        benefits: ["Assistant IA disponible 24/7", "Réponses instantanées et contextualisées", "Intégration à vos outils existants"],
      },
    ],
  },
  {
    category: "Formation & Accompagnement",
    icon: GraduationCap,
    items: [
      {
        icon: Users,
        title: "Formation IA pour Entreprises",
        problem: "Vos équipes ne maîtrisent pas les outils IA.",
        solution: "Nous formons vos collaborateurs aux usages concrets de l'IA dans leur métier.",
        benefits: ["Programmes adaptés à votre secteur", "Ateliers pratiques et cas concrets", "Certification de compétences"],
      },
      {
        icon: BookOpen,
        title: "Coaching Dirigeants",
        problem: "Vous souhaitez comprendre l'IA pour prendre les bonnes décisions.",
        solution: "Un accompagnement personnalisé pour intégrer l'IA dans votre vision stratégique.",
        benefits: ["Sessions individuelles", "Veille technologique dédiée", "Réseau de décideurs IA"],
      },
    ],
  },
];

const Services = () => {
  return (
    <>
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Nos <span className="text-gradient">services</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Des solutions complètes pour intégrer l'IA dans votre entreprise, de la stratégie au déploiement.
          </p>
        </div>
      </section>

      {services.map((cat) => (
        <section key={cat.category} className="section-padding even:bg-card/50">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <cat.icon size={22} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{cat.category}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cat.items.map((item) => (
                <div key={item.title} className="glass rounded-xl p-8 hover:border-primary/40 transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <item.icon size={22} className="text-primary" />
                    <h3 className="font-heading font-semibold text-xl text-foreground">{item.title}</h3>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-destructive">Problème</span>
                      <p className="text-sm text-muted-foreground mt-1">{item.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">Solution ANCRIATECH</span>
                      <p className="text-sm text-muted-foreground mt-1">{item.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Bénéfices</span>
                      <ul className="mt-2 space-y-1">
                        {item.benefits.map((b) => (
                          <li key={b} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="border-primary/30 text-foreground hover:bg-primary/10">
                      Demander un devis <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Services;
