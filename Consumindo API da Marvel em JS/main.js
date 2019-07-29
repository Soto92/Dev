const btn = document.querySelector('#exibaBtn');
const btnHome = document.getElementById('home');
let list = document.querySelector('#list');
let date = new Date();
let ts = Date.now(); //getTime XD82
const publicKey = '8c2c80a3a6c10fa95806ee502681d6d4';
const privateKey = '224438e70865a9787d82aee470efab0514dd0cdb';
const hash = MD5(ts + privateKey + publicKey);

btnHome.addEventListener('click', home);

function home() {
    console.log(list.childNodes);
    if (list.hasChildNodes()) {
        while (list.childNodes[0]) {
            list.removeChild(list.childNodes[0]);
        }
    }
}

function mostreDesc(hero, itemList) {
    const photo = `${hero.thumbnail.path}/landscape_medium.${hero.thumbnail.extension}`;
    let desc = `${hero.description}`;
    console.log(hero);
    if (desc == "") {
        desc = "Description not available";
    }
    itemList.innerHTML = '<img src="' + photo + '"/> <span>' + desc + '</span> ';
}

btn.addEventListener('click', function () {
    home();
    const URL = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(URL).
    then(function (response) {
        return response.json();
    }).
    then(function (response) {
        console.log(response);
        response.data.results.forEach(function (hero) {
            let item = document.createElement('li');
            item.classList.add('stiloL');
            const photo = `${hero.thumbnail.path}/landscape_medium.${hero.thumbnail.extension}`;
            item.innerHTML = '<img src="' + photo + '"/> <span>' + hero.title + '</span> ';
            list.appendChild(item);
            item.addEventListener('click', () => mostreDesc(hero, item));
        })
    });
})

const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', searchHero);

function searchHero() {
    home();
    const name_hero = encodeURIComponent(searchInput.value);
    const URL = `https://gateway.marvel.com/v1/public/characters?name=${name_hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    fetch(URL).
    then(function (response) {
        return response.json();
    }).
    then(function (response) {
        console.log(response);
        response.data.results.forEach(function (hero) {

            let item = document.createElement('li');
            item.classList.add('stiloL');
            const photo = `${hero.thumbnail.path}/landscape_medium.${hero.thumbnail.extension}`;
            item.innerHTML = '<img src="' + photo + '"/> <span>' + hero.name + '</span> ';
            list.append(item);
            item.addEventListener('click', () => mostreDesc(hero, item));
        })
    });
}