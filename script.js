
function toggleSection(id) {
  const section = document.getElementById(id);
  if (section.classList.contains("hidden")) {
    section.classList.remove("hidden");
  } else {
    section.classList.add("hidden");
  }
}

function toggleLanguage() {
  alert("Языковая поддержка скоро будет обновлена.");
}

function openAbout() {
  document.getElementById("aboutModal").style.display = "block";
}

function closeAbout() {
  document.getElementById("aboutModal").style.display = "none";
}
