let sidebar = document.getElementById("sidebar");
let sidebar_button = document.getElementById("sidebar-button");
let overlay = document.getElementById("overlay");


let sidebar_dropdown = document.querySelectorAll(".sidebar .sidebar__item[data-type=dropdown]");

sidebar_dropdown.forEach(dropdown => {
  dropdown.addEventListener("click", function(e){

    this.querySelector(".sidebar__icon-right").classList.add('rotate-90');

  })
});

// sidebar_dropdown.addEventListener("click", function(e){
//   console.log(this.getAttribute('data-type'));
// })





if (window.innerWidth >= 1020 ) {
  sidebar.classList.add("sidebar--relative-collapsed");
}
overlay.addEventListener("click", function(e) {
  sidebar.classList.remove("sidebar--absolute");
  overlay.classList.remove("d-block");
});

window.addEventListener("resize", function(e) {
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

sidebar_button.addEventListener("click", function(e) {
  let window_width = window.innerWidth;

  if (window_width < 1020) {
    sidebar.classList.remove("sidebar--relative-collapsed");
    sidebar.classList.remove("sidebar--relative-icon");

    sidebar.classList.add("sidebar--absolute");
    overlay.classList.add("d-block");

    sidebar_view = false;
  } else if (window_width >= 1020) {

    if ( sidebar.className.match("sidebar--relative-collapsed") ) {
      sidebar.className = "sidebar sidebar--relative-icon";
    } else {
      sidebar.className = "sidebar sidebar--relative-collapsed";
    }


    // sidebar.classList.remove("sidebar--absolute");
    // sidebar.classList.toggle("sidebar--relative-collapsed");
    // sidebar.classList.toggle("sidebar--relative-icon");
  }
});

