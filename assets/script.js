const buttons = document.querySelector(".btns_Direcao");
const btnsobreMim = document.querySelector(".btn_SobreMim");
const btnprojetos = document.querySelector(".btn_Projetos");
const btnhabilidades = document.querySelector(".btn_Habilidades");
const btncontato = document.querySelector(".btn_Contato");
const btnvoltar = document.querySelector("#back_arrow");
const firstCard = document.querySelector(".card_FirstPage");
const containerAbouMe = document.querySelector(".container_SobreMim");
const containerProjects = document.querySelector(".container_projetos");
const containerSkills = document.querySelector(".card_habilidades");
const ouroboros = document.getElementById("logo");

function showBtns() {
  btnsobreMim.style.display = "flex";
  btnsobreMim.style.opacity = "1";
  btnprojetos.style.opacity = "1";
  btnprojetos.style.display = "flex";
  btnhabilidades.style.opacity = "1";
  btnhabilidades.style.display = "flex";
  btncontato.style.opacity = "1";
  btncontato.style.display = "flex";
}

function showAboutMe() {
  addEventListener("click", () => {
    firstCard.style.display = "none";
    containerAbouMe.style.display = "flex";
    containerSkills.style.display = "none";
  });
}

function showProjects() {
  addEventListener("click", () => {
    firstCard.style.display = "none";
    containerProjects.style.display = "flex";
    containerSkills.style.display = "none";
  });
}

function backToFirstPage() {
  addEventListener("click", () => {
    firstCard.style.display = "flex";
    containerAbouMe.style.display = "none";
    containerProjects.style.display = "none";
    containerSkills.style.display = "flex";
  });
}
