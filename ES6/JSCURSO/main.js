
//Introdução ao ES6. Exemplo: imprimindo numa lista "Novo todo" as vezes em q o botão foi clikado:
class List{
    constructor(){
        this.data =[];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoLista extends List {
    constructor(){
        super(); //chamar constructor pai
        this.usuario = 'Mauricio';
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}
const MinhaLista = new TodoLista();
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();
//Exemplo estático:
class Matematica{
    //statico, não depende dos outros!
    static soma(a,b){
       return a+b;
        
    }
}
console.log(Matematica.soma(88, 112));

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

const arr = [1, 3, 4, 5, 8, 9];
const newArr = arr.map(function(item){
    return item*2;
});
console.log(newArr);
const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);

const filter = arr.filter(function(item){
    return item %2===0;

});
console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});
console.log(find);

//arrow functions
const arr= [1,3,4,5,6];
const newArr = arr.map((item)=>
     item *2 //antigo return
);
console.log(newArr); //imprime valores vetor x 2
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
const usuario = {
    nome: 'Mauricio',
    idade: 26,
    empresa:'Masperiano'
};
const{nome, ... resto}= usuario; //resto guarda os outros dados
console.log(nome);
console.log(resto);

const arr = [1,2,3,4];
const [a,b,...c] = arr;
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

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user1 = {
    nome: 'Mauricio Soto',
    idade:26,
    pais: 'Brasil',
};
const user2 = {...user1, nome:'Lionel'};
console.log(user2);

//aula9 - template literals
const nome= "Mauricio";
const idade= 26;
console.log('meu nome é ' +nome+ ' e tenho ' +idade+ ' anos');
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

//aula10 = object short syntax
const nome = 'Mauricio';
const idade = 26;
const userX = {
    nome,
    idade,
    empresa: 'ultron',
};
console.log(userX);

//aula 11 configure webpack, instalei as dependencias já via linha de comando.
import {soma}from './funcoes';
console.log(soma(1, 2));