'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i=1; i<=numberOfFilms;i++){
    if (numberOfFilms===1){
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
                personalMovieDB.movies[a] = b;
                break;
    }

    if (numberOfFilms===2){
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', ''),
                c = prompt('Один из последних просмотренных фильмов?', ''),
                d = prompt('На сколько оцените его?', '');
                personalMovieDB.movies[a] = b;
                personalMovieDB.movies[c] = d;
                break;
    }

    if (numberOfFilms===3){
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', ''),
                c = prompt('Один из последних просмотренных фильмов?', ''),
                d = prompt('На сколько оцените его?', ''),
                e = prompt('Один из последних просмотренных фильмов?', ''),
                f = prompt('На сколько оцените его?', '');
                personalMovieDB.movies[a] = b;
                personalMovieDB.movies[c] = d;
                personalMovieDB.movies[e] = f;
                break;
    }

    if (numberOfFilms===4){
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', ''),
                c = prompt('Один из последних просмотренных фильмов?', ''),
                d = prompt('На сколько оцените его?', ''),
                e = prompt('Один из последних просмотренных фильмов?', ''),
                f = prompt('На сколько оцените его?', ''),
                j = prompt('Один из последних просмотренных фильмов?', ''),
                k = prompt('На сколько оцените его?', '');
                personalMovieDB.movies[a] = b;
                personalMovieDB.movies[c] = d;
                personalMovieDB.movies[e] = f;
                personalMovieDB.movies[j] = k;
                break;
    }
    
}


if (personalMovieDB.count >0 &&personalMovieDB.count <2){
console.log ('Просмотрено довольно мало фильмов');
 } 
 else
  if (personalMovieDB.count >2 && personalMovieDB.count <4){
    console.log ('Вы классический зритель');
  }
  else
  if (personalMovieDB.count >4){
    console.log ('Вы киноман');
  }
  else 
  if (personalMovieDB.count <=0){
      console.log('Произошла ошибка!!!');
  }

console.log(personalMovieDB);