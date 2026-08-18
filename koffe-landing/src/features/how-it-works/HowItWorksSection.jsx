import Badge from "../../components/Badge";
import { textStyles } from "../../styles/typography";

const steps = [
  {
    n: "01",
    title: "Chama no WhatsApp",
    text: "Manda um oi e pede seu acesso gratuito ao teste.",
  },
  {
    n: "02",
    title: "Instala o app",
    text: "A gente libera na hora, sem burocracia.",
  },
  {
    n: "03",
    title: "Começa a usar",
    text: "Cadastra a barbearia e já sente a diferença no primeiro dia.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#fdfaf5] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <Badge className="bg-[#f5f0e6] text-[#8a7454]">Teste gratuito</Badge>
          <h2
            className="mt-4 text-3xl md:text-4xl text-[#1a1714]"
            style={textStyles.display}
          >
            Três passos. Zero custo.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="text-center px-4">
              <span className="text-[#b89b6e] text-sm" style={textStyles.mono}>
                {s.n}
              </span>
              <h3
                className="mt-2 text-lg text-[#1a1714]"
                style={textStyles.display}
              >
                {s.title}
              </h3>
              <p
                className="mt-2 text-sm text-[#5c5349] leading-relaxed"
                style={textStyles.body}
              >
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
