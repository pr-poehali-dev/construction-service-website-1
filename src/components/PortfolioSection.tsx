import { useState } from "react";
import Icon from "@/components/ui/icon";

const PROJECT_1 = "https://cdn.poehali.dev/projects/12a0b5c2-0143-4114-ab5a-fa601908639a/files/b9fccb12-8293-4fc9-a7ea-03e57dbcc098.jpg";
const PROJECT_2 = "https://cdn.poehali.dev/projects/12a0b5c2-0143-4114-ab5a-fa601908639a/files/620ac98b-f354-420c-94ca-f1cb02b6332d.jpg";
const PROJECT_3 = "https://cdn.poehali.dev/projects/12a0b5c2-0143-4114-ab5a-fa601908639a/files/11a40f70-201d-4945-a27e-1a429990dd41.jpg";

const services = [
  {
    icon: "Building2",
    title: "Промышленные объекты",
    desc: "Заводы, цеха, производственные комплексы. Полный цикл от фундамента до сдачи.",
  },
  {
    icon: "Layers",
    title: "Гражданское строительство",
    desc: "Офисные центры, складские комплексы, торговые площадки под ключ.",
  },
  {
    icon: "Hammer",
    title: "Металлоконструкции",
    desc: "Проектирование и монтаж несущих конструкций любой сложности и масштаба.",
  },
  {
    icon: "HardHat",
    title: "Генеральный подряд",
    desc: "Берём полную ответственность за объект — от проекта до ввода в эксплуатацию.",
  },
  {
    icon: "Ruler",
    title: "Проектирование",
    desc: "Собственный отдел ГИПов. BIM-проектирование, экспертиза, согласования.",
  },
  {
    icon: "Wrench",
    title: "Реконструкция",
    desc: "Модернизация и расширение действующих производств без остановки работы.",
  },
];

const projects = [
  { img: PROJECT_1, title: "Логистический комплекс «Север»", area: "48 000 м²", year: "2023", tag: "Склад" },
  { img: PROJECT_2, title: "Мост через р. Черная", area: "1 200 пог.м", year: "2024", tag: "Инфраструктура" },
  { img: PROJECT_3, title: "Завод металлоконструкций", area: "22 000 м²", year: "2022", tag: "Производство" },
  { img: PROJECT_1, title: "Торгово-офисный центр «Арсенал»", area: "15 700 м²", year: "2023", tag: "Коммерция" },
  { img: PROJECT_2, title: "Энергетический блок ТЭЦ-7", area: "8 400 м²", year: "2024", tag: "Энергетика" },
  { img: PROJECT_3, title: "Распределительный центр", area: "31 000 м²", year: "2022", tag: "Склад" },
];

const filters = ["Все", "Склад", "Производство", "Инфраструктура", "Энергетика", "Коммерция"];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const filtered = activeFilter === "Все" ? projects : projects.filter(p => p.tag === activeFilter);

  return (
    <>
      {/* SERVICES */}
      <section id="услуги" className="py-24 bg-[#111] relative">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 font-display text-xs tracking-widest">ЧТО МЫ ДЕЛАЕМ</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-16 line-accent">НАШИ УСЛУГИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#111] p-8 hover:bg-[#161616] transition-all group cursor-default hover-lift"
              >
                <div className="w-12 h-12 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:bg-orange-500/10 transition-colors">
                  <Icon name={s.icon} size={22} className="text-orange-500" fallback="Building2" />
                </div>
                <h3 className="font-display text-lg tracking-wide mb-3 group-hover:text-orange-500 transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-body">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-orange-500/60 text-xs font-display tracking-widest group-hover:text-orange-500 transition-colors">
                  ПОДРОБНЕЕ <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="портфолио" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 font-display text-xs tracking-widest">ЗАВЕРШЁННЫЕ ОБЪЕКТЫ</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <h2 className="font-display text-4xl md:text-5xl">ПОРТФОЛИО</h2>

            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`font-display text-xs tracking-widest px-4 py-2 border transition-all ${
                    activeFilter === f
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "border-white/15 text-white/50 hover:border-orange-500/50 hover:text-white/80"
                  }`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
              <div key={i} className="group relative overflow-hidden cursor-pointer hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 bg-orange-500 text-white font-display text-xs tracking-widest px-3 py-1">
                  {p.tag.toUpperCase()}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 border-2 border-white/50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <Icon name="Play" size={20} className="text-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-base tracking-wide mb-1">{p.title}</h3>
                  <div className="flex items-center gap-4 text-white/50 text-xs font-body">
                    <span className="flex items-center gap-1">
                      <Icon name="Maximize" size={11} /> {p.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={11} /> {p.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="border border-white/20 hover:border-orange-500 text-white/70 hover:text-white font-display text-sm tracking-widest px-10 py-4 transition-all">
              ПОКАЗАТЬ ВСЕ ПРОЕКТЫ
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
