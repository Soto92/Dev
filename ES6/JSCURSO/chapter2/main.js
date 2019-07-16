//Aula 1 import e export. Ler o .md para ver instalções de dependências.
let n1=9, n2=3;
import {soma as somaOtherName} from './functions';
import {div} from './functions';
import {mult} from './functions';


console.log(somaOtherName (n1, n2));
console.log(div(n1, n2));
console.log(mult(n1, n2));
//sem default seria asssim: import {soma as newName } from './functions';

import X from './subtracao'
//default posso dar o nome que quiser ao metodo.
console.log(X(n1, n2));

import * as all from './functions';
//modo para importar todos os metodos.
console.log("cudo de 9 e 3: ",all.cubo(n1, n2));

//Aula 2 criar pastas src e public e configurar WebPack dev server


