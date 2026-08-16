import React from "react";
import {
  WifiOff,
  CalendarDays,
  Wallet,
  Users,
  KeyRound,
  ArrowRight,
  MessageCircle,
  Mail,
  Phone,
  Check,
  Coffee,
} from "lucide-react";

const WHATSAPP_NUMBER = "5513991747596";
const WHATSAPP_MSG = encodeURIComponent(
  "Oi! Vi a página do Koffe e quero testar o app de graça."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const EMAIL = "santos.one013@gmail.com";
const PHONE_DISPLAY = "(13) 99174-7596";

const CupComb = ({ className = "", animate = true }) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 1, 2, 3, 4].map((i) => (
      <line
        key={i}
        x1={30 + i * 15}
        y1="38"
        x2={30 + i * 15}
        y2="14"
        stroke="#b89b6e"
        strokeWidth="4"
        strokeLinecap="round"
        className={animate ? "koffe-steam" : ""}
        style={{ animationDelay: `${i * 0.18}s` }}
      />
    ))}
    <path
      d="M20 42h64v34c0 14-14 24-32 24s-32-10-32-24V42z"
      fill="#fffdfa"
      stroke="#1a1714"
      strokeWidth="4"
    />
    <path
      d="M84 52c14 0 14 26 0 26"
      stroke="#1a1714"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    <ellipse cx="52" cy="102" rx="34" ry="5" fill="#8c8580" opacity="0.25" />
  </svg>
);

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase rounded-full px-3.5 py-1.5 ${className}`}
    style={{ fontFamily: "'JetBrains Mono', monospace" }}
  >
    {children}
  </span>
);

const NavBar = () => (
  <header className="sticky top-0 z-30 backdrop-blur bg-[#fdfaf5]/90 border-b border-[#1a1714]/5">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <CupComb className="w-8 h-8" animate={false} />
        <span
          className="text-xl tracking-[0.18em] uppercase text-[#1a1714]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          Koffe
        </span>
      </div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#1a1714] text-[#ede8e0] px-5 py-2.5 text-sm hover:bg-[#2a241f] transition-colors"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Testar de graça <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-[#fdfaf5]">
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#b89b6e]/10 blur-3xl" />
    <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-[#8c8580]/10 blur-3xl" />
    <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <Badge className="bg-[#1a1714] text-[#ede8e0]">
          <Coffee className="w-3.5 h-3.5" /> Teste 100% gratuito
        </Badge>
        <h1
          className="mt-6 text-4xl md:text-[3.4rem] leading-[1.08] text-[#1a1714]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          A vida do barbeiro,
          <br />
          mais simples.
        </h1>
        <p
          className="mt-6 text-base md:text-lg text-[#5c5349] max-w-md leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Agenda, financeiro e equipe num app só, feito pra sair do caminho e
          deixar você cuidar do que importa: o cliente na cadeira. E continua
          funcionando mesmo sem internet.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b89b6e] text-[#1a1714] px-6 py-3.5 font-medium hover:bg-[#c8a96e] transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Quero testar grátis <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#beneficios"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1a1714]/15 px-6 py-3.5 text-[#1a1714] hover:border-[#1a1714]/40 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ver como funciona
          </a>
        </div>
        <p
          className="mt-4 text-xs text-[#8c8580]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Sem cartão. Sem contrato. Sem letra miúda.
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-[0_20px_60px_-15px_rgba(26,23,20,0.15)] flex items-center justify-center">
          <CupComb className="w-40 h-40 md:w-48 md:h-48" />
        </div>
      </div>
    </div>
  </section>
);

const benefits = [
  {
    icon: WifiOff,
    title: "Funciona sem internet",
    text: "Wi-Fi caiu, sinal fraco, área sem cobertura — não importa. O Koffe continua atendendo e sincroniza sozinho depois.",
  },
  {
    icon: CalendarDays,
    title: "Agenda que não te dá trabalho",
    text: "Dia, semana ou mês, tudo organizado sem você precisar pensar duas vezes.",
  },
  {
    icon: Wallet,
    title: "Financeiro sem planilha",
    text: "Entradas, saídas e comissão calculadas na hora. Fecha o dia em segundos.",
  },
  {
    icon: Users,
    title: "Equipe em ordem",
    text: "Cada barbeiro com seu próprio acesso, sem confusão de quem fez o quê.",
  },
  {
    icon: KeyRound,
    title: "Simples de confiar",
    text: "Login individual por código, nada de senha compartilhada no grupo do WhatsApp.",
  },
];

const Benefits = () => (
  <section id="beneficios" className="bg-white py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-xl">
        <Badge className="bg-[#f5f0e6] text-[#8a7454]">Por que o Koffe</Badge>
        <h2
          className="mt-4 text-3xl md:text-4xl text-[#1a1714]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          Menos tela, mais cliente.
        </h2>
        <p
          className="mt-3 text-[#5c5349]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Cada detalhe pensado pra tirar peso das costas do barbeiro, não pra
          somar mais uma tarefa no dia.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className={`rounded-2xl p-6 border border-[#1a1714]/5 ${
              i === 0 ? "bg-[#1a1714] sm:col-span-2 lg:col-span-1" : "bg-[#fdfaf5]"
            }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                i === 0 ? "bg-[#b89b6e]" : "bg-[#1a1714]"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${i === 0 ? "text-[#1a1714]" : "text-[#b89b6e]"}`}
              />
            </div>
            <h3
              className={`mt-4 text-lg ${i === 0 ? "text-[#ede8e0]" : "text-[#1a1714]"}`}
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              {title}
            </h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                i === 0 ? "text-[#b8b0a6]" : "text-[#5c5349]"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { n: "01", title: "Chama no WhatsApp", text: "Manda um oi e pede seu acesso gratuito ao teste." },
  { n: "02", title: "Instala o app", text: "A gente libera na hora, sem burocracia." },
  { n: "03", title: "Começa a usar", text: "Cadastra a barbearia e já sente a diferença no primeiro dia." },
];

const HowItWorks = () => (
  <section className="bg-[#fdfaf5] py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-xl mx-auto text-center">
        <Badge className="bg-[#f5f0e6] text-[#8a7454]">Teste gratuito</Badge>
        <h2
          className="mt-4 text-3xl md:text-4xl text-[#1a1714]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          Três passos. Zero custo.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.n} className="text-center px-4">
            <span
              className="text-[#b89b6e] text-sm"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {s.n}
            </span>
            <h3
              className="mt-2 text-lg text-[#1a1714]"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              {s.title}
            </h3>
            <p
              className="mt-2 text-sm text-[#5c5349] leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="bg-[#1a1714] py-16 md:py-24">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <Badge className="bg-[#b89b6e] text-[#1a1714]">
        <Coffee className="w-3.5 h-3.5" /> Gratuito, sem pegadinha
      </Badge>
      <h2
        className="mt-5 text-3xl md:text-4xl text-[#ede8e0]"
        style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
      >
        Sua barbearia mais leve, hoje.
      </h2>
      <p
        className="mt-4 text-[#8c8580]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        O período de teste é 100% gratuito. Sem cartão, sem compromisso.
      </p>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#b89b6e] text-[#1a1714] px-7 py-3.5 font-medium hover:bg-[#c8a96e] transition-colors"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <MessageCircle className="w-4 h-4" /> Chamar no WhatsApp
      </a>
      <div
        className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#8c8580]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-[#b89b6e]" /> Sem cartão
        </span>
        <span className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-[#b89b6e]" /> Sem contrato
        </span>
        <span className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-[#b89b6e]" /> Suporte direto
        </span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#fdfaf5] py-12 border-t border-[#1a1714]/5">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div className="flex items-center gap-2">
        <CupComb className="w-7 h-7" animate={false} />
        <span
          className="text-lg tracking-[0.18em] uppercase text-[#1a1714]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          Koffe
        </span>
      </div>
      <div
        className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <a
          href={`tel:+${WHATSAPP_NUMBER}`}
          className="flex items-center gap-2 text-[#5c5349] hover:text-[#1a1714] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#b89b6e]" /> {PHONE_DISPLAY}
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-2 text-[#5c5349] hover:text-[#1a1714] transition-colors"
        >
          <Mail className="w-4 h-4 text-[#b89b6e]" /> {EMAIL}
        </a>
      </div>
    </div>
    <div
      className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-[#1a1714]/5 text-xs text-[#8c8580]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      © {new Date().getFullYear()} Koffe. Feito pra quem vive de barbearia.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfaf5]">
      <NavBar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
