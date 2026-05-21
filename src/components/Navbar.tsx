import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = ["Главная", "Услуги", "Портфолио", "О компании", "Отзывы", "Контакты"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 flex items-center justify-center">
            <Icon name="Triangle" size={16} className="text-white fill-white" />
          </div>
          <span className="font-display text-xl tracking-widest text-white">СТРОЙПРОМ</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-display tracking-widest text-white/60 hover:text-orange-500 transition-colors"
            >
              {link.toUpperCase()}
            </a>
          ))}
        </nav>

        <a
          href="#контакты"
          className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-display tracking-widest px-5 py-2.5 transition-colors"
        >
          СВЯЗАТЬСЯ
          <Icon name="ArrowRight" size={14} />
        </a>

        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-sm tracking-widest text-white/70 hover:text-orange-500 transition-colors"
            >
              {link.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
