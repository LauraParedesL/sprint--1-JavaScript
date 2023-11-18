export function introducirCards(array, contenedor) {
    for (const objetos of array) {
        contenedor.innerHTML += crearCards(objetos)
    }
}




export function esFavorito(movieId) {
    let listaPeliculasFavoritas = JSON.parse(window.localStorage.getItem("favoritas")) || []
    for (const favMovieID of listaPeliculasFavoritas) {
        if (favMovieID === movieId) {
            return true
        }
    }
    return false
}



export function crearCards(objeto) {
    let urlImages = `https://moviestack.onrender.com/static/${objeto.image}`
    let favorito = esFavorito(objeto.id)
    return `<article class="flex flex-col items-center w-64 h-78 p-2.5 border-2 bg-amber-700 rounded-lg ">
                   <button data-fav="fav" class="flex rounded-full bg-white" data-id="${objeto.id}">
                        <svg color=${favorito ? "red" : "black"}  data-fav="fav" data-id="${objeto.id}" class="fill-current object-contain w-10 h-6" xmlns="http://www.w3.org/200 svg" width="24" height="24" viewBox="0 0 24 24">
                            <path data-fav="fav" data-id="${objeto.id}" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
                        </svg>
                   </button>
                   <img class="w-42 object-contain h-40 p-2" src="${urlImages}">
                   <h3 class="font-sans font-bold text-2xl text-white text-center">${objeto.title}</h3>
                   </br>
                    <p class="text-center font-serif text-white p-2 line-clamp-4 hover:block">${objeto.overview}</p>
                    <a class="border-black bg-black text-white p-2 w-18 m-1 font-bold self-center rounded text-center" href="./details.html?id=${objeto.id}"> See more </a>
            </article>`
}

export function crearBuscarXGeneros(genreParameter) {
    return `<option value=${genreParameter}>${genreParameter}</option>`
}

export function imprimirTemplate(lista, ubicacion, fn) {
    let template = ""
    for (const elementoIterado of lista) {
        template += fn(elementoIterado)
    }
    if (template) {
        ubicacion.innerHTML = template
    }
    else {
        ubicacion.innerHTML = `<h2 class="text-black"> No hay resultados... </h2>`
    }

}

export function filteringByTitle(listaMovies, titulo) {
    const filtro = listaMovies.filter(movie => movie.title.toLowerCase().startsWith(titulo.toLowerCase()))
    return filtro
}

export function filtrarPorGenero(listaMovies, genre) {
    const filtrado = listaMovies.filter(movie => genre.includes(...movie.genres))
    if (genre == "Genres") {
        return listaMovies
    }
    return filtrado
}

export function busqueda() {
    const filtroGeneros = contenedorGeneros.value
    const filtradoPorGenero = filtrarPorGenero(movies, filtroGeneros)
    const filtradoPorNombre = filteringByTitle(filtradoPorGenero, inputBusqueda.value)
    imprimirTemplate(filtradoPorNombre, contenedor, crearCards)

}

/*
export function addRemoveMovieFromFavedList(movieId) {
    window.localStorage.setItem("favMovies", JSON.stringify(favMovies))
    let listaPeliculasFavoritas = window.localStorage.getItem("favMovies") || []
    listaPeliculasFavoritas.push(movieId)
   
}

color=${favorito ? "red" : "black"} 
*/