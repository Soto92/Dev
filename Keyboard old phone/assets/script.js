var countClick = 0;
var sms = document.getElementById('caixa').innerHTML;
let timer, concate = "";
let x = document.getElementsByClassName('btn');
for (i = 0; i < x.length; i++) {
    let id_num = x[i].id;
    let texto = x[i].innerHTML;
    atribuirEvento(id_num, texto);
}

function atribuirEvento(id, texto) {

    document.getElementById(id).addEventListener("click", function () {
        countClick += 1;
        let letra = texto;
        if (id === 'btn#' && countClick === 1) {
            letra = letra.substring(1, 2);
            concate = concate.substring(0, concate.length - 1);
            sms = document.getElementById('caixa').innerHTML = concate;
            countClick = 0;
        }
        if (id === 'btn0' && countClick === 1) {
            letra = ' ';
            sms = document.getElementById('caixa').innerHTML = letra;
        } else if (id === 'btn0' && countClick === 2) {
            letra = '0';
            sms = document.getElementById('caixa').innerHTML = letra;
            countClick = 0;
        } else {
            if (countClick === 1 && id != 'btn#') {
                letra = letra.substring(2, 3);
                sms = document.getElementById('caixa').innerHTML = letra;
            } else if (countClick === 2) {
                letra = letra.substring(3, 4);
                sms = document.getElementById('caixa').innerHTML = letra;
            } else if (countClick === 3) {
                letra = letra.substring(4, 5);
                sms = document.getElementById('caixa').innerHTML = letra;
            } else if (countClick === 4) {
                if (id === 'btn2' || id === 'btn3' || id === 'btn4' || id === 'btn5' || id === 'btn6' || id === 'btn8') {
                    letra = letra.substring(0, 1);
                    sms = document.getElementById('caixa').innerHTML = letra;
                    countClick = 0;
                } else {
                    letra = letra.substring(5, 6);
                    sms = document.getElementById('caixa').innerHTML = letra;
                }
            } else if (countClick === 5) {
                letra = letra.substring(0, 1);
                sms = document.getElementById('caixa').innerHTML = letra;
                countClick = 0;
            }
        }
        clearTimeout(timer);
        if (id === 'btn#') {
            sms = document.getElementById('caixa').innerHTML = concate;
        } else {
            sms = document.getElementById('caixa').innerHTML = concate + letra;
        }
        timer = setTimeout(function () {
            concate = concate.concat(letra);
            countClick = 0;
        }, 600);
    });
}