'use strict';
let numberOfFilm;

let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start,
    addPersonalMovie,
    showPersonalLevel,
    writeYourGenres,
    showMyDb,
    toggleVisibleMyDB,
    showMyFavoriteGenre
};

function start() {
    numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
        console.log(numberOfFilm);
    }
    console.log(numberOfFilm);
}

function addPersonalMovie() {
    for (let i = 0; i < 2; i++) {
        let askMovie = prompt('Один из последних просмотренных фильмов?', '');
        let askMovieRang = prompt('На сколько оцените его?', '');
        if (askMovie != null && askMovieRang != null && askMovie != '' && askMovie.length < 50) {
            personalMovieDB.movies[askMovie] = askMovieRang;
        }
    }
}

function showPersonalLevel() {
    console.log(personalMovieDB.count)
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        console.log('мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('ok!');
    } else if (personalMovieDB.count >= 30) {
        console.log('you are movie watcher!');
    } else {
        console.log('somethitng is wrong!');
    }
    console.log(personalMovieDB.count);
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let ansver = ''
        while (ansver == '' || ansver == null) {
            ansver = prompt(`твой любимый жанр по номером ${i}: `)
        }
        personalMovieDB.genres[i - 1] = ansver;
    }
}

function showMyDb() {
    if (personalMovieDB.privat != true) {
        console.log(personalMovieDB);
    } else {
        console.log('Sorry, I coudnt show you my favorite Movies');
    }
}

function toggleVisibleMyDB() {
    if (personalMovieDB.privat === true) {
        personalMovieDB.privat = false;
    } else {
        personalMovieDB.privat = true;
    }
    console.log(personalMovieDB.privat)
}

function showMyFavoriteGenre() {
    personalMovieDB.genres.forEach(function (element, index) {
        console.log(`Любимый жанр № ${index + 1} - это ${element}`);
    })
}


personalMovieDB.start();
personalMovieDB.addPersonalMovie();
personalMovieDB.writeYourGenres();
personalMovieDB.showPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDb();
personalMovieDB.showMyFavoriteGenre();

console.log(personalMovieDB);


