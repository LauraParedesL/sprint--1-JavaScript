import { introducirCards, crearCards, esFavorito } from "./functions.js";

const url = "https://moviestack.onrender.com/api/movies"
const apiKey = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"

const options = {
    headers: {
        "x-api-key": apiKey
    }
}
fetch(url, options)
    .then(response => response.json())
    .then(data => {
        let movies = data.movies
        let favoritas = JSON.parse(localStorage.getItem("favoritas")) || []
        let favMovies = []

        for (const movie of movies) {
            if (favoritas.includes(movie.id)) {
                favMovies.push(movie)
            }
        }
       
        let contenedorFavs = document.getElementById("contenedor-favs")
        introducirCards(favMovies, contenedorFavs)

        contenedorFavs.addEventListener("click", (event) => {
            const dataFav = event.target.dataset.fav
            const idMovies = event.target.dataset.id
            let favoritas = JSON.parse(localStorage.getItem("favoritas")) || []
        
            if (dataFav == "fav") {
                if (favoritas.includes(idMovies)) {
                    favoritas.splice(favoritas.indexOf (idMovies),1)
                    console.log("Soy tu If")
                }
                else {
                    favoritas.push(idMovies)
                    console.log("soy tu else")
                }
        
                localStorage.setItem("favoritas" , JSON.stringify(favoritas))
            }
            
        })
    })
    .catch(e => { console.log(e) })


