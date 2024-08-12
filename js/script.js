const intro = document.querySelector(".intro");
const TextLogo = document.querySelectorAll(".logo");

window.addEventListener("load",()=> {
  
    TextLogo.forEach((Logo, inx) => {
      setTimeout(() => {
        Logo.classList.add("active");
      }, (inx + 1) * 400);
    });


  setTimeout(() => {
    TextLogo.forEach((Logo, inx) => {
      setTimeout(() => {
        Logo.classList.remove("active");
        Logo.classList.add("fade");
      }, (inx + 1) * 50);
    });
  }, 2000);

  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2300);
});
