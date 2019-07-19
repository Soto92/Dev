//exercicio 31 (30 na verdade, dos pares!)
const resultado09 = document.getElementById('resultado09');
    for(let i=1; i<=20; i++){
        if(i%2 == 0){
            resultado09.innerText += ` ${i} `;
        }
}