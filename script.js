function verificarNivel() {
  var nomeHeroi = document.getElementById("nome_heroi").value;
  var xpHeroi = document.getElementById("xp_heroi").value;
  var resultadoElement = document.getElementById("resultado");
  var nivel;

  if (xpHeroi === "" || isNaN(xpHeroi)) {
    resultadoElement.innerHTML = "Por favor, insira um valor válido para XP.";
    return;
  }

  xpHeroi = parseInt(xpHeroi);

  if (xpHeroi < 1000) {
    nivel = "Ferro";
  } else if (xpHeroi <= 2000) {
    nivel = "Bronze";
  } else if (xpHeroi <= 5000) {
    nivel = "Prata";
  } else if (xpHeroi <= 7000) {
    nivel = "Ouro";
  } else if (xpHeroi <= 8000) {
    nivel = "Platina";
  } else if (xpHeroi <= 9000) {
    nivel = "Ascendente";
  } else if (xpHeroi <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  resultadoElement.innerHTML = `O Herói de nome ${nomeHeroi} está no nível de ${nivel}`;
}
