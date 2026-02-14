import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Leaf,
  AlertTriangle,
  Lightbulb,
  Search,
  BarChart3,
  Bot,
  TrendingUp,
  Zap,
  Recycle,
  PieChart,
  Banknote,
  CheckCircle,
  Target,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageHero from "@/components/PageHero";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

const stepIcons = [Search, BarChart3, Bot, TrendingUp];

const useCaseIcons = [Zap, Recycle, PieChart, Banknote];

const GreenIntelligence = () => {
  const { lang, t } = useLanguage();
  const gi = t.greenIntelligence;

  const { ref: problemRef, visible: problemVisible } = useAnimationOnScroll({ threshold: 0.2 });
  const { ref: solutionRef, visible: solutionVisible } = useAnimationOnScroll({ threshold: 0.2 });
  const { ref: stepsRef, visible: stepsVisible } = useAnimationOnScroll({ threshold: 0.1 });
  const { ref: ucRef, visible: ucVisible } = useAnimationOnScroll({ threshold: 0.1 });
  const { ref: impactRef, visible: impactVisible } = useAnimationOnScroll({ threshold: 0.2 });
  const { ref: diffRef, visible: diffVisible } = useAnimationOnScroll({ threshold: 0.2 });
  const { ref: ctaRef, visible: ctaVisible } = useAnimationOnScroll({ threshold: 0.2 });

  return (
    <>
      <PageHero
        title={gi.title[lang]}
        highlight={gi.titleHighlight[lang]}
        subtitle={gi.subtitle[lang]}
      />

      {/* Section 1 – Le Problème */}
      <section ref={problemRef} className="section-padding pt-0 -mt-8 md:-mt-16">
        <div className="container mx-auto max-w-4xl">
          <div
            className="card-elevated p-8 md:p-12 transition-all duration-700 ease-out"
            style={{
              opacity: problemVisible ? 1 : 0,
              transform: problemVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle size={22} className="text-destructive" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold">{gi.problemTitle[lang]}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{gi.problemIntro[lang]}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">{gi.pressureLabel[lang]}</h3>
                <ul className="space-y-2">
                  {gi.pressures.map((p, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" /> {p[lang]}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">{gi.gapsLabel[lang]}</h3>
                <ul className="space-y-2">
                  {gi.gaps.map((g, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" /> {g[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 text-sm italic">{gi.problemConclusion[lang]}</p>
          </div>
        </div>
      </section>

      {/* Section 2 – Notre Solution */}
      <section ref={solutionRef} className="section-padding pt-0">
        <div className="container mx-auto max-w-4xl">
          <div
            className="card-elevated p-8 md:p-12 transition-all duration-700 ease-out"
            style={{
              opacity: solutionVisible ? 1 : 0,
              transform: solutionVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Lightbulb size={22} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold">{gi.solutionTitle[lang]}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{gi.solutionIntro[lang]}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {gi.solutionPoints.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-accent/50">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{s[lang]}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-sm font-medium text-primary">{gi.solutionObjective[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – Comment ça fonctionne */}
      <section ref={stepsRef} className="section-padding pt-0">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 transition-all duration-700 ease-out"
            style={{
              opacity: stepsVisible ? 1 : 0,
              transform: stepsVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            {gi.howTitle[lang]}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {gi.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div
                  key={i}
                  className="card-elevated p-6 md:p-8 transition-all duration-700 ease-out"
                  style={{
                    opacity: stepsVisible ? 1 : 0,
                    transform: stepsVisible ? "translateY(0)" : "translateY(40px)",
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="text-primary font-heading font-bold text-sm">0{i + 1}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg">{step.title[lang]}</h3>
                  </div>
                  <ul className="space-y-2">
                    {step.details.map((d, di) => (
                      <li key={di} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Icon size={14} className="text-primary mt-0.5 shrink-0" />
                        {d[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section – Cas d'usage */}
      <section ref={ucRef} className="section-padding pt-0">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 transition-all duration-700 ease-out"
            style={{
              opacity: ucVisible ? 1 : 0,
              transform: ucVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            🌿 {gi.ucTitle[lang]}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {gi.useCases.map((uc, i) => {
              const Icon = useCaseIcons[i];
              return (
                <div
                  key={i}
                  className="card-elevated p-6 md:p-8 transition-all duration-700 ease-out"
                  style={{
                    opacity: ucVisible ? 1 : 0,
                    transform: ucVisible ? "translateY(0)" : "translateY(40px)",
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">{uc.title[lang]}</h3>
                  </div>
                  <ul className="space-y-2">
                    {uc.results.map((r, ri) => (
                      <li key={ri} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> {r[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section – Impact cible */}
      <section ref={impactRef} className="section-padding pt-0">
        <div className="container mx-auto max-w-4xl">
          <div
            className="hero-dark rounded-2xl p-8 md:p-12 transition-all duration-700 ease-out"
            style={{
              opacity: impactVisible ? 1 : 0,
              transform: impactVisible ? "scale(1)" : "scale(0.95)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center text-[hsl(var(--hero-fg))]">
              📈 {gi.impactTitle[lang]}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {gi.impactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Target size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-[hsl(var(--hero-fg)/0.85)] text-sm">{item[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section – Approche différenciante */}
      <section ref={diffRef} className="section-padding pt-0">
        <div className="container mx-auto max-w-4xl">
          <div
            className="card-elevated p-8 md:p-12 transition-all duration-700 ease-out"
            style={{
              opacity: diffVisible ? 1 : 0,
              transform: diffVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Leaf size={22} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold">{gi.diffTitle[lang]}</h2>
            </div>
            <p className="text-muted-foreground mb-6">{gi.diffIntro[lang]}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {gi.diffPoints.map((d, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-accent/50">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{d[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="section-padding pt-0">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className="hero-dark rounded-2xl p-10 md:p-14 transition-all duration-700 ease-out"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "scale(1)" : "scale(0.95)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[hsl(var(--hero-fg))]">
              {gi.ctaTitle[lang]}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link to="/contact">
                <Button size="lg">
                  {gi.ctaBtn1[lang]} <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-[hsl(var(--hero-fg)/0.3)] text-[hsl(var(--hero-fg))] hover:bg-[hsl(var(--hero-fg)/0.1)]">
                  {gi.ctaBtn2[lang]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreenIntelligence;
