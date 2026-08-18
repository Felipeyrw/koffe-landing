import { Coffee, MessageCircle, Check } from "lucide-react";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import { contact } from "../../styles/theme";
import { textStyles } from "../../styles/typography";

export default function CtaBanner() {
  return (
    <section className="bg-[#1a1714] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Badge className="bg-[#b89b6e] text-[#1a1714]">
          <Coffee className="w-3.5 h-3.5" /> Simples, rápido e fácil
        </Badge>
        <h2
          className="mt-5 text-3xl md:text-4xl text-[#ede8e0]"
          style={textStyles.display}
        >
          Sua barbearia mais leve, hoje.
        </h2>
        <p className="mt-4 text-[#8c8580]" style={textStyles.body}>
          O período de teste é 100% gratuito.
        </p>
        <Button
          href={contact.whatsappLink}
          external
          variant="primary"
          className="mt-8"
        >
          <MessageCircle className="w-4 h-4" /> Chamar no WhatsApp
        </Button>
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#8c8580]"
          style={textStyles.body}
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
}
