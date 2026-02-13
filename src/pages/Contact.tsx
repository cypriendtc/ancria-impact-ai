import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";
import PageHero from "@/components/PageHero";

const Contact = () => {
  const { lang, t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: t.contact.toastFill[lang], variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: t.contact.toastSuccess[lang], description: t.contact.toastSuccessDesc[lang] });
      setForm({ name: "", email: "", company: "", message: "" });
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/237698364432?text=${encodeURIComponent(t.contact.whatsappMsg[lang])}`;

  return (
    <>
      <PageHero
        title={t.contact.title[lang]}
        highlight={t.contact.titleSuffix[lang]}
        subtitle={t.contact.subtitle[lang]}
      />

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-5">
                <h2 className="text-xl font-heading font-semibold mb-2">{t.contact.formTitle[lang]}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">{t.contact.name[lang]}</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.contact.namePlaceholder[lang]} maxLength={100} />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">{t.contact.email[lang]}</label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" maxLength={255} />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">{t.contact.company[lang]}</label>
                  <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder={t.contact.companyPlaceholder[lang]} maxLength={100} />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">{t.contact.message[lang]}</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t.contact.messagePlaceholder[lang]} className="min-h-[140px]" maxLength={1000} />
                </div>
                <Button type="submit" disabled={sending} className="w-full">
                  {sending ? t.contact.sending[lang] : t.contact.send[lang]}
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="card-elevated p-8">
                <h3 className="font-heading font-semibold mb-5">{t.contact.coordinates[lang]}</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: t.contact.emailLabel[lang], value: "contact@ancria.com" },
                    { icon: Phone, label: t.contact.phoneLabel[lang], value: "+237 6 98 36 44 32" },
                    { icon: MapPin, label: t.contact.addressLabel[lang], value: "Douala, Cameroun" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                        <c.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{c.label}</div>
                        <div className="text-sm">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="card-elevated p-6 text-center cursor-pointer">
                  <MessageCircle size={32} className="text-primary mx-auto mb-3" />
                  <h3 className="font-heading font-semibold mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">{t.contact.whatsapp[lang]}</p>
                </div>
              </a>

              <div className="card-elevated p-6 text-center">
                <h3 className="font-heading font-semibold mb-2">{t.contact.appointment[lang]}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.contact.appointmentDesc[lang]}</p>
                <Button variant="outline" className="w-full">{t.contact.appointmentBtn[lang]}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
