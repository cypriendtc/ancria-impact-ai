import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-dark border-t border-border">
      <div className="container mx-auto py-12 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-heading font-bold text-gradient mb-4">ANCRIATECH</h3>
            <p className="text-sm text-[hsl(var(--hero-fg)/0.7)] leading-relaxed">
              L'intelligence artificielle au service de la performance des entreprises africaines.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-[hsl(var(--hero-fg))] mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", path: "/" },
                { label: "À propos", path: "/a-propos" },
                { label: "Services", path: "/services" },
                { label: "Cas d'usage", path: "/cas-usage" },
                { label: "Méthodologie", path: "/methodologie" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-[hsl(var(--hero-fg)/0.6)] hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-[hsl(var(--hero-fg))] mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[hsl(var(--hero-fg)/0.6)]">
              <li>Conseil en IA</li>
              <li>Automatisation & Agents IA</li>
              <li>Formation & Accompagnement</li>
              <li>Audit & Stratégie IA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-[hsl(var(--hero-fg))] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--hero-fg)/0.6)]">
                <Mail size={16} className="text-primary" /> contact@ancriatech.com
              </li>
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--hero-fg)/0.6)]">
                <Phone size={16} className="text-primary" /> +221 XX XXX XX XX
              </li>
              <li className="flex items-center gap-2 text-sm text-[hsl(var(--hero-fg)/0.6)]">
                <MapPin size={16} className="text-primary" /> Dakar, Sénégal
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[hsl(var(--hero-fg)/0.1)] text-center text-sm text-[hsl(var(--hero-fg)/0.5)]">
          © {new Date().getFullYear()} ANCRIATECH. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
