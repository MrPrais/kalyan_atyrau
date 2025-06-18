
function toggleTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) selectedTab.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  toggleTab('menu');
});
