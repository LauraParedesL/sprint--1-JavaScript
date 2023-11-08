const contenedor=document.getElementById("cards")

function crearCards(objeto){
    return `<article class="flex flex-col items-center w-64 h-78 p-2.5 border-2 bg-amber-700 rounded-lg ">
                   <img class="w-42 object-contain h-40 p-2" src="${objeto.image}">
                   <h3 class="font-sans font-bold text-2xl text-white text-center">${objeto.title}</h3>
                   </br>
                    <p class="text-center font-serif text-white p-2 line-clamp-4 hover:block">${objeto.overview}</p>
            </article>`
}

let section=document.querySelector("section")

function introducirCards(array){
    for (const objetos of array) {
        contenedor.innerHTML += crearCards(objetos)
    }
}
introducirCards(movies)