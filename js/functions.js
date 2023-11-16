export function introducirCards(array , contenedor){
    for (const objetos of array) {
        contenedor.innerHTML += crearCards(objetos)
    }
}

export function crearCards(objeto){
    let urlImages=`https://moviestack.onrender.com/static/${objeto.image}`
    return `<article class="flex flex-col items-center w-64 h-78 p-2.5 border-2 bg-amber-700 rounded-lg ">
                   <img class="w-42 object-contain h-40 p-2" src="${urlImages}">
                   <h3 class="font-sans font-bold text-2xl text-white text-center">${objeto.title}</h3>
                   </br>
                    <p class="text-center font-serif text-white p-2 line-clamp-4 hover:block">${objeto.overview}</p>
                    <a class="border-black bg-black text-white p-2 w-18 m-1 font-bold self-center rounded text-center" href="./details.html?id=${objeto.id}"> Ir a detalle </a>
            </article>`
}

export function crearBuscarXGeneros(genreParameter){
    return `<option value=${genreParameter}>${genreParameter}</option>`
}

export function imprimirTemplate(lista , ubicacion , fn){
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

export function filteringByTitle(listaMovies , titulo){
    const filtro= listaMovies.filter(movie => movie.title.toLowerCase().startsWith( titulo.toLowerCase() ) )
    return filtro
}

export function filtrarPorGenero(listaMovies , genre){
    const filtrado= listaMovies.filter(movie => genre.includes(...movie.genres ))
    if(genre == "Genres"){
        return listaMovies
    }
    return filtrado
}