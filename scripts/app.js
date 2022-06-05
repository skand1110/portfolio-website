
let navItem = document.getElementById('navbarCollapse');
navItem.addEventListener('click', () => {
  if (window.innerWidth < lgWindow) {
    document.getElementById('navbarButton').click();
  }
});