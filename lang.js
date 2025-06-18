const translations = {
  kz: {
    menu_title: "Темекі дәмін таңдаңыз",
  },
  ru: {
    menu_title: "Выберите вкус табака",
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
