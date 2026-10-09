const moviesWrapper = document.querySelector(".results__container");

async function getMovies(searchTerm) {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=5f8a59f3&s=${searchTerm}`
    );
    const data = await response.json();
    console.log(data.Search);
    moviesWrapper.innerHTML = data.Search.map((movie) => {
        return `
            <div class="movie">
                <img src="${movie.Poster}" alt="${movie.Title}" />
                <h2>${movie.Title}</h2>
                <h4>${movie.Year}</h4>
                <button>Learn More</button>
            </div>
        `;
    }).join("");
}

function onSearchChange(event) {
    console.log(event.target.value);
    getMovies(event.target.value);
}