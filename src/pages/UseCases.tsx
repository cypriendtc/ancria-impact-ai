import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BarChart3, Megaphone, BookOpen, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageHero from "@/components/PageHero";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

const ucIcons = [FileText, BarChart3, Megaphone, BookOpen, HeadphonesIcon];

const UseCaseItem = ({ uc, i, delay }: { uc: any, i: number, delay: number }) => {
  const { ref, visible } = useAnimationOnScroll({ threshold: 0.2 });
  const { lang, t } = useLanguage();
  const Icon = ucIcons[i];

  return (
    <div
      ref={ref}
      className="card-elevated p-8 md:p-10 transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Icon size={22} className="text-primary" />
            </div>
            <h2 className="text-xl font-heading font-semibold">{uc.title[lang]}</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">{uc.desc[lang]}</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{t.useCases.resultsLabel[lang]}</h3>
          <ul className="space-y-2">
            {uc.results.map((r: any, ri: number) => (
              <li key={ri} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> {r[lang]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const UseCases = () => {
  const { lang, t } = useLanguage();
  const { ref: ctaRef, visible: ctaVisible } = useAnimationOnScroll({ threshold: 0.2 });

  return (
    <>
      <PageHero
        title={t.useCases.title[lang]}
        highlight={t.useCases.titleHighlight[lang]}
        subtitle={t.useCases.subtitle[lang]}
      />

      <section className="section-padding pt-0 -mt-16">
        <div className="container mx-auto space-y-6">
          {t.useCases.items.map((uc, i) => (
            <UseCaseItem key={i} uc={uc} i={i} delay={i * 150} />
          ))}
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
              {t.useCases.ctaTitle[lang]}
            </h2>
            <p className="text-[hsl(var(--hero-fg)/0.7)] mb-6">{t.useCases.ctaDesc[lang]}</p>
            <Link to="/contact">
              <Button size="lg">
                {t.useCases.ctaBtn[lang]} <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCases;
