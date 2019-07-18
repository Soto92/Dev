//exercicio 11 (12a)
let green =document.getElementById('verde');
let red = document.getElementById('vermelho');

let clickado = function changecolor (){
    if(this.id === 'vermelho'){
        document.getElementById('cor').style.backgroundColor= "red";
    } else if (this.id === 'verde') {
        document.getElementById('cor').style.backgroundColor= "green";
    } else  {
        document.getElementById('cor').style.backgroundColor= "white";
    }
}
document.getElementById('branco').onclick = clickado;
document.getElementById('vermelho').onclick = clickado;
document.getElementById('verde').onclick = clickado;



