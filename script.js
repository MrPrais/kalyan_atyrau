function toggleSection(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}
function toggleLanguage() {
  alert("Смена языка скоро появится!");
}
function openAbout() {
  document.getElementById("aboutModal").style.display = "block";
}
function closeAbout() {
  document.getElementById("aboutModal").style.display = "none";
}
