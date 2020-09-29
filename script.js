'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

const db = {
    count:numberOfFilms, 
    movies:{},
    actors:{},
    genres:[],
    privat:false

};

db.movies[a]=b;
db.movies[c]=d;

console.log(db)