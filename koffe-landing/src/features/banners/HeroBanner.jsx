import { ArrowRight, Coffee } from "lucide-react";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { contact } from "../../styles/theme";
import { textStyles } from "../../styles/typography";

export default function HeroBanner() {
  return (
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
            style={textStyles.display}
          >
            A vida do barbeiro,
            <br />
            mais simples.
          </h1>
          <p
            className="mt-6 text-base md:text-lg text-[#5c5349] max-w-md leading-relaxed"
            style={textStyles.body}
          >
            Agenda, financeiro e equipe num app só, feito pra sair do caminho
            e deixar você cuidar do que importa: o cliente na cadeira. E
            continua funcionando mesmo sem internet.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={contact.whatsappLink} external variant="primary">
              Quero testar <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="#beneficios" variant="outline">
              Ver como funciona
            </Button>
          </div>
          <p className="mt-4 text-xs text-[#8c8580]" style={textStyles.body}>
            Sem cartão. Sem contrato. Sem letra miúda.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-[0_20px_60px_-15px_rgba(26,23,20,0.15)] flex items-center justify-center">
            <Logo className="w-40 h-40 md:w-48 md:h-48" />
          </div>
        </div>
      </div>
    </section>
  );
}
