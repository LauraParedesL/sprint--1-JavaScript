import { introducirCards, crearCards, crearBuscarXGeneros, imprimirTemplate, filteringByTitle, filtrarPorGenero } from "./functions.js"


const url="https://moviestack.onrender.com/api/movies"
const apiKey="0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const options = {
    headers: {
        "x-api-key" : apiKey
    }
}
let movies=[]
fetch(url, options)
.then(response => response.json() )
.then(data =>{
     movies = data.movies
    introducirCards(movies, contenedor)
} )
.catch( e => {console.log ( e ) } )





const contenedor=document.getElementById("cards")



let section=document.querySelector("section")





//filtros

const inputBusqueda=document.getElementById("input-busqueda")
const contenedorGeneros=document.getElementById("contenedor-generos")

const generosSinFiltrar = movies.map(movie => movie.genres).flat()
const generosSet= [...new Set(generosSinFiltrar)]

const genres = Array.from(generosSet)
genres.unshift("Genres")

//genres.add("Genres")



imprimirTemplate(genres, contenedorGeneros , crearBuscarXGeneros)

inputBusqueda.addEventListener("keyup" , () => {
    const filtroGeneros=contenedorGeneros.value
    const filtradoPorGenero= filtrarPorGenero(movies, filtroGeneros)
    const filtradoPorNombre= filteringByTitle(filtradoPorGenero, inputBusqueda.value)
    imprimirTemplate(filtradoPorNombre, contenedor, crearCards)
})

contenedorGeneros.addEventListener("input",(e)=>{
    const filtroGeneros=contenedorGeneros.value
    const filtradoPorGenero= filtrarPorGenero(movies, filtroGeneros)
    const filtradoPorNombre= filteringByTitle(filtradoPorGenero, inputBusqueda.value)
    imprimirTemplate(filtradoPorNombre, contenedor, crearCards)
})
/*
function filtrarPorGenero(listaMovies , genre){
    const filtrado= listaMovies.filter(movie => movie.genres.includes(genre))
    if(genre == "Genres"){
        return listaMovies
    }
    return filtrado
}

function crearCards(objeto){
    return `<article class="flex flex-col items-center w-64 h-78 p-2.5 border-2 bg-amber-700 rounded-lg ">
                   <img class="w-42 object-contain h-40 p-2" src="${objeto.image}">
                   <h3 class="font-sans font-bold text-2xl text-white text-center">${objeto.title}</h3>
                   </br>
                    <p class="text-center font-serif text-white p-2 line-clamp-4 hover:block">${objeto.overview}</p>
                    <a class="border-black bg-black text-white p-2 w-18 m-1 font-bold self-center rounded text-center" href="./details.html?id=${objeto.id}"> Ir a detalle </a>
            </article>`
}

function introducirCards(array){
    for (const objetos of array) {
        contenedor.innerHTML += crearCards(objetos)
    }
}

function crearBuscarXGeneros(genreParameter){
    return `<option "value"=${genreParameter}>${genreParameter}</option>`
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


function filteringByTitle(listaMovies , titulo){
    const filtro= listaMovies.filter(movie => movie.title.toLowerCase().startsWith( titulo.toLowerCase() ) )
    return filtro
}
*/

