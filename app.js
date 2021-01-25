'use strict';
let numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function askUser() {
    for (let i = 0; i < 2; i++) {
        let askMovie = prompt('Один из последних просмотренных фильмов?', '');
        let askMovieRang = prompt('На сколько оцените его?', '');
        personalMovieDB.movies[askMovie] = askMovieRang;
    }
}
askUser() // запуск функции и затем вывод обьекта в консоль

console.log(personalMovieDB)
