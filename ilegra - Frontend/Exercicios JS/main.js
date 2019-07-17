//Exercício 1 e 2:
let btn = document.getElementById("btn");
let textoParagrafo = document.getElementById("texto");

btn.addEventListener('click', mensagem)

function mensagem() {
    let text = "Hello World!!!"
    textoParagrafo.innerText = text;
}
//Exercício 3:
let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', alerta)

function alerta() {
    return alert("5");
}
//Exercício 4:
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', exibirNome);

function exibirNome() {
    const nomeX = document.getElementById('completo').value;
    alert("Seu nome é: " + nomeX);
}

//Exercício 5:
let btn4 = document.getElementById('btn4');
let countPrint = document.getElementById("countChar");
btn4.addEventListener('click', countChar);

function countChar(){
    const txt = document.getElementById('text').value;
    let numChars = txt.length;
    countPrint.innerText = numChars;
}

//exercicio 6:
let status = document.getElementById('imgLampada');
let desligada = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
let ligada = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
function changeStatus(){
    if(status.src === desligada){
        status.src=ligada;
    } else {
        status.src=desligada;
    }
    
}

status.addEventListener('click', changeStatus);

