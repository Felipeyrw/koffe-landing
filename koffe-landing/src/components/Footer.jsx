import { Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { contact } from "../styles/theme";
import { textStyles } from "../styles/typography";

export default function Footer() {
  return (
    <footer className="bg-[#fdfaf5] py-12 border-t border-[#1a1714]/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex items-center gap-2">
          <Logo className="w-7 h-7" animate={false} />
          <span
            className="text-lg tracking-[0.18em] uppercase text-[#1a1714]"
            style={textStyles.display}
          >
            Koffe
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm" style={textStyles.body}>
          <a
            href={`tel:+${contact.whatsappNumber}`}
            className="flex items-center gap-2 text-[#5c5349] hover:text-[#1a1714] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#b89b6e]" /> {contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-[#5c5349] hover:text-[#1a1714] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#b89b6e]" /> {contact.email}
          </a>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-[#1a1714]/5 text-xs text-[#8c8580]"
        style={textStyles.body}
      >
        © {new Date().getFullYear()} Koffe. Feito pra quem vive de barbearia.
      </div>
    </footer>
  );
}
