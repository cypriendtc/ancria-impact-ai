import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Veuillez remplir tous les champs obligatoires.", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
      setForm({ name: "", email: "", company: "", message: "" });
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${encodeURIComponent("Bonjour ANCRIATECH, je souhaite en savoir plus sur vos services.")}`;

  return (
    <>
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Contactez</span>-nous
          </h1>
          <p className="text-lg text-muted-foreground">
            Discutons de votre projet. Nous vous répondons sous 24 heures.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-5">
                <h2 className="text-xl font-heading font-semibold text-foreground mb-2">Envoyez-nous un message</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Nom complet *</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Votre nom"
                      className="bg-muted border-border"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email *</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="bg-muted border-border"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Entreprise</label>
                  <Input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Nom de votre entreprise"
                    className="bg-muted border-border"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Message *</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Décrivez votre projet ou vos besoins..."
                    className="bg-muted border-border min-h-[140px]"
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" disabled={sending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                  {sending ? "Envoi en cours..." : "Envoyer le message"}
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-xl p-8">
                <h3 className="font-heading font-semibold text-foreground mb-5">Coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="text-sm text-foreground">contact@ancriatech.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Téléphone</div>
                      <div className="text-sm text-foreground">+221 XX XXX XX XX</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Adresse</div>
                      <div className="text-sm text-foreground">Dakar, Sénégal</div>
                    </div>
                  </div>
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="glass rounded-xl p-6 hover:border-primary/40 transition-all cursor-pointer text-center">
                  <MessageCircle size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Discutez avec nous directement</p>
                </div>
              </a>

              <div className="glass rounded-xl p-6 text-center">
                <h3 className="font-heading font-semibold text-foreground mb-2">Prendre rendez-vous</h3>
                <p className="text-sm text-muted-foreground mb-4">Réservez un créneau pour un appel découverte gratuit.</p>
                <Button variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 w-full">
                  Planifier un appel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
