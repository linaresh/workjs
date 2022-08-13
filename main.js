const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","0");

const personalMovieBD ={
  movies:numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let i = 0;
while( i < numberOfFilms){
  let answer1 = prompt("Какой помледний фильм вы посмотрели?",""),
      answer2 = prompt("какую оценку поставити?","");

      if ((answer1 === "") || (answer1 === null) || (answer1.length > 50)) {
        continue;
      }
      personalMovieBD.movies[answer1] = answer2;
      i += 1;
}

console.log(personalMovieBD);


