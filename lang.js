const translations = {
  kz: {
    menu_btn: "Мәзір",
    delivery_btn: "Жеткізу",
    about_btn: "Біз туралы",
    menu_title: "Темекі дәмін таңдаңыз",
    drinks_coming: "Жақында сусындар мен лимонадтар болады!",
    delivery_title: "🚚 Жеткізу",
    delivery_desc1: "Атырау қаласы бойынша 24/7. Тегін.",
    delivery_desc2: "24 сағатқа — <strong>10.000₸</strong> (2 темекі және 6 көмір)",
    delivery_desc3: "48 сағатқа — <strong>14.990₸</strong> (3 темекі және 9 көмір)",
    delivery_desc4: "Қосымша: көмір — 400₸, темекі — 1500₸",
    delivery_address: "📍 Мекенжайды 2ГИС арқылы көрсету",
    delivery_soon: "Жақында сусындар мен шырындар болады!",
    about_title: "Біз туралы",
    about_desc: "Біз — Kalyan Atyrau тобы, тәулік бойы жұмыс істейміз және қала бойынша ең үздік кальян жеткіземіз. Жылдам қызмет, тиімді бағалар және үнемі жеңілдіктер бар. Атырауда үздік болуға тырысамыз!"
  }
};

function changeLanguage() {
  const lang = document.getElementById("language-select").value;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function toggleTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}
