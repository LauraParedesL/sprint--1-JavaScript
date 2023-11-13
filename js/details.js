const search = location.search

const params = new URLSearchParams( search )

const id = params.get( "id" )

const movie = movies.find( movie => movie.id == id)

console.log(movie.title)

const contenedor = document.getElementById("cards")

contenedor.innerHTML = crearCards(movie)


function crearCards(movie){
    return `<article class="flex w-9/12 min-h-screen  p-4 bg-amber-700 rounded-lg">
                <div class="flex flex-col place-items-center">
                          <img class="w-4/5 h-3/5 p-2" src="${movie.image}">
                   <table>
                        <tr>
                            <td class="border-solid border-2 text-center p-2 bg-amber-200 w-56">Original Language</td>
                            <td class="border-solid border-2 text-center p-2 bg-amber-200 w-56">${movie.original_language}</td>
                        </tr>
                        <tr>
                            <td class="border-solid border-2 text-center p-2 bg-amber-200">Release Date</td>
                            <td class="border-solid border-2 text-center p-2 bg-amber-200">${movie.release_date}</td>
                        </tr>
                        <tr>
                            <td class="border-solid border-2 text-center p-2 bg-amber-200">Runtime</td>
                            <td class="border-solid border-2 text-center p-2 bg-amber-200">${movie.runtime}</td>
                        </tr>
                        <tr>
                            <td class="border-solid border-2 text-center p-2 bg-amber-200">status</td>
                            <td class="border-solid border-2 text-center p-2 bg-amber-200
                            ">${movie.status}</td>
                        </tr>
                    </table>  
                </div>
                <div class="flex flex-col gap-6">
                   <h3 class="font-sans font-bold text-2xl text-white ">${movie.title}</h3>
                   <p class="font-serif font-bold text-white p-2">${movie.tagline}</p>
                   <p class="font-serif text-white p-2">${movie.genres}</p>
                   <p class="font-serif text-white w-64 p-2">${movie.overview}</p>
                <table class="">
                   <tr>
                       <td class="border-solid border-2 text-center p-2 bg-amber-200 w-56">vote average</td>
                       <td class="border-solid border-2 text-center p-2 bg-amber-200 w-56">${movie.vote_average}</td>
                   </tr>
                   <tr>
                       <td class="border-solid border-2 text-center p-2 bg-amber-200 w-56">Budget</td>
                       <td class="border-solid border-2 text-center p-2 bg-amber-200 w-56">${movie.budget}</td>
                   </tr>
                   <tr>
                       <td class="border-solid border-2 text-center p-2 bg-amber-200 w-56">Revenue</td>
                       <td class="border-solid border-2 text-center p-2 bg-amber-200 w-56">${movie.revenue}</td>
                   </tr>
               </table>  
                </div> 
            </article>`
}