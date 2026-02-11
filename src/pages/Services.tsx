import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, GraduationCap, ArrowRight, Search, LineChart, Workflow, Bot, Users, BookOpen } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const catIcons = [Brain, Cpu, GraduationCap];
const itemIcons = [[Search, LineChart], [Workflow, Bot], [Users, BookOpen]];

const Services = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {t.services.title[lang]} <span className="text-gradient">{t.services.titleHighlight[lang]}</span>
          </h1>
          <p className="text-lg text-muted-foreground">{t.services.subtitle[lang]}</p>
        </div>
      </section>

      {t.services.categories.map((cat, ci) => {
        const CatIcon = catIcons[ci];
        return (
          <section key={ci} className={`section-padding ${ci % 2 === 1 ? "bg-muted/50" : ""}`}>
            <div className="container mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <CatIcon size={22} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold">{cat.category[lang]}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {cat.items.map((item, ii) => {
                  const ItemIcon = itemIcons[ci][ii];
                  return (
                    <div key={ii} className="card-elevated p-8">
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
                            {item.benefits.map((b, bi) => (
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
      })}
    </>
  );
};

export default Services;
