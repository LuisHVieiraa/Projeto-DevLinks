function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  //se tiver a tag img

  // pegar a tag img
  // se tiver light mode, adicionar a imagem light
  // se tiver dark mode, adicionar a imagem dark
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    document;
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("class", "logo light-mode");
  } else {
    document;
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("class", "logo dark-mode");
  }
}
