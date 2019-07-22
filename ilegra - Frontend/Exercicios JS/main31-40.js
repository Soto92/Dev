//exercicio 31 (30 na verdade, dos pares!)
const resultado09 = document.getElementById("resultado09");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        resultado09.innerText += ` ${i} `;
    }
}

//exercicio 32
const dota = document.getElementById("dota");
const verificarDota = document.getElementById("verificarDota");
verificarDota.addEventListener("click", verifiqueChars);

function verifiqueChars() {
    if (dota.value.indexOf("dota") == 0 || dota.value.indexOf("Dota") == 0) {
        alert("True");
    } else {
        alert("False");
    }
}
//exercicio 33
const randomBtn = document.getElementById("randomBtn");
let randomExibe = document.getElementById("randomExibe");
randomBtn.addEventListener("click", exibaRandom);

function exibaRandom() {
    let numRdm = Math.floor(Math.random() * 10 + 1);
    randomExibe.value = numRdm;
}

//exercicio 34

const acerte = document.getElementById("acerte");
const acerteBtn = document.getElementById("acerteBtn");
let numRdm2 = Math.floor(Math.random() * 10 + 5);
acerteBtn.addEventListener("click", verifiqueNumero);

function verifiqueNumero() {
    if (acerte.value == numRdm2) {
        alert(`acertou! o número era: ${numRdm2}`);
    } else {
        alert("Errou! Tente outra vez");
    }
}

//exercício 35
const dateHj = new Date();
let hj = document.getElementById("hj");
hj.innerText = `Hoje é ${dateHj.getDate()}/${dateHj.getMonth() +
  1}/${dateHj.getFullYear()}`;

//exercício 36
let mes = document.getElementById("mesNext");

mes.innerText = "Próximo mês: " + (dateHj.getMonth() + 2);

//exercício 37 A
var deuses = ["Aegir", "Aud", "Balder", "Bragi", "Búri", "Dag", "Dellingr"];
const deusesDiv = document.getElementById("deuses");
deusesDiv.innerText = "Tamanho do array deuses: " + deuses.length;

//exercicio 37 B
const verDeuses = document.getElementById("verDeuses");
verDeuses.addEventListener("click", exibirDeuses);

function exibirDeuses() {
    for (let j = 0; deuses[j]; j++) {
        alert(" alerta " + (j + 1) + ": " + deuses[j]);
    }
}

//exercício 37 c
const verDeuses2 = document.getElementById("verDeuses2");
verDeuses2.addEventListener("click", () => {
    deuses.map(item => {
        alert(item);
    });
});

//exercício 37 e (d? não há!)
let addDeus = document.getElementById("addDeus");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => deuses.push(addDeus.value));

//exercício 37 f
let addDeus2 = document.getElementById("addDeus2");
let addBtn2 = document.getElementById("addBtn2");

addBtn2.addEventListener(
    "click",
    () => (deuses[deuses.length] = addDeus2.value)
);

//exercício 37 g
const cresce = document.getElementById("cresce");
let arrNumbers = [5, 7, 1, 2, 10, 8, 9];
arrNumbers.sort((a, b) => a - b);
cresce.innerText = "Ordem crescente: " + arrNumbers;

//exercício 37 h
const decresce = document.getElementById("decresce");
arrNumbers.sort((a, b) => b - a);
decresce.innerText = "Ordem decrescente: " + arrNumbers;

//exercício 38 e 39
let mostreD = document.getElementById("mostreD");
const mostreBtn = document.getElementById("mostreBtn");
mostreBtn.addEventListener("click", () => {
    mostreD.innerHTML = ""; //feito um reset, caso o usuário click várias vezes no botão (antes concatenava e repetia os nomes)
    deuses.map(item => {
        mostreD.innerHTML += `<li>${item}</li>`;
    });
});

//exercício 40

let parList = document.getElementById("parList");
const addNew = document.getElementById("addNew");
const enterNew = document.getElementById("enterNew");
let arrayData = [];
let k = 0;
addNew.addEventListener("click", mostreLista);

function mostreLista() {
    arrayData[arrayData.length] = enterNew.value;
    //pares ficam destacados (negrito) na lista
    if (enterNew.value % 2 == 0) {
        parList.innerHTML += `<ul><b>${arrayData[k]}</b></ul>`;
        k++;
    } else {
        parList.innerHTML += `<ul>${arrayData[k]}</ul>`;
        k++;
    }
}

//exercício 41

let countFive = document.getElementById('countFive');
let count = 5;
setInterval(() => {
    if (count > 0) {
        countFive.innerText = count;
        count--;
    }
    if (count == 0) {
        count = 5;
    }

}, 1000);

//exercício 42 challenge!

const status01 = 'img/01.png';
const status02 = 'img/02.png';
const status03 = 'img/03.png';

setInterval(() => {
    
    let statusAtual = document.getElementById('imgUrso');
    let valorSrc = statusAtual.getAttribute('src');

    if (valorSrc === status01) {
        statusAtual.setAttribute('src', status02);
    }
    else if (valorSrc === status02) {
        statusAtual.setAttribute('src', status03);
    }
    else if (valorSrc === status03) {
        statusAtual.setAttribute('src', status01);
    }
}, 200);