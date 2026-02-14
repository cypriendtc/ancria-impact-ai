import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, GraduationCap, ArrowRight, Zap, Users, TrendingUp, Shield, CheckCircle, Lightbulb, Settings, BarChart3, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return count;
};

const StatItem = ({ end, suffix, label, icon: Icon, started }: { end: number; suffix: string; label: string; icon: React.ElementType; started: boolean }) => {
  const count = useCountUp(end, 1800, started);
  return (
    <div className="text-center">
      <Icon size={28} className="text-primary mx-auto mb-3" />
      <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-1">{count}{suffix}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const icons = [Brain, Cpu, GraduationCap];
const whyIcons = [Lightbulb, Settings, BarChart3, MessageSquare];
const statIcons = [TrendingUp, Users, Shield, Zap];
const statEnds = [50, 30, 95, 10];
const statSuffixes = ["+", "+", "%", "x"];

const Index = () => {
  const { lang, t } = useLanguage();
  const { ref: expertisesRef, visible: expertisesVisible } = useAnimationOnScroll({ threshold: 0.15 });
  const { ref: statsRef, visible: statsVisible } = useAnimationOnScroll({ threshold: 0.3 });
  const { ref: whyUsRef, visible: whyUsVisible } = useAnimationOnScroll({ threshold: 0.15 });
  const { ref: ctaRef, visible: ctaVisible } = useAnimationOnScroll({ threshold: 0.15 });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-dark">
        <div className="absolute inset-0">
          <img src={heroBg} alt="IA et technologie en Afrique" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-bg))] via-[hsl(var(--hero-bg)/0.85)] to-[hsl(var(--hero-bg)/0.5)]" />
        </div>
        <div className="container mx-auto relative z-10 px-4 md:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Zap size={14} />
              {t.hero.badge[lang]}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-[hsl(var(--hero-fg))] animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {t.hero.titleStart[lang]}{" "}
              <span className="text-gradient">{t.hero.titleHighlight[lang]}</span>{" "}
              {t.hero.titleEnd[lang]}
            </h1>
            <p className="text-lg text-[hsl(var(--hero-fg)/0.75)] mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {t.hero.desc[lang]}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button size="lg">
                  {t.hero.cta1[lang]}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="secondary" className="bg-white/15 text-white border-2 border-white/40 hover:bg-white/25 font-semibold shadow-lg backdrop-blur-sm">
                  {t.hero.cta2[lang]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section ref={expertisesRef} className="section-padding pt-0 -mt-16">
        <div className="container mx-auto">
          <div
            className="text-center mb-16 transition-all duration-700 ease-out"
            style={{
              opacity: expertisesVisible ? 1 : 0,
              transform: expertisesVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {t.expertises.title[lang]} <span className="text-gradient">{t.expertises.titleHighlight[lang]}</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t.expertises.subtitle[lang]}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.expertises.items.map((s, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="card-elevated p-8 group transition-all duration-700 ease-out"
                  style={{
                    opacity: expertisesVisible ? 1 : 0,
                    transform: expertisesVisible ? "scale(1) translateY(0)" : "scale(0.8) translateY(40px)",
                    transitionDelay: `${150 + i * 150}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{s.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc[lang]}</p>
                  <Link to="/services" className="inline-flex items-center text-sm text-primary font-medium hover:underline">
                    {t.expertises.learnMore[lang]} <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.items.map((stat, i) => (
              <StatItem key={i} end={statEnds[i]} suffix={statSuffixes[i]} label={stat.label[lang]} icon={statIcons[i]} started={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section ref={whyUsRef} className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: whyUsVisible ? 1 : 0,
                transform: whyUsVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                {t.whyUs.title[lang]} <span className="text-gradient">ANCRIA</span> ?
              </h2>
              <div className="space-y-5">
                {t.whyUs.reasons.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.whyUs.cards.map((item, i) => {
                const Icon = whyIcons[i];
                return (
                  <div
                    key={i}
                    className="card-elevated p-6 text-center transition-all duration-700 ease-out"
                    style={{
                      opacity: whyUsVisible ? 1 : 0,
                      transform: whyUsVisible ? "translateY(0)" : "translateY(40px)",
                      transitionDelay: `${150 + i * 150}ms`,
                    }}
                  >
                    <Icon size={28} className="text-primary mx-auto mb-3" />
                    <h4 className="font-heading font-semibold text-sm">{item.label[lang]}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc[lang]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="section-padding">
        <div className="container mx-auto">
          <div
            className="hero-dark rounded-2xl p-10 md:p-16 text-center transition-all duration-700 ease-out"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "scale(1)" : "scale(0.95)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-[hsl(var(--hero-fg))]">
              {t.cta.title[lang]}<span className="text-gradient">{t.cta.titleHighlight[lang]}</span> ?
            </h2>
            <p className="text-[hsl(var(--hero-fg)/0.7)] mb-8 max-w-lg mx-auto">{t.cta.desc[lang]}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">
                  {t.cta.btn1[lang]} <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white/15 text-white border-2 border-white/40 hover:bg-white/25 font-semibold shadow-lg backdrop-blur-sm">
                  {t.cta.btn2[lang]}
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
