'use strict';
alert (4);
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


const db = {
    count:numberOfFilms, 
    movies:{},
    actors:{},
    genres:[],
    privat:false

};
let i = 0
while (i < 1) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          i++;
   
          if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        db.movies[a]= b;
        console.log ('Done');
    }
    else {
        console.log ('Error');
        i--;
    }
}
 if  ( db.count < 10 ) {
     console.log ('Просмотрено довольно мало фильмов');
 }
 else if (db.count >= 10 && db.count < 30) {
     console.log ('Вы классический зритель');
 }
 else if (db.count >= 30) {
     console.log ('Вы киноман')
 }
 else {
     console.log ('Произошла ошибка')
 }



console .log(db);


