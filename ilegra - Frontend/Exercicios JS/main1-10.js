//Exercício 1 e 2:
let btn = document.getElementById("btn");
let textoParagrafo = document.getElementById("texto");

btn.addEventListener('click', mensagem)

function mensagem() {
    let text = "Hello World!!!";
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
btn4.addEventListener('click', countChars);

function countChars(){
    const txt = document.getElementById('text').value;
    let numChars = txt.length;
    countPrint.innerText = numChars;
}

//exercicio 6:
let status = document.getElementById('imgLampada');
let desligada = 'https://i.ibb.co/8XNC8CC/lampada-off.png';
let ligada = 'https://i.ibb.co/BBcwqyd/lampada-onn.png';
function changeStatus(){
    if(status.src === desligada){
        status.src=ligada;
    } else {
        status.src=desligada;
    }
}
status.addEventListener('click', changeStatus);

//exercicio 7:
let status2 = document.getElementById('imgLampada2');
let desligada2 = 'https://i.ibb.co/8XNC8CC/lampada-off.png';
let ligada2 = 'https://i.ibb.co/BBcwqyd/lampada-onn.png';
function changeStatus2(){
    if(status2.src === desligada2){
        status2.src=ligada2;
    } else {
        status2.src=desligada2;
    }
}
status2.addEventListener('mousemove', changeStatus2);

let saudo = document.getElementById('saudo');

saudo.addEventListener ('click', saudar);
function saudar(){
    let name7 = document.getElementById ('nomeX').value;
    let sobre7 = document.getElementById ('sobrenomeX').value;
    alert(`Olá ${name7} ${sobre7}`);
}

//exercicio 8
let cpf01 = document.getElementById('cpf01');
let cpfResult = document.getElementById('cpfPontuado');
let result, part1, part2, part3, part4;
cpf01.addEventListener('keyup', pontuar);

function pontuar () {

    if(cpf01.value.length<=3){
        part1 = cpf01.value.substring(0, 3) +'.';
        result = part1;
    } else  if(cpf01.value.length<=6){
        part2 = cpf01.value.substring(3, 6) +'.';
        result = part1 + part2;
    } else  if(cpf01.value.length<=9){
        part3 = cpf01.value.substring(6, 9) +'-';
        result = part1 + part2 + part3;
    } else  if(cpf01.value.length<=11){
        part4 = cpf01.value.substring(9, 11);
        result = part1 + part2 + part3 + part4;
    } 
    cpfResult.innerText = result;
}

//exercicio 9
let cpf02 = document.getElementById('cpf02');
let cpfcru = document.getElementById('cpfcru');

cpf02.addEventListener ('keyup', erasePoint);

function erasePoint () {
    var RegExp = (/[\.-]/g);
    console.log(cpf02.value);
    if ((RegExp.test(cpf02.value) == false)  && (cpf02.value.length % 4 == 0 ) ) {
        alert("Faltou pontuação!");
    } else {
		var saida = cpf02.value.replace(/[\.-]/g, "");
        cpfcru.innerText = saida;
    } 
}
//exercicio 10, 16 e 17
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let btn5 = document.getElementById('somar');
let res = document.getElementById('res');

btn5.addEventListener('click', somar);

function somar (){
    if(num1.value && num2.value){
        res.value = parseFloat(num1.value) + parseFloat(num2.value);
    } else {
        res.value = 0;
    }
}










