'use strict';
let numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// function askUser() {
//     for (let i = 0; i < 2; i++) {
//         let askMovie = prompt('Один из последних просмотренных фильмов?', '');
//         let askMovieRang = prompt('На сколько оцените его?', '');
//         personalMovieDB.movies[askMovie] = askMovieRang;
//     }
// }
// askUser() // запуск функции и затем вывод обьекта в консоль
let i = 0
while (i < 2) {
    let askMovie = prompt('Один из последних просмотренных фильмов?', '');
    let askMovieRang = prompt('На сколько оцените его?', '');
    if (askMovie != null && askMovieRang != null && askMovie != '' && askMovie.length < 50) {
        personalMovieDB.movies[askMovie] = askMovieRang;
        i++
    }
}
if (personalMovieDB.count != 0 && personalMovieDB.count < 10) {
    console.log('мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('ok!');
} else if (personalMovieDB) {
    console.log('you are movie watcher!');
} else {
    console.log('somethitng is wrong!');
}


console.log(personalMovieDB)
