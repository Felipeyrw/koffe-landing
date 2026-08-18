import { ArrowRight } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { contact } from "../styles/theme";
import { textStyles } from "../styles/typography";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[#fdfaf5]/90 border-b border-[#1a1714]/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8" animate={false} />
          <span
            className="text-xl tracking-[0.18em] uppercase text-[#1a1714]"
            style={textStyles.display}
          >
            Koffe
          </span>
        </div>
        <Button
          href={contact.whatsappLink}
          external
          variant="dark"
          className="hidden sm:inline-flex text-sm px-5 py-2.5"
        >
          Testar de graça <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
}
