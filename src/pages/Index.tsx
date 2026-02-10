import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, GraduationCap, ArrowRight, Zap, Users, TrendingUp, Shield, CheckCircle, Lightbulb, Settings, BarChart3, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="IA et technologie en Afrique" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        <div className="container mx-auto relative z-10 px-4 md:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6 animate-fade-up">
              <Zap size={14} />
              Intelligence Artificielle & Automatisation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              L'IA au service de la{" "}
              <span className="text-gradient">performance</span> des entreprises africaines
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              ANCRIATECH accompagne les PME, institutions et startups dans l'adoption de l'intelligence artificielle pour transformer leurs processus et accélérer leur croissance.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
                  Découvrir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nos <span className="text-gradient">expertises</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des solutions sur mesure pour intégrer l'IA dans votre entreprise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Conseil en IA",
                desc: "Audit, stratégie et identification des cas d'usage IA adaptés à votre activité.",
              },
              {
                icon: Cpu,
                title: "Automatisation & Agents IA",
                desc: "Automatisation des tâches répétitives, workflows n8n et agents IA métiers.",
              },
              {
                icon: GraduationCap,
                title: "Formation & Accompagnement",
                desc: "Programmes de formation IA sur mesure pour vos équipes et dirigeants.",
              },
            ].map((s, i) => (
              <div
                key={s.title}
                className="group glass rounded-xl p-8 hover:border-primary/40 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-cyan transition-all">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm text-primary hover:underline">
                  En savoir plus <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projets IA réalisés", icon: TrendingUp },
              { value: "30+", label: "Entreprises accompagnées", icon: Users },
              { value: "95%", label: "Taux de satisfaction", icon: Shield },
              { value: "10x", label: "Gain de productivité moyen", icon: Zap },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={28} className="text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ANCRIA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Pourquoi choisir <span className="text-gradient">ANCRIATECH</span> ?
              </h2>
              <div className="space-y-5">
                {[
                  "Expertise terrain sur les marchés africains",
                  "Approche pragmatique et orientée résultats",
                  "Solutions adaptées aux réalités des PME",
                  "Accompagnement de bout en bout",
                  "Technologies de pointe (GPT, n8n, agents IA)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, label: "Innovation", desc: "Solutions IA créatives" },
                { icon: Settings, label: "Sur mesure", desc: "Adapté à vos besoins" },
                { icon: BarChart3, label: "ROI mesurable", desc: "Résultats concrets" },
                { icon: MessageSquare, label: "Support dédié", desc: "Suivi continu" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-6 text-center hover:border-primary/40 transition-all">
                  <item.icon size={28} className="text-primary mx-auto mb-3" />
                  <h4 className="font-heading font-semibold text-sm text-foreground">{item.label}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass rounded-2xl p-10 md:p-16 text-center glow-cyan">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Prêt à transformer votre entreprise avec l'<span className="text-gradient">IA</span> ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Discutons de vos enjeux et identifions ensemble les opportunités d'automatisation et d'IA pour votre activité.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
