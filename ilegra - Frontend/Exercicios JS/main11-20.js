//exercicio 11 (12a)
const clickado = (id) => {
    if(id === 'vermelho'){
        return document.getElementById('cor').style.backgroundColor= "red";
    } else if (id === 'verde') {
       return document.getElementById('cor').style.backgroundColor= "green";
    } else  {
       return document.getElementById('cor').style.backgroundColor= "white";
    }
};

const btnVermelho = document.getElementById('vermelho')
const btnVerde = document.getElementById('verde')
const btnBranco = document.getElementById('branco')

btnVerde.addEventListener('click', () => clickado(btnVerde.id))
btnVermelho.addEventListener('click', () => clickado(btnVermelho.id))
btnBranco.addEventListener('click', () => clickado(btnBranco.id))

//exercicio 14
let aki = document.getElementById('aki');
aki.innerText = "Este texto foi inserido do JS: A injeção de JavaScript é um processo pelo podemos inserir e usar nosso próprio código JavaScript em uma página, tanto inserindo o código na barra de endereços quanto encontrando uma vulnerabilidade XSS em um website. Saiba que as mudanças podem apenas ser vistas por você e que não são permanentes. Isto ocorre porque o JavaScript é uma linguagem “client-side” (executada no computador do cliente).";
//exercicio 15
let aki2 = document.getElementById('aki2');
let btn6 = document.getElementById('btn6');

btn6.addEventListener('click', exibirTXT);
function exibirTXT (){
    aki2.innerText = "Assim um Framework tem como principal objetivo resolver problemas recorrentes com uma abordagem genérica, permitindo ao desenvolvedor focar seus esforços na resolução do problema em si, e não ficar reescrevendo software.";
}
//exercicio 18

const restoNum1 = document.getElementById('restoN1');
const restoNum2 = document.getElementById('restoN2');
const restoBtn = document.getElementById('restoBtn');
let restoRes = document.getElementById('restoRes');

restoBtn.addEventListener('click', restoDiv)

function restoDiv(){
    let resto = restoNum1.value % restoNum2.value;
    restoRes.value = resto;
}

//exercicio 19
const numero = document.getElementById('numero');
let exibe =document.getElementById('exibe');
const verificar = document.getElementById('verifPar');

verificar.addEventListener('click', verificarPar);

function verificarPar(){
    console.log(numero.value);
    if ((!numero.value) || (numero.value == 0)){
        exibe.innerText= "Digite um número válido";
    } else if(numero.value%2 == 0){
        exibe.innerText= "Par";
    } else  {
        exibe.innerText= "Impar";
    }
}
//exercicio 20
let num01 = document.getElementById('num01');
let num02 = document.getElementById('num02');
let multiplicar = document.getElementById('multiplicar');
let resultado = document.getElementById('resultado');

multiplicar.addEventListener('click', multiplique);

function multiplique (){
    if(num01.value && num02.value){
        resultado.value = parseFloat(num01.value) * parseFloat(num02.value);
    } else {
        resultado.value = 0;
    }
}
//exercicio 21
const valueDesc = document.getElementById('valueDesc');
const valueRes = document.getElementById('valueRes');
valueDesc.addEventListener('keyup', revelarDesc);
function revelarDesc(){
    valueRes.value = valueDesc.value * 0.05;
}

//exercicio 22
const anoNasc=document.getElementById('anoNasc');
const maioridade=document.getElementById('maioridade');
let verificadoMaior = document.getElementById('verificadoMaior');
let date = new Date();
const year= date.getFullYear();

maioridade.addEventListener('click', verificarMaioridade);

function verificarMaioridade(){
   
    if(year - anoNasc.value >= 18){
        verificadoMaior.innerText = "É maior de idade";
    } else {
        verificadoMaior.innerText = "É menor de idade";
    }
}

//exercicio 23
let resultado01 = document.getElementById('resultado01');
resultado01.innerText="Repetição";

//exercicio 24
let resultado02 = document.getElementById('resultado02');
resultado02.innerText="Repetição" + " Repetição" ;
//exercicio 25
let resultado03 = document.getElementById('resultado03');

for(let i=0; i<=20; i++){
    resultado03.innerText += " For";
}
//exercicio 26
let resultado04 = document.getElementById('resultado04');
let arr04= [0, 1, 2, 3, 4];

arr04.forEach(repetir);
function repetir(item){
    resultado04.innerText+= " forEach";
}

//exercicio 27
let resultado05 = document.getElementById('resultado05');
let i=0
while( i<5 ){
    resultado05.innerText+= " While";
    i++;
}
//exercicio 28
let resultado06 = document.getElementById('resultado06');
i=0;
do{
    resultado06.innerText += " Do while ";
    i++;
}
while(i<5)
//exercicio 29
let resultado07 = document.getElementById('resultado07');
for(i=1; i<=10; i++){
    resultado07.innerText+= " "+ i +" ";
}
//exercicio 30
let tab1 = document.getElementById ('tab1');
let tab2 = document.getElementById ('tab2');

for(i=1; i<=10; i++){
    tab1.innerHTML += `<br>`;
    for (let j=1; j<=10; j++){
            tab1.innerText +=" "+ i +" x "+ j +" = "+ " " + i*j+" ";
            tab1.innerHTML += `<br>`;
    }
}







