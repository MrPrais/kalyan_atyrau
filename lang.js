const translations = {
  kz: {
    menu: "Мәзір",
    delivery: "Жеткізу",
    about: "Біз туралы",
    menu_title: "Табак дәмін таңдаңыз",
    flavor1: "🍌 Банан муссы",
    flavor2: "🍿 Тәтті попкорн",
    flavor3: "🌰 Орман жаңғағы",
    flavor4: "🍏 Алма штруделі",
    flavor5: "🍊 Апельсин бәліші",
    flavor6: "🥥❄ Мұзды кокос",
    juice_note: "Жақында шырындар мен лимонадтар болады!",
    delivery_title: "🚚 Жеткізу",
    delivery_desc1: "📍 Атырау бойынша 24/7 — Тегін!",
    delivery_24h: "24 сағатқа: 10.000₸ — 2 табак, 6 көмір",
    delivery_48h: "48 сағатқа: 14.990₸ — 3 табак, 9 көмір",
    delivery_extra: "➕ Қосымша: көмір — 400₸, табак — 1500₸",
    delivery_map: "📍 Мекенжайды 2ГИС арқылы көрсетіңіз",
    delivery_soon: "Жақында сусындар мен шырындар болады!",
    about_title: "Біз туралы",
    about_text: "Біз — Kalyan Atyrau командасымыз. Біз тәулік бойы жұмыс істейміз және қала бойынша ең жақсы кальян жеткіземіз. Жылдам қызмет, қолжетімді баға және тұрақты акциялар. Атырауда ең үздік болуға тырысамыз!",
    footer: "© 2025 Kalyan Atyrau — Ләззат үшін жасалған"
  },
  ru: {
    menu: "Меню",
    delivery: "Доставка",
    about: "О нас",
    menu_title: "Выберите вкус табака",
    flavor1: "🍌 Банановый Мусс",
    flavor2: "🍿 Сладкий Попкорн",
    flavor3: "🌰 Лесной Орех",
    flavor4: "🍏 Яблочный Штрудель",
    flavor5: "🍊 Апельсиновый Пирог",
    flavor6: "🥥❄ Ледяной Кокос",
    juice_note: "Скоро будут соки и лимонады!",
    delivery_title: "🚚 Доставка",
    delivery_desc1: "📍 По Атырау 24/7 — Бесплатно!",
    delivery_24h: "На 24 часа: 10.000₸ — 2 табака, 6 углей",
    delivery_48h: "На 48 часов: 14.990₸ — 3 табака, 9 углей",
    delivery_extra: "➕ Дополнительно: уголь — 400₸, табак — 1500₸",
    delivery_map: "📍 Указать адрес через 2ГИС",
    delivery_soon: "Скоро будут напитки и соки!",
    about_title: "О нас",
    about_text: "Мы — команда Kalyan Atyrau. Работаем круглосуточно и доставляем лучший кальян по городу. Быстрый сервис, приятные цены и постоянные акции. Стремимся стать лучшими в Атырау!",
    footer: "© 2025 Kalyan Atyrau — Сделано для кайфа"
  }
};

function changeLanguage() {
  const lang = document.getElementById("language-select").value;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
