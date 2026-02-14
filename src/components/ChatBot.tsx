import { useState, useRef, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

type Message = { role: "user" | "bot"; text: string };

const getResponse = (input: string, lang: string, lastBotMessage?: string): string => {
  const lower = input.toLowerCase();
  const l = lang as "fr" | "en";
  const t = translations;

  // Helper for contact CTA
  const contactCTA = l === "fr" 
    ? "C'est le moment idéal pour en discuter ! Vous pouvez réserver un appel découverte gratuit sur la page Contact ou nous écrire sur WhatsApp."
    : "It's the perfect time to discuss it! You can book a free discovery call on the Contact page or message us on WhatsApp.";

  // Check for agreement/interest based on previous context
  if (lastBotMessage && (lower.match(/^(oui|yes|ouais|yep|ok|d'accord|bien s(û|u)r|sure|interested|intéressé|absolument|effectivement|exactement)/))) {
     if (lastBotMessage.includes("?") || lastBotMessage.includes("intéresse")) {
        return l === "fr" 
          ? `Excellent ! ${contactCTA}`
          : `Great! ${contactCTA}`;
     }
  }

  // Greetings
  if (lower.match(/^(bonjour|salut|hello|hi|hey|coucou)/)) {
    return t.chatbot.greeting[l];
  }

  // Services (General)
  if (lower.includes("service") || lower.includes("offr") || lower.includes("propos") || lower.includes("offer") || lower.includes("solution")) {
    const categories = t.services.categories.map(c => `• ${c.category[l]}`).join("\n");
    const question = l === "fr" ? "Lequel de ces domaines vous intéresse le plus ?" : "Which of these areas interests you the most?";
    return `${t.services.subtitle[l]}\n\n${categories}\n\n${question}`;
  }

  // Specific Service Categories
  if (lower.includes("conseil") || lower.includes("consulting") || lower.includes("audit") || lower.includes("stratégie") || lower.includes("strategy")) {
     const cat = t.services.categories[0];
     const question = l === "fr" ? "Souhaitez-vous être accompagné pour définir votre stratégie IA ?" : "Would you like support in defining your AI strategy?";
     return `${cat.category[l]} :\n${cat.items.map(i => `- ${i.title[l]}`).join("\n")}\n\n${question}`;
  }
  if (lower.includes("automatisation") || lower.includes("automation") || lower.includes("agent") || lower.includes("workflow") || lower.includes("chatbot") || lower.includes("bot")) {
     const cat = t.services.categories[1];
     const question = l === "fr" ? "Avez-vous un projet d'automatisation ou de chatbot en tête ?" : "Do you have an automation or chatbot project in mind?";
     return `${cat.category[l]} :\n${cat.items.map(i => `- ${i.title[l]}`).join("\n")}\n\n${question}`;
  }
  if (lower.includes("formation") || lower.includes("training") || lower.includes("coach") || lower.includes("accompagnement") || lower.includes("support")) {
     const cat = t.services.categories[2];
     const question = l === "fr" ? "Voulez-vous former vos équipes à l'IA ?" : "Do you want to train your teams on AI?";
     return `${cat.category[l]} :\n${cat.items.map(i => `- ${i.title[l]}`).join("\n")}\n\n${question}`;
  }

  // About / Mission
  if (lower.includes("ancria") || lower.includes("qui") || lower.includes("who") || lower.includes("mission") || lower.includes("vision") || lower.includes("valeur") || lower.includes("value") || lower.includes("about") || lower.includes("propos")) {
    return `${t.about.desc[l]}\n\n${t.about.mission[l]}: ${t.about.missionDesc[l]}`;
  }

  // Methodology
  if (lower.includes("method") || lower.includes("comment") || lower.includes("how") || lower.includes("process") || lower.includes("étape") || lower.includes("step")) {
    return `${t.methodology.subtitle[l]}\n\n${t.methodology.steps.map((s, i) => `${i+1}. ${s.title[l]}`).join("\n")}`;
  }

  // Use Cases
  if (lower.includes("cas") || lower.includes("use") || lower.includes("exemp") || lower.includes("concret")) {
     const question = l === "fr" ? "Un de ces cas d'usage correspond-il à votre besoin ?" : "Does one of these use cases match your needs?";
     return `${t.useCases.subtitle[l]}\n\n${t.useCases.items.slice(0, 3).map(u => `• ${u.title[l]}`).join("\n")}\n\n${question}`;
  }

  // Contact / Pricing
  if (lower.includes("contact") || lower.includes("mail") || lower.includes("email") || lower.includes("phone") || lower.includes("tel") || lower.includes("téléphone") || lower.includes("adresse") || lower.includes("address") || lower.includes("rdv") || lower.includes("rendez-vous") || lower.includes("appointment") || lower.includes("prix") || lower.includes("tarif") || lower.includes("price") || lower.includes("cost") || lower.includes("devis") || lower.includes("quote")) {
     return `${t.contact.subtitle[l]}\n\nEmail: contact@ancria.com\nTel: +237 6 98 36 44 32\n${l === 'fr' ? "Vous pouvez demander un devis ou prendre rendez-vous sur la page Contact." : "You can request a quote or book an appointment on the Contact page."}`;
  }

  // Default
  return l === "fr"
    ? "Je ne suis pas sûr de comprendre. Vous pouvez me poser des questions sur nos services, notre méthodologie, nos cas d'usage ou nous contacter."
    : "I'm not sure I understand. You can ask me about our services, methodology, use cases, or how to contact us.";
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
    
    // Get last bot message for context
    const lastBotMsg = [...messages].reverse().find(m => m.role === "bot")?.text;

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getResponse(userMsg.text, lang, lastBotMsg) }]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105 animate-bounce-subtle"
        aria-label="Chat"
      >
        {open ? <X size={32} /> : <Bot size={32} />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-up" style={{ height: "480px" }}>
          {/* Header */}
          <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-foreground text-primary flex items-center justify-center">
              <Bot size={20} />
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
