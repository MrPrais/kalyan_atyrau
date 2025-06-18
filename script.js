function toggleTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.remove("active"));

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  toggleTab("menu");
});
