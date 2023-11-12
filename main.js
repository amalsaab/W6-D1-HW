let cont = document.getElementById('container')

fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => { console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        cont.insertAdjacentHTML('afterbegin',
        `<div class="box">
        <img src="${data.results[i].image}" alt="">
        <p>${data.results[i].name}</p>
    </div>`)
        
    }
});