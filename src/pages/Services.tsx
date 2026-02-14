import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, GraduationCap, ArrowRight, Search, LineChart, Workflow, Bot, Users, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageHero from "@/components/PageHero";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

const catIcons = [Brain, Cpu, GraduationCap];
const itemIcons = [[Search, LineChart], [Workflow, Bot], [Users, BookOpen]];

const ServiceCategory = ({ cat, ci }: { cat: any, ci: number }) => {
  const { ref, visible } = useAnimationOnScroll({ threshold: 0.2 });
  const { lang, t } = useLanguage();
  const CatIcon = catIcons[ci];

  return (
    <section ref={ref} className={`section-padding ${ci === 0 ? "pt-0 -mt-8 md:-mt-16" : ""}`}>
      <div className="container mx-auto">
        <div
          className="flex items-center gap-3 mb-10 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <CatIcon size={22} className="text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold">{cat.category[lang]}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cat.items.map((item: any, ii: number) => {
            const ItemIcon = itemIcons[ci][ii];
            return (
              <div
                key={ii}
                className="card-elevated p-8 transition-all duration-700 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${150 + ii * 150}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <ItemIcon size={22} className="text-primary" />
                  <h3 className="font-heading font-semibold text-xl">{item.title[lang]}</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-destructive">{t.services.problemLabel[lang]}</span>
                    <p className="text-sm text-muted-foreground mt-1">{item.problem[lang]}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{t.services.solutionLabel[lang]}</span>
                    <p className="text-sm text-muted-foreground mt-1">{item.solution[lang]}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{t.services.benefitsLabel[lang]}</span>
                    <ul className="mt-2 space-y-1">
                      {item.benefits.map((b: any, bi: number) => (
                        <li key={bi} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {b[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="outline" size="sm">
                    {t.services.requestQuote[lang]} <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.services.title[lang]}
        highlight={t.services.titleHighlight[lang]}
        subtitle={t.services.subtitle[lang]}
      />

      {t.services.categories.map((cat, ci) => (
        <ServiceCategory key={ci} cat={cat} ci={ci} />
      ))}
    </>
  );
};

export default Services;
