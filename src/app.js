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

let sidebar__link = document.querySelectorAll(".sidebar__link");

for (let i = 0; i < sidebar__link.length; i++) {
  sidebar__link[i].addEventListener("click", function(){
    let data_type = this.parentNode.attributes['data-type'].value;
    if (data_type === "dropdown"){
      let data_dropdown = this.parentNode.attributes['data-dropdown'].value;
      dropdownOpen(this.parentNode, data_dropdown);
    }
  })
}

function dropdownOpen(dropdown_link, level) {

    dropdownsClosedLevelOne(dropdown_link, level);

    dropdown_link.classList.toggle("sidebar__item--open");
    dropdown_link.querySelector(".sidebar__icon-right").classList.toggle("rotate-90");

}
function dropdownsClosedLevelOne(dropdown_link, level) {

  // console.log(dropdown_link);

  let sidebar_item = document.querySelectorAll(".sidebar__item[data-type=dropdown][data-dropdown="+level+"]");

  sidebar_item.forEach((element) => {
    
    if (dropdown_link !== element) {

      element.classList.remove("sidebar__item--open");
      element.querySelector(".sidebar__link > .sidebar__icon-right").classList.remove("rotate-90");

    } 

  });
}
