const botao1 = document.getElementById('b01');
const botao2 = document.getElementById('b02');

function ligar1 (){
    botao1.textContent = "OFF";
    botao2.textContent = "ON";
}
function ligar2 (){
    botao1.textContent = "ON";
    botao2.textContent = "OFF";
}

botao1.addEventListener('click', ligar1);
botao2.addEventListener('click', ligar2);