function changeLanguage() {
  const lang = document.getElementById("language-select").value;
  const elements = document.querySelectorAll("[data-lang]");

  const translations = {
    menu_title: {
      ru: "Выберите вкус табака",
      kz: "Темекі дәмін таңдаңыз"
    }
  };

  elements.forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[key] && translations[key][lang]) {
      el.innerText = translations[key][lang];
    }
  });
}
