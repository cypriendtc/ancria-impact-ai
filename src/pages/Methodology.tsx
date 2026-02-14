import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Lightbulb, Rocket, GraduationCap, RefreshCw } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageHero from "@/components/PageHero";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

const stepIcons = [Search, Lightbulb, Rocket, GraduationCap, RefreshCw];
const stepNumbers = ["01", "02", "03", "04", "05"];

const Methodology = () => {
  const { lang, t } = useLanguage();
  const { ref: stepsRef, visible: stepsVisible } = useAnimationOnScroll({ threshold: 0.1 });
  const { ref: ctaRef, visible: ctaVisible } = useAnimationOnScroll({ threshold: 0.2 });

  return (
    <>
      <PageHero
        title={t.methodology.title[lang]}
        highlight={t.methodology.titleHighlight[lang]}
        subtitle={t.methodology.subtitle[lang]}
      />

      <section ref={stepsRef} className="section-padding pt-0 -mt-8 md:-mt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />
            <div className="space-y-8">
              {t.methodology.steps.map((step, i) => {
                const Icon = stepIcons[i];
                return (
                  <div
                    key={i}
                    className="relative flex gap-6 md:gap-10 transition-all duration-700 ease-out"
                    style={{
                      opacity: stepsVisible ? 1 : 0,
                      transform: stepsVisible ? "translateY(0)" : "translateY(40px)",
                      transitionDelay: `${i * 150}ms`,
                    }}
                  >
                    <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                      <span className="text-primary font-heading font-bold text-sm md:text-base">{stepNumbers[i]}</span>
                    </div>
                    <div className="card-elevated p-6 md:p-8 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon size={20} className="text-primary" />
                        <h2 className="text-xl font-heading font-semibold">{step.title[lang]}</h2>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.desc[lang]}</p>
                      <ul className="space-y-1">
                        {step.details.map((d, di) => (
                          <li key={di} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {d[lang]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="section-padding pt-0">
        <div className="container mx-auto text-center">
          <div
            className="hero-dark rounded-2xl p-10 md:p-14 transition-all duration-700 ease-out"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "scale(1)" : "scale(0.95)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[hsl(var(--hero-fg))]">
              {t.methodology.ctaTitle[lang]}
            </h2>
            <p className="text-[hsl(var(--hero-fg)/0.7)] mb-6">{t.methodology.ctaDesc[lang]}</p>
            <Link to="/contact">
              <Button size="lg">
                {t.methodology.ctaBtn[lang]} <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Methodology;
