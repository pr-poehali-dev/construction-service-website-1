import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/12a0b5c2-0143-4114-ab5a-fa601908639a/files/11a40f70-201d-4945-a27e-1a429990dd41.jpg";

const stats = [
  { value: "18+", label: "лет на рынке" },
  { value: "340", label: "объектов сдано" },
  { value: "2.1 млн", label: "м² построено" },
  { value: "0", label: "срывов сроков" },
];

export default function HeroSection() {
  return (
    <section id="главная" className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Строительство"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-[#0D0D0D]/20" />
        <div className="absolute inset-0 grid-lines opacity-30" />
      </div>

      <div className="absolute top-0 right-0 w-1 h-full bg-orange-500/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 font-display text-xs tracking-widest">ПРОМЫШЛЕННОЕ СТРОИТЕЛЬСТВО</span>
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-8 animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            МЫ СТРОИМ<br />
            <span className="text-orange-500">НАДЁЖНО.</span><br />
            В СРОК.
          </h1>

          <p
            className="text-white/60 text-lg md:text-xl max-w-xl mb-10 font-body font-light leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            18 лет. 340 объектов. Промышленные, коммерческие и инфраструктурные проекты
            любой сложности — от проекта до ключей.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            <a
              href="#портфолио"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-display text-sm tracking-widest px-8 py-4 transition-all hover:gap-3"
            >
              СМОТРЕТЬ ПРОЕКТЫ
              <Icon name="ArrowRight" size={16} />
            </a>
            <a
              href="#контакты"
              className="flex items-center gap-2 border border-white/20 hover:border-orange-500 text-white font-display text-sm tracking-widest px-8 py-4 transition-all"
            >
              ПОЛУЧИТЬ КП
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#111]/80 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <div key={i} className={`px-6 py-2 ${i < 3 ? "border-r border-white/10" : ""}`}>
              <div className="font-display text-2xl md:text-3xl text-orange-500">{s.value}</div>
              <div className="text-xs text-white/40 tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
