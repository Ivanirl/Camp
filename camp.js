const MenuOpen = document.querySelector(".bubble-open");
const MenuClose = document.querySelector(".bubble-close");
const bubbleNav = document.querySelector("#nav-bubble");

//open and close navigation on mobile view
function OpenMobileNav() {
  bubbleNav.className = `nav-bubbleOpen`;
  MenuOpen.id = `nodisplay`;
}

function CloseMobileNav() {
  bubbleNav.className = `nav-bubbleClose`;
  MenuOpen.id = ``;
}

MenuOpen.addEventListener("click", OpenMobileNav);
MenuClose.addEventListener("click", CloseMobileNav);
//open and close navigation on mobile view

//she need time o
//i need time o