const translations = {
  kz: {
    menu_title: "Темекі дәмін таңдаңыз",
    delivery_title: "🚚 Жеткізу",
    delivery_text1: "Атырау бойынша тәулік бойы — тегін!",
    delivery_24h: "24 сағатқа: 10.000₸ — 2 темекі + 6 көмір",
    delivery_48h: "48 сағатқа: 14.990₸ — 3 темекі + 9 көмір",
    delivery_extra: "Қосымша: көмір — 400₸, темекі — 1500₸",
    delivery_map: "📍 2ГИС арқылы мекенжайды көрсетіңіз",
    delivery_soon: "Жақында сусындар мен шырындар болады!",
    about_title: "Біз туралы",
    about_text: "Біз — Kalyan Atyrau командасы. Тәулік бойы жұмыс істейміз және қаланың ең дәмді кальяндарын жеткіземіз. Жылдам қызмет, жағымды бағалар және тұрақты акциялар ұсынамыз. Атырауда үздік болуға тырысамыз!"
  },
  ru: {
    menu_title: "Выберите вкус табака",
    delivery_title: "🚚 Доставка",
    delivery_text1: "По Атырау 24/7. Бесплатно.",
    delivery_24h: "На 24 часа: 10.000₸ — 2 табака + 6 углей",
    delivery_48h: "На 48 часов: 14.990₸ — 3 табака + 9 углей",
    delivery_extra: "Дополнительно: уголь — 400₸, табак — 1500₸",
    delivery_map: "📍 Указать адрес через 2ГИС",
    delivery_soon: "Скоро будут напитки и соки!",
    about_title: "О нас",
    about_text: "Мы — команда Kalyan Atyrau, работаем круглосуточно и доставляем лучший кальян по городу. У нас быстрый сервис, приятные цены и постоянные акции. Стремимся стать самыми лучшими в Атырау!"
  }
};

function changeLanguage() {
  const selectedLang = document.getElementById("language-select").value;
  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[selectedLang] && translations[selectedLang][key]) {
      el.textContent = translations[selectedLang][key];
    }
  });
}
