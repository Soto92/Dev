const  btn = document.querySelector('#exibaBtn');
let list = document.querySelector('#list');

let date = new Date();
let ts = '1563828791285'; //getTime XD82
console.log(ts);
const publicKey = 'c2c80a3a6c10fa95806ee502681d6d4';
const privateKey = '24438e70865a9787d82aee470efab0514dd0cdb';
const hash = 'cbd438f22c17feb7ff67ba8748605062';
let listCount = 0;
btn.addEventListener('click', function(){
    const URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(URL).
    then(function (response) {
    return response.json();
    }).
    then(function (response) {
     console.log(response);
     response.data.results.forEach( function(hero){
         let item = document.createElement('li');
         item.classList.add('stiloL');
         const photo = `${hero.thumbnail.path}/landscape_medium.${hero.thumbnail.extension}`;
         item.innerHTML = '<img src="'+ photo +'"/> <span>'+ hero.name +'</span> ';
         list.appendChild(item);
         item.addEventListener('click',() => mostreDesc(hero, item));
        })
    });
})

function mostreDesc(hero, item) {
    const photo = `${hero.thumbnail.path}/landscape_medium.${hero.thumbnail.extension}`;
    let desc = `${ hero.description }`;
    if(desc == ""){
       desc = "Sem descrição";
    }
    item.innerHTML = '<img src="'+ photo +'"/> <span>'+ desc +'</span> ';
}