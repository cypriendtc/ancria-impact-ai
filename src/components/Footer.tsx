import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { lang, t } = useLanguage();

  const navItems = [
    { label: t.nav.home[lang], path: "/" },
    { label: t.nav.about[lang], path: "/a-propos" },
    { label: t.nav.services[lang], path: "/services" },
    { label: t.nav.useCases[lang], path: "/cas-usage" },
    { label: t.nav.methodology[lang], path: "/methodologie" },
  ];

  return (
    <footer className="hero-dark border-t border-border">
      <div className="container mx-auto py-12 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="ANCRIA" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-sm text-[hsl(var(--hero-fg)/0.7)] leading-relaxed">
              {t.footer.desc[lang]}
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-[hsl(var(--hero-fg))] mb-4">{t.footer.navigation[lang]}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-[hsl(var(--hero-fg)/0.6)] hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-[hsl(var(--hero-fg))] mb-4">{t.footer.servicesTitle[lang]}</h4>
            <ul className="space-y-2 text-sm text-[hsl(var(--hero-fg)/0.6)]">
              {t.footer.servicesList.map((s, i) => (
                <li key={i}>{s[lang]}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-[hsl(var(--hero-fg))] mb-4">{t.footer.contactTitle[lang]}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--hero-fg)/0.6)]">
                <Mail size={16} className="text-primary" /> contact@ancria.tech
              </li>
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--hero-fg)/0.6)]">
                <Phone size={16} className="text-primary" /> +237 6 98 36 44 32
              </li>
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--hero-fg)/0.6)]">
                <MapPin size={16} className="text-primary" /> Douala, Cameroun
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[hsl(var(--hero-fg)/0.1)] text-center text-sm text-[hsl(var(--hero-fg)/0.5)]">
          © {new Date().getFullYear()} ANCRIA. {t.footer.rights[lang]}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
