let  btn = document.querySelector('#btn');
let list = document.querySelector('#list');

btn.addEventListener('click', function(){
    fetch('https://reqres.in/api/users?per_page=7')
    .then(function(response){
        return response.json()
    })
    .then(function(response){
       response.data.forEach(function(user){
           let item = document.createElement('li');
           item.classList.add('stiloL');
           item.innerHTML = '<img src="'+ user.avatar +'"/> <span>'+ user.first_name +'</span> ';

           list.appendChild(item);
          
       })
    })
    
})
