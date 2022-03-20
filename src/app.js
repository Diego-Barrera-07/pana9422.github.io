let sidebar = document.getElementById("sidebar");
let sidebar_button = document.getElementById("sidebar-button");
let overlay = document.getElementById("overlay");
if (window.innerWidth >= 1020) {
  sidebar.classList.add("sidebar--relative-collapsed");
}
overlay.addEventListener("click", function (e) {
  sidebar.classList.remove("sidebar--absolute");
  overlay.classList.remove("d-block");
});
window.addEventListener("resize", function (e) {
  let window_width = window.innerWidth;

  if (window_width < 1020) {
    sidebar.classList.remove("sidebar--relative-collapsed");
    sidebar.classList.remove("sidebar--relative-icon");
    sidebar.classList.remove("sidebar--absolute");
    overlay.classList.remove("d-block");
  } else if (window_width >= 1020) {
    sidebar.classList.remove("sidebar--absolute");
    overlay.classList.remove("d-block");
    sidebar.classList.add("sidebar--relative-collapsed");
    sidebar.classList.remove("sidebar--relative-icon");
  }
});
sidebar_button.addEventListener("click", function (e) {
  let window_width = window.innerWidth;

  if (window_width < 1020) {
    sidebar.classList.remove("sidebar--relative-collapsed");
    sidebar.classList.remove("sidebar--relative-icon");

    sidebar.classList.add("sidebar--absolute");
    overlay.classList.add("d-block");

    sidebar_view = false;
  } else if (window_width >= 1020) {
    if (sidebar.className.match("sidebar--relative-collapsed")) {
      sidebar.className = "sidebar sidebar--relative-icon";
    } else {
      sidebar.className = "sidebar sidebar--relative-collapsed";
    }
  }
});




let sidebar_dropdowns_links = document.querySelectorAll(".sidebar__item[data-type=dropdown] > .sidebar__link");
sidebar_dropdowns_links.forEach( (dropdown_link) => dropdownOpen(dropdown_link) );

function dropdownOpen( dropdown_link ) {

  dropdown_link.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownsClosed(dropdown_link);
    
    dropdown_link.parentNode.classList.toggle("sidebar__item--open");
    dropdown_link.querySelector(".sidebar__icon-right").classList.toggle("rotate-90");

  });
}
function dropdownsClosed( dropdown_link ){
  let sidebar_item = document.querySelectorAll(".sidebar__item[data-type=dropdown]");

  sidebar_item.forEach(element => {
    if(dropdown_link.parentNode !== element){
      element.classList.remove("sidebar__item--open");
      element.querySelector(".sidebar__link > .sidebar__icon-right").classList.remove("rotate-90");
    }
  });
}
