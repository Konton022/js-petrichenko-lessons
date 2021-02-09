'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    addPersonalMovie: function () {
        for (let i = 0; i < 2; i++) {
            let askMovie = prompt('Один из последних просмотренных фильмов?', '');
            let askMovieRang = prompt('На сколько оцените его?', '');
            if (askMovie != null && askMovieRang != null && askMovie != '' && askMovie.length < 50) {
                personalMovieDB.movies[askMovie] = askMovieRang;
            }
        }
    },
    showPersonalLevel: function () {
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
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let ansver = ''
            while (ansver == '' || ansver == null) {
                ansver = prompt(`твой любимый жанр по номером ${i}: `)
            }
            personalMovieDB.genres[i - 1] = ansver;
        }
    },
    showMyDb: function () {
        if (personalMovieDB.privat != true) {
            console.log(personalMovieDB);
        } else {
            console.log('Sorry, I coudnt show you my favorite Movies');
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        console.log(personalMovieDB.privat)
    },
    showMyFavoriteGenre: function () {
        personalMovieDB.genres.forEach(function (element, index) {
            console.log(`Любимый жанр № ${index + 1} - это ${element}`);
        })
    }
};

personalMovieDB.start();
personalMovieDB.addPersonalMovie();
personalMovieDB.writeYourGenres();
personalMovieDB.showPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDb();
personalMovieDB.showMyFavoriteGenre();

console.log(personalMovieDB);


