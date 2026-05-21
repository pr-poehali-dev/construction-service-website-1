import Icon from "@/components/ui/icon";

const PROJECT_2 = "https://cdn.poehali.dev/projects/12a0b5c2-0143-4114-ab5a-fa601908639a/files/620ac98b-f354-420c-94ca-f1cb02b6332d.jpg";

const reviews = [
  {
    name: "Андрей Волков",
    role: "Директор, ПАО «МеталлГрупп»",
    text: "Даниил Евгеньевич сдал объект на 2 недели раньше срока. Работали чётко, без лишних слов — просто сделали то, что обещали. Уже заключаем договор на следующий объект.",
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

export default function ContactSection() {
  return (
    <>
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
              <span className="text-white font-medium">Даниил Евгеньевич</span> — один из ведущих генеральных
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
                  { icon: "Phone", label: "Даниил", value: "+7 (910) 174-91-00" },
                  { icon: "Phone", label: "Дмитрий", value: "+7 (999) 005-14-20" },
                  { icon: "Mail", label: "Email", value: "info@daniil.ru" },
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
            <span className="font-display text-sm tracking-widest">ДАНИИЛ ЕВГЕНЬЕВИЧ</span>
          </div>
          <p className="text-white/20 text-xs">© 2006–2024 Даниил Евгеньевич. Все права защищены.</p>
          <div className="flex gap-6">
            {["ВК", "TG", "YT"].map(s => (
              <a key={s} href="#" className="text-white/20 hover:text-orange-500 font-display text-xs tracking-widest transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}