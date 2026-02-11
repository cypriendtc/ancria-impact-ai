import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

type Message = { role: "user" | "bot"; text: string };

const faqFr: Record<string, string> = {
  service: "Nous proposons 3 expertises : Conseil en IA, Automatisation & Agents IA, et Formation & Accompagnement. Visitez notre page Services pour en savoir plus !",
  prix: "Nos tarifs sont sur mesure selon votre projet. Contactez-nous pour un devis gratuit !",
  devis: "Vous pouvez demander un devis gratuit via notre page Contact ou sur WhatsApp au +237 6 98 36 44 32.",
  contact: "Vous pouvez nous joindre par email à contact@ancriatech.com, par téléphone au +237 6 98 36 44 32, ou via WhatsApp.",
  formation: "Nous proposons des formations IA sur mesure pour vos équipes et des coachings pour les dirigeants. Contactez-nous pour un programme personnalisé !",
  automatisation: "Nous automatisons vos processus avec n8n, Make et des agents IA métiers pour gagner en productivité.",
  ia: "L'IA peut transformer votre entreprise : automatisation, analyse de données, chatbots, marketing personnalisé et bien plus. Parlons de votre projet !",
  cameroun: "Nous sommes basés à Douala, Cameroun, et accompagnons les entreprises de toute l'Afrique.",
  afrique: "Nous intervenons dans toute l'Afrique avec une expertise adaptée aux réalités économiques du continent.",
  whatsapp: "Écrivez-nous sur WhatsApp au +237 6 98 36 44 32 !",
  rdv: "Rendez-vous sur notre page Contact pour planifier un appel découverte gratuit.",
  bonjour: "Bonjour ! 😊 Comment puis-je vous aider aujourd'hui ?",
  merci: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions.",
};

const faqEn: Record<string, string> = {
  service: "We offer 3 areas of expertise: AI Consulting, Automation & AI Agents, and Training & Support. Visit our Services page to learn more!",
  price: "Our pricing is customized for each project. Contact us for a free quote!",
  quote: "You can request a free quote on our Contact page or via WhatsApp at +237 6 98 36 44 32.",
  contact: "Reach us by email at contact@ancriatech.com, by phone at +237 6 98 36 44 32, or via WhatsApp.",
  training: "We offer tailored AI training for your teams and executive coaching. Contact us for a personalized program!",
  automation: "We automate your processes with n8n, Make and business AI agents to boost productivity.",
  ai: "AI can transform your business: automation, data analysis, chatbots, personalized marketing and much more. Let's talk about your project!",
  cameroon: "We are based in Douala, Cameroon, and support businesses across Africa.",
  africa: "We work across Africa with expertise adapted to the continent's economic realities.",
  whatsapp: "Message us on WhatsApp at +237 6 98 36 44 32!",
  appointment: "Visit our Contact page to schedule a free discovery call.",
  hello: "Hello! 😊 How can I help you today?",
  thanks: "You're welcome! Feel free to ask if you have more questions.",
};

const getResponse = (input: string, lang: string): string => {
  const lower = input.toLowerCase();
  const faq = lang === "fr" ? faqFr : faqEn;
  const defaultMsg = lang === "fr"
    ? "Merci pour votre message ! Pour une réponse personnalisée, contactez-nous via WhatsApp au +237 6 98 36 44 32 ou sur notre page Contact."
    : "Thanks for your message! For a personalized response, reach out via WhatsApp at +237 6 98 36 44 32 or our Contact page.";

  for (const [key, value] of Object.entries(faq)) {
    if (lower.includes(key)) return value;
  }
  return defaultMsg;
};

const ChatBot = () => {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "bot", text: t.chatbot.greeting[lang] }]);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getResponse(userMsg.text, lang) }]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105"
        aria-label="Chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-up" style={{ height: "480px" }}>
          {/* Header */}
          <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <MessageCircle size={16} />
            </div>
            <div>
              <div className="font-heading font-semibold text-sm">{t.chatbot.title[lang]}</div>
              <div className="text-xs opacity-75">Online</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={t.chatbot.placeholder[lang]}
              className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
            />
            <Button size="icon" onClick={send} disabled={!input.trim()} className="rounded-xl shrink-0">
              <Send size={16} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
