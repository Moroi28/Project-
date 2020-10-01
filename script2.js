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

console .log(db);




const cam = 23;

/*if (cam > 30 ){
    console.log ("No");

}
else if (cam > 20) {
    console.log ("True");
}
else {
    console.log ("Yes");
}*/

switch (cam) {
    case 23 :
    console.log ('Yes');
    break;
    case 20 :
        console.log ("No")
        break;
};


let ret = 20;

while (ret < 100) { 
    console.log (ret)
    ret++;
}

for (let i=1;i < 50;i++) {
    console.log (ret)
}