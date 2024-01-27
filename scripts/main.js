const navbar = document.getElementById("navbar");
let scrolled = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.remove("top");
    if(!scrolled) {
      navbar.style.transform = "translateY(-70px)";
      setTimeout(() => {
        navbar.style.transform = "translateY(0)";
        scrolled = true;
      }, 100);
    }
  } else {
    navbar.classList.add("top");
    console.log("Bye")
  }
});
