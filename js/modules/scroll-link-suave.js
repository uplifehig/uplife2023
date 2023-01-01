export default function initScrollLinkSuave() {
  const links = document.querySelectorAll('[data-menu="list"] a');
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  links.forEach((link) => {
    link.addEventListener("click", linkClicado);
    link.addEventListener("click", linkClicadoFechar);
  });
  function linkClicado(event) {
    if (event.target.getAttribute("href").includes("#")) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const elemento = document.querySelector(href);
      elemento.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  function linkClicadoFechar(event) {
    if (event.target.getAttribute("href").includes("#")) {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    }
  }
}
