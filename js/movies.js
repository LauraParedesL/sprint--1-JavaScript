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

//filtros

const inputBusqueda=document.getElementById("input-busqueda")
const contenedorGeneros=document.getElementById("contenedor-generos")

let genres=new Set()

for (const movie of movies) {
    genres.add(...movie.genres)
}

console.log(...genres)

function crearBuscarXGeneros(genreParameter){
    return `<select name="genre" id="genres">
                <option value=${genreParameter}>${genreParameter}</option>
            </select>`
}

function imprimirTemplate(lista , ubicacion , fn){
    let template= ""
    for (const elementoIterado of lista) {
        template += fn(elementoIterado)
    }
    if (template) {
        ubicacion.innerHTML = template
    }
    else{
        ubicacion.innerHTML = `<h2 class="text-black"> No hay resultados... </h2>`
    }
    
}
imprimirTemplate(genres, contenedorGeneros , crearBuscarXGeneros)

inputBusqueda.addEventListener("keyup" , () => {
    const filterByTitle = filteringByTitle(movies , inputBusqueda.value)

    imprimirTemplate(filterByTitle, contenedor, crearCards)
})



function filteringByTitle(listaMovies , titulo){
    const filtro= listaMovies.filter(movie => movie.title.toLowerCase().startsWith( titulo.toLowerCase() ) )
    return filtro
}