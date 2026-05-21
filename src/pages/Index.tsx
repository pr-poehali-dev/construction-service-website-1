import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/12a0b5c2-0143-4114-ab5a-fa601908639a/files/11a40f70-201d-4945-a27e-1a429990dd41.jpg";
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
  {
    img: PROJECT_1,
    title: "Логистический комплекс «Север»",
    area: "48 000 м²",
    year: "2023",
    tag: "Склад",
  },
  {
    img: PROJECT_2,
    title: "Мост через р. Черная",
    area: "1 200 пог.м",
    year: "2024",
    tag: "Инфраструктура",
  },
  {
    img: PROJECT_3,
    title: "Завод металлоконструкций",
    area: "22 000 м²",
    year: "2022",
    tag: "Производство",
  },
  {
    img: PROJECT_1,
    title: "Торгово-офисный центр «Арсенал»",
    area: "15 700 м²",
    year: "2023",
    tag: "Коммерция",
  },
  {
    img: PROJECT_2,
    title: "Энергетический блок ТЭЦ-7",
    area: "8 400 м²",
    year: "2024",
    tag: "Энергетика",
  },
  {
    img: PROJECT_3,
    title: "Распределительный центр",
    area: "31 000 м²",
    year: "2022",
    tag: "Склад",
  },
];

const reviews = [
  {
    name: "Андрей Волков",
    role: "Директор, ПАО «МеталлГрупп»",
    text: "СтройПром сдал объект на 2 недели раньше срока. Работали чётко, без лишних слов — просто сделали то, что обещали. Уже заключаем договор на следующий объект.",
    stars: 5,
  },
  {
    name: "Марина Соколова",
    role: "ГД, АО «Логопорт»",
    text: "Построили склад 48 000 м² за 11 месяцев. Это рекорд для нашего региона. Команда профессиональная, коммуникация выстроена идеально.",
    stars: 5,
  },
  {
    name: "Игорь Петров",
    role: "Технический директор, ТЭЦ-7",
    text: "Сложнейший объект с жёсткими требованиями по безопасности. Справились безупречно. Порекомендуем коллегам из отрасли.",
    stars: 5,
  },
];

const stats = [
  { value: "18+", label: "лет на рынке" },
  { value: "340", label: "объектов сдано" },
  { value: "2.1 млн", label: "м² построено" },
  { value: "0", label: "срывов сроков" },
];

const navLinks = ["Главная", "Услуги", "Портфолио", "О компании", "Отзывы", "Контакты"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Все");

  const filters = ["Все", "Склад", "Производство", "Инфраструктура", "Энергетика", "Коммерция"];
  const filtered = activeFilter === "Все" ? projects : projects.filter(p => p.tag === activeFilter);

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen font-body overflow-x-hidden">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 flex items-center justify-center">
              <Icon name="Triangle" size={16} className="text-white fill-white" />
            </div>
            <span className="font-display text-xl tracking-widest text-white">СТРОЙПРОМ</span>
          </div>

          {/* Desktop nav */}
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

        {/* Mobile menu */}
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

      {/* HERO */}
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

        {/* Diagonal accent */}
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

        {/* Stats bar */}
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

            {/* Filters */}
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

                {/* Tag */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white font-display text-xs tracking-widest px-3 py-1">
                  {p.tag.toUpperCase()}
                </div>

                {/* Play button for video placeholder */}
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

      {/* ABOUT */}
      <section id="о компании" className="py-24 bg-[#111] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
          <img src={PROJECT_2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#111] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-500 font-display text-xs tracking-widest">КТО МЫ</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">О КОМПАНИИ</h2>

            <p className="text-white/60 text-lg leading-relaxed mb-6">
              <span className="text-white font-medium">СтройПром</span> — один из ведущих генеральных
              подрядчиков в промышленном строительстве. Основаны в 2006 году, за это время реализовали
              более 340 объектов суммарной площадью свыше 2,1 миллиона квадратных метров.
            </p>
            <p className="text-white/50 leading-relaxed mb-10">
              Собственный парк техники, штат 1 200+ специалистов и отдел проектирования позволяют нам
              брать полную ответственность за объект — и гарантировать результат без посредников.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: "Users", text: "1 200+ специалистов в штате" },
                { icon: "Truck", text: "Собственный парк спецтехники" },
                { icon: "FileCheck", text: "Все необходимые лицензии и допуски СРО" },
                { icon: "Shield", text: "Гарантия на все виды работ 5 лет" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} size={14} className="text-orange-500" fallback="Check" />
                  </div>
                  <span className="text-white/60 text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#контакты"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-display text-sm tracking-widest px-8 py-4 transition-all hover:gap-3"
            >
              ОБСУДИТЬ ПРОЕКТ
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="отзывы" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 font-display text-xs tracking-widest">ЧТО ГОВОРЯТ КЛИЕНТЫ</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-14">ОТЗЫВЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#111] border border-white/5 p-8 hover:border-orange-500/20 transition-all hover-lift">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">«{r.text}»</p>
                <div className="border-t border-white/5 pt-5">
                  <div className="font-display text-sm tracking-wide">{r.name}</div>
                  <div className="text-white/40 text-xs mt-1">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="контакты" className="py-24 bg-[#111] relative">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-orange-500" />
                <span className="text-orange-500 font-display text-xs tracking-widest">СВЯЖИТЕСЬ С НАМИ</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">КОНТАКТЫ</h2>
              <p className="text-white/50 mb-10 leading-relaxed">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут
                в рабочее время. Бесплатно оценим объём и составим коммерческое предложение.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-01-23" },
                  { icon: "Mail", label: "Email", value: "info@stroyprom.ru" },
                  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Промышленная, 14" },
                  { icon: "Clock", label: "Часы работы", value: "Пн–Пт: 09:00 – 18:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={16} className="text-orange-500" fallback="Info" />
                    </div>
                    <div>
                      <div className="text-white/30 text-xs font-display tracking-widest mb-0.5">{c.label.toUpperCase()}</div>
                      <div className="text-white font-body">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#0D0D0D] border border-white/5 p-8">
              <h3 className="font-display text-xl tracking-wide mb-6">ОСТАВИТЬ ЗАЯВКУ</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="text-white/40 text-xs font-display tracking-widest block mb-2">ИМЯ</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full bg-[#111] border border-white/10 focus:border-orange-500 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors font-body"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-display tracking-widest block mb-2">ТЕЛЕФОН</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#111] border border-white/10 focus:border-orange-500 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors font-body"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs font-display tracking-widest block mb-2">ОПИСАНИЕ ОБЪЕКТА</label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full bg-[#111] border border-white/10 focus:border-orange-500 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors font-body resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-display text-sm tracking-widest py-4 transition-all flex items-center justify-center gap-2"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                  <Icon name="ArrowRight" size={16} />
                </button>
                <p className="text-white/20 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 flex items-center justify-center">
              <Icon name="Triangle" size={11} className="text-white fill-white" />
            </div>
            <span className="font-display text-sm tracking-widest">СТРОЙПРОМ</span>
          </div>
          <p className="text-white/20 text-xs">© 2006–2024 СтройПром. Все права защищены.</p>
          <div className="flex gap-6">
            {["ВК", "TG", "YT"].map(s => (
              <a key={s} href="#" className="text-white/20 hover:text-orange-500 font-display text-xs tracking-widest transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}