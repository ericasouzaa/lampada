const ligarLamp = document.getElementById ('ligar');
const desligarLamp = document.getElementById ('desligar');
const lampada = document.getElementById ('lampada');

function lampLigada () {
    lampada.src = "./lampada-ligada.png";
}
function lampDesligada () {
    lampada.src = "./lampada-desligada.png";
}

ligarLamp.addEventListener ('click', lampLigada)
desligarLamp.addEventListener('click', lampDesligada)

