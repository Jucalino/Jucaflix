function addFavoriteFilm() {
    var capoFilmeFavorito = document.querySelector('#film')
    var favoriteFilm = capoFilmeFavorito.value
    listarFilmesNaTela(favoriteFilm)
}

function listarFilmesNaTela(film) {
    var result = document.querySelector(".result")
    var elementoFilme = "<img src=" + film + ">" 
    result.innerHTML = result.innerHTML + elementoFilme
}