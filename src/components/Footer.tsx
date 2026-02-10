import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto py-12 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold text-gradient mb-4">ANCRIATECH</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              L'intelligence artificielle au service de la performance des entreprises africaines.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", path: "/" },
                { label: "À propos", path: "/a-propos" },
                { label: "Services", path: "/services" },
                { label: "Cas d'usage", path: "/cas-usage" },
                { label: "Méthodologie", path: "/methodologie" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Conseil en IA</li>
              <li>Automatisation & Agents IA</li>
              <li>Formation & Accompagnement</li>
              <li>Audit & Stratégie IA</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                contact@ancriatech.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                +221 XX XXX XX XX
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                Dakar, Sénégal
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ANCRIATECH. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
