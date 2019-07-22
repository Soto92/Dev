const  btn = document.querySelector('#exibaBtn');
let list = document.querySelector('#list');

let date = new Date();
let ts = '1563828791285'; //getTime XD 82
console.log(ts);
const publicKey = 'c2c80a3a6c10fa95806ee502681d6d4';
const privateKey = '24438e70865a9787d82aee470efab0514dd0cdb';
const hash = 'cbd438f22c17feb7ff67ba8748605062';

btn.addEventListener('click', function(){
    
    const URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(URL).
    then(function (response) {
    return response.json();
    }).
    then(function (response) {
     console.log(response);
    });

    // fetch(URL)
    // .then(function(response){
    //     return response.json()
    // })
    // .then(function(response){
    //    response.data.forEach(function(user){
    //        let item = document.createElement('li');

    //        item.classList.add('stiloL');
    //        item.innerHTML = '<img src="'+ user.avatar +'"/> <span>'+ user.name +'</span> ';

    //        list.appendChild(item);
          
    //    })
    // })
    
})