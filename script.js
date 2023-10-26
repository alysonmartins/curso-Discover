function toggleMode() {
  const html = document.documentElement
  //pegar a tag img
  const imgProfile = document.querySelector(".profile-img")

  html.classList.toggle("light")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode = image light
    imgProfile.setAttribute("src", "./assets/avatar-light.png")
    imgProfile.setAttribute("alt", "Foto Perfil fundo Branco")
  } else {
    //se tiver sem light mode = image normal
    imgProfile.setAttribute("src", "./assets/avatar.png")
    imgProfile.setAttribute("alt", "Foto Perfil fundo escuro")
  }
}
