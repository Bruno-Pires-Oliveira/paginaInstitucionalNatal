import { DataUser } from "./DataUser.js";

const dataUser = new DataUser();
document
  .getElementById("botaoEnviar")
  .addEventListener("click", cadastrarUsuario);
document
  .getElementById("papaiNoelImg")
  .addEventListener("click", santaClausLaughingOnClick);
document.addEventListener("DOMContentLoaded", jingleBells);

/**
 * Função que cadastra um usuário no sistema.
 * @param {Event} e - Evento que ocorre quando o formulário é submetido.
 */
function cadastrarUsuario(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  let comentarios = document.getElementById("comentarios").value;
  const tipobrinquedo = document.getElementById("tipobrinquedo").value;
  const genero = document.getElementById("genero").value;
  const telefone = Number(document.getElementById("telefone").value);
  if (comentarios == "hulk") {
    return secretHulk();
  }
  if (
    nome == "" ||
    email == "" ||
    tipobrinquedo == "" ||
    genero == "" ||
    telefone == ""
  ) {
    alert("Preencha todos os campos");
    return sadNoel();
  } else {
    dataUser.cadastrarUsuario(
      nome,
      email,
      comentarios,
      tipobrinquedo,
      genero,
      telefone
    );
    console.log(dataUser);
    alert("Dados Cadastrados");
    document.getElementById("formulario").reset();
    return santaClausLaughingOnSend();
  }
}

/**
 * Função que executa o som de riso do Papai Noel ao enviar.
 */
function santaClausLaughingOnSend() {
  const audio = document.createElement("audio");
  const papaiNoelImg = document.getElementById("papaiNoelImg");
  papaiNoelImg.src = "./assets/papaiNoel.jpg";
  audio.src = "./audio/santaClaus.mp3";
  document.body.appendChild(audio);
  audio.play();
}

/**
 * Função que executa o som de riso do Papai Noel ao clicar.
 */
function santaClausLaughingOnClick() {
  const audio = document.createElement("audio");
  audio.src = "./audio/santaClaus.mp3";
  document.body.appendChild(audio);
  audio.play();
}

/**
 * Função que executa o som de tristeza do Papai Noel e altera a imagem.
 */
function sadNoel() {
  const audio = document.createElement("audio");
  audio.src = "./audio/clash-royale-king-cry.mp3";
  document.body.appendChild(audio);
  audio.play();
  const imagemNoelTriste = document.getElementById("papaiNoelImg");
  imagemNoelTriste.src =
    "./assets/papaiTristePorqueVoceEBurroEerrouOformulario.jpg";
}

/**
 * Função que executa a música Jingle Bells com volume reduzido.
 */
function jingleBells() {
  const audio = document.createElement("audio");
  audio.src = "./audio/jingle-bells-180104.mp3";
  document.body.appendChild(audio);
  audio.play();
  audio.volume = 0.1;
}

function secretHulk() {
  alert("AQUI ESTÁ");
  const hulkInTheDivIcon = document.getElementsByClassName("iconDivs");
  const hulkGif = document.createElement("img");
  hulkGif.src = "./assets/hulk.gif";
  hulkGif.style.width = "100%";
  hulkGif.style.height = "100%";
  hulkGif.style.position = "absolute";
  hulkGif.style.top = "0";
  hulkGif.style.left = "0";
  hulkGif.style.zIndex = "100";
  hulkInTheDivIcon[0].appendChild(hulkGif);
}
