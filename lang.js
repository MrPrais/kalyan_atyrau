const translations = {
  ru: {
    menu_title: "Выберите вкус табака"
  },
  kz: {
    menu_title: "Темекі дәмін таңдаңыз"
  }
};

function changeLanguage() {
  const lang = document.getElementById("language-select").value;
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}

function toggleTab(tabId) {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}
