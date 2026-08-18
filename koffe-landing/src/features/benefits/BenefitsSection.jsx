import { WifiOff, CalendarDays, Wallet, Users, KeyRound } from "lucide-react";
import Badge from "../../components/Badge";
import { textStyles } from "../../styles/typography";

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

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <Badge className="bg-[#f5f0e6] text-[#8a7454]">Por que o Koffe</Badge>
          <h2
            className="mt-4 text-3xl md:text-4xl text-[#1a1714]"
            style={textStyles.display}
          >
            Menos tela, mais cliente.
          </h2>
          <p className="mt-3 text-[#5c5349]" style={textStyles.body}>
            Cada detalhe pensado pra tirar peso das costas do barbeiro, não
            pra somar mais uma tarefa no dia.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border border-[#1a1714]/5 ${
                i === 0
                  ? "bg-[#1a1714] sm:col-span-2 lg:col-span-1"
                  : "bg-[#fdfaf5]"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  i === 0 ? "bg-[#b89b6e]" : "bg-[#1a1714]"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    i === 0 ? "text-[#1a1714]" : "text-[#b89b6e]"
                  }`}
                />
              </div>
              <h3
                className={`mt-4 text-lg ${
                  i === 0 ? "text-[#ede8e0]" : "text-[#1a1714]"
                }`}
                style={textStyles.display}
              >
                {title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  i === 0 ? "text-[#b8b0a6]" : "text-[#5c5349]"
                }`}
                style={textStyles.body}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
