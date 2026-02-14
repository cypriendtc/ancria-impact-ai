import { Target, Eye, Heart, Globe, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import PageHero from "@/components/PageHero";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

const About = () => {
  const { lang, t } = useLanguage();
  const valIcons = [Heart, Globe, Award];

  const { ref: missionRef, visible: missionVisible } = useAnimationOnScroll({ threshold: 0.2 });
  const { ref: valuesRef, visible: valuesVisible } = useAnimationOnScroll({ threshold: 0.2 });
  const { ref: positionRef, visible: positionVisible } = useAnimationOnScroll({ threshold: 0.2 });

  return (
    <>
      <PageHero
        title={t.about.title[lang]}
        highlight="ANCRIA"
        subtitle={t.about.desc[lang]}
      />

      <section ref={missionRef} className="section-padding bg-muted/50 pt-0 -mt-8 md:-mt-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 -mt-4">
          <div
            className="card-elevated p-8 transition-all duration-700 ease-out"
            style={{
              opacity: missionVisible ? 1 : 0,
              transform: missionVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
              <Target size={24} className="text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-4">{t.about.mission[lang]}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.about.missionDesc[lang]}</p>
          </div>
          <div
            className="card-elevated p-8 transition-all duration-700 ease-out"
            style={{
              opacity: missionVisible ? 1 : 0,
              transform: missionVisible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "150ms",
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
              <Eye size={24} className="text-secondary" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-4">{t.about.vision[lang]}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.about.visionDesc[lang]}</p>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="section-padding">
        <div className="container mx-auto">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 transition-all duration-700 ease-out"
            style={{
              opacity: valuesVisible ? 1 : 0,
              transform: valuesVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            {t.about.valuesTitle[lang]} <span className="text-gradient">{t.about.valuesHighlight[lang]}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.about.values.map((v, i) => {
              const Icon = valIcons[i];
              return (
                <div
                  key={i}
                  className="card-elevated p-8 text-center transition-all duration-700 ease-out"
                  style={{
                    opacity: valuesVisible ? 1 : 0,
                    transform: valuesVisible ? "translateY(0)" : "translateY(40px)",
                    transitionDelay: `${150 + i * 150}ms`,
                  }}
                >
                  <Icon size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-3">{v.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc[lang]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={positionRef} className="section-padding bg-muted/50">
        <div
          className="container mx-auto max-w-3xl text-center transition-all duration-700 ease-out"
          style={{
            opacity: positionVisible ? 1 : 0,
            transform: positionVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <h2 className="text-3xl font-heading font-bold mb-6">
            {t.about.positionTitle[lang]} <span className="text-gradient">{t.about.positionHighlight[lang]}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{t.about.positionP1[lang]}</p>
          <p className="text-muted-foreground leading-relaxed">{t.about.positionP2[lang]}</p>
        </div>
      </section>
    </>
  );
};

export default About;
