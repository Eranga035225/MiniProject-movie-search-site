function search() {
  const movieTag = document.getElementById("movieTag");
  const movie = movieTag.value.trim();
  const apiKey = "4ed5c7ab";
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

  const errorTag = document.getElementById("error");
  const movieCard = document.getElementById("movieInfo");

  errorTag.innerText = "";
  movieCard.style.display = "none";

  if (!movie) {
    errorTag.innerText = "Please enter a movie title!";
    return;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "False") {
        errorTag.innerText = data.Error;
        return;
      }

      document.getElementById("poster").src = data.Poster;
      document.getElementById("title").innerText = data.Title;
      document.getElementById("plot").innerText = data.Plot;
      document.getElementById("rating").innerText = data.imdbRating;
      document.getElementById("year").innerText = data.Year;
      document.getElementById("released").innerText = data.Released;
      document.getElementById("runtime").innerText = data.Runtime;
      document.getElementById("genre").innerText = data.Genre;
      document.getElementById("director").innerText = data.Director;
      document.getElementById("actors").innerText = data.Actors;
      document.getElementById("language").innerText = data.Language;
      document.getElementById("country").innerText = data.Country;
      document.getElementById("awards").innerText = data.Awards;
      document.getElementById("boxoffice").innerText = data.BoxOffice;
      document.getElementById("website").innerHTML = `<a href="${data.Website}" target="_blank">${data.Website}</a>`;


      movieCard.style.display = "block";
    })
    .catch(error => {
      errorTag.innerText = "Something went wrong. Try again!";
    });
}
