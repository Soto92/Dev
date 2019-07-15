
//Introdução ao ES6. Exemplo: imprimindo numa lista "Novo todo" as vezes em q o botão foi clikado:
class List{
    constructor(){
        this.data =[];
    }
    add(data){
        this.data.push(data);
        console.log(data);
        
    }
}

class TodoLista extends List {
    constructor(){
        super(); //chamar constructor pai
        this.usuario = 'Mauricio';
        
    }
    mostraUsuario(){
        console.log("user01:",this.usuario);
    }
}

const MinhaLista = new TodoLista();
let i=0;
document.getElementById('novotodo').onclick = function(){
        i++;
        MinhaLista.add(i);
}

MinhaLista.mostraUsuario();

//Exemplo estático:
class Matematica{
    //statico, não depende dos outros!
    static soma(a,b){
       return a+b;
        
    }
}
console.log("soma88+112:",Matematica.soma(88, 112));

//Exemplo de mutação dentro da const

const user= {nome : 'Mauricio'};
user.nome = 'Soto';
console.log(user);
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function teste(x){
    let y=2;
    if(x>5){
        console.log(x,y);
    }
}
teste(10);

//Exemplo- vetores

const arr1 = [1, 3, 4, 5, 8, 9];
const newArr2 = arr1.map(function(item){
    return item*2;
});
for(let j=0; arr1[j]; j++){
    arr1[j]=arr1[j]*2;
    
}
console.log("vector x 2",arr1);
console.log(newArr2);
const sum = arr1.reduce(function(total, next){
    return total + next;
});
console.log(sum);

const filter = arr1.filter(function(item){
    return item %2===0;

});
console.log(filter);

const find = arr1.find(function(item){
    return item === 4;
});
console.log(find);

//arrow functions
const vet= [1,3,4,5,6];
const newvet = vet.map((item)=>
     item *2 //antigo return
);
console.log(newvet); //imprime valores vetor x 2
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// const teste = () => ({nome: 'Mauricio'});
// console.log(teste()); imprime (nome: Mauricio)

//valores padrão
function soma1(a=3, b=7){ // antigo
    return a+b;
}
    //novo com arrow function:
const soma2 = ( a=3 , b=7) => a+b;

console.log(soma1());
console.log(soma2());

//Exemplos desestruturação
const usuario = {
    nome: 'Mauricio',
    idade: 26,
    endereco: {
        cidade: 'Grv',
        estado: 'RS',
    },
};
console.log(usuario);

const { nome, idade, endereco:{cidade}}=usuario;
console.log(nome);
console.log(idade);
console.log(cidade); //ou

function mostraNome ({nome , idade}){
    console.log(nome, idade);
}
mostraNome(usuario);

// operadores rest/spread
const pessoa = {
    name: 'Mauricio',
    idade: 26,
    empresa:'Masperiano'
};
const{name, ... resto}= pessoa; //resto guarda os outros dados
console.log(name);
console.log(resto);

const array0 = [1,2,3,4];
const [a,b,...c] = array0;
console.log('a=',a);
console.log('b=',b);
console.log('c=',c);

// exemplo desomatorios em ES6:
function somaAnt(a,b,c){
    return a+b+c;
}
console.log(somaAnt(1,2,4));

function somaNew(...params){
    return params.reduce((total,next) => total + next);
}
console.log(somaNew(1,3,4));

function somaNew2(a, b, c, ...resto){
    return resto;
}
console.log(somaNew2(1,3,4,5,5,5,5,5));

//Exemplo Concatenando vetores com spread:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

const user1 = {
    nome: 'Mauricio Soto',
    idade:26,
    pais: 'Brasil',
};
const user2 = {...user1, nome:'Lionel'};
console.log(user2);

//aula9 - template literals
const nomeUser= "Mauricio";
const idadeUser= 26;
console.log('meu nome é ' +nomeUser+ ' e tenho ' +idadeUser+ ' anos');
console.log(`Meu nome é ${nomeUser} e tenho ${idadeUser} anos`);

//aula10 = object short syntax
const nomeX = 'Mauricio';
const idadeX = 26;
const userX = {
    nomeX,
    idadeX,
    empresa: 'ultron',
};
console.log(userX);

// //aula 11 configure webpack, instalei as dependencias já via linha de comando.

import {somaExt} from './funcoes.js';
import {multiExt} from './funcoes.js';
import {divExt} from './funcoes.js';

var form = document.getElementById('inputs');
var n1 = document.getElementById('num1');
var n2 = document.getElementById('num2');
var operation = ["soma", "multi", "div", "lixo", "derivada"];
var number1, number2;

form.addEventListener('submit', function(e) {
   number1 = n1.value;
   number2 = n2.value;
    operation.forEach(myFunction);//chama a função das operações do array apos click
    // impede o envio do form
    e.preventDefault();
});

function myFunction(item) {
    if(item==="soma"){
        console.log(somaExt(number1, number2));
    } else if (item==="multi"){
        console.log(multiExt(number1, number2));
    } else if (item=== "div"){
        console.log(divExt(number1, number2));
    }else{
        Error.prototype.message = `${item} "valor de operacao invalido"`;
        console.log(Error.prototype.message);
    }
}
