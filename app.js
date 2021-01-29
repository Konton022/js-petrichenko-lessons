'use strict';
let numberOfFilm;

function start() {
    numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}
start()

let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function addPersonalMovie() {
    for (let i = 0; i < 2; i++) {
        let askMovie = prompt('Один из последних просмотренных фильмов?', '');
        let askMovieRang = prompt('На сколько оцените его?', '');
        if (askMovie != null && askMovieRang != null && askMovie != '' && askMovie.length < 50) {
            personalMovieDB.movies[askMovie] = askMovieRang;
        }
    }
}

addPersonalMovie()


function showPersonalLevel() {
    if (personalMovieDB.count != 0 && personalMovieDB.count < 10) {
        console.log('мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('ok!');
    } else if (personalMovieDB) {
        console.log('you are movie watcher!');
    } else {
        console.log('somethitng is wrong!');
    }
}

showPersonalLevel()

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Выш любимый жанр кино? под номером ${i}`, '');
    }
}

writeYourGenres()

function showMyDb() {
    if (personalMovieDB.privat != true) {
        console.log(personalMovieDB);
    } else {
        console.log('Sorry, I coudnt show you my favorite Movies');
    }
}

showMyDb()


