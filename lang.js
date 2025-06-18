
const translations = {
  kz: {
    menu_title: "Темекі дәмін таңдаңыз",
    delivery_title: "🚚 Жеткізу",
    about_title: "Біз туралы",
    about_text: "Біз — Kalyan Atyrau тобы, тәулік бойы жұмыс істейміз және қаланың ең үздік кальяндарын жеткіземіз. Жылдам қызмет, жағымды бағалар және үнемі акциялар ұсынамыз!"
  },
  ru: {
    menu_title: "Выберите вкус табака",
    delivery_title: "🚚 Доставка",
    about_title: "О нас",
    about_text: "Мы — команда Kalyan Atyrau, работаем круглосуточно и доставляем лучший кальян по городу. У нас быстрый сервис, приятные цены и постоянные акции. Стремимся стать самыми лучшими в Атырау!"
  }
};

function changeLanguage() {
  const lang = document.getElementById('language-select').value;
  document.querySelector('[data-lang="menu_title"]').textContent = translations[lang].menu_title;
  document.querySelector('#delivery h2').textContent = translations[lang].delivery_title;
  document.querySelector('#about h2').textContent = translations[lang].about_title;
  document.querySelector('#about p').textContent = translations[lang].about_text;
}
