// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    },
    {
      title: '12 Angry Men',
      year: 1957,
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    },
    {
      title: 'Schindler"s List',
      year: 1993,
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      score: 8.9
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      director: 'Quentin Tarantino',
      duration: '2h 34min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      director: 'Peter Jackson',
      duration: '3h 21min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.9
    },
    {
      title: 'Il buono, il brutto, il cattivo',
      year: 1966,
      director: 'Sergio Leone',
      duration: '3h 2min',
      genre: ['Western'],
      score: 8.9
    },
    {
      title: 'Fight Club',
      year: 1999,
      director: 'David Fincher',
      duration: '2h 19min',
      genre: ['Drama'],
      score: 8.8
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
      director: 'Peter Jackson',
      duration: '2h 58min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.8
    },
    {
      title: 'Forrest Gump',
      year: 1994,
      director: 'Robert Zemeckis',
      duration: '2h 22min',
      genre: ['Comedy', 'Drama', 'Romance'],
      score: 8.8
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
      director: 'Irvin Kershner',
      duration: '2h 4min',
      genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      score: 8.8
    },
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      duration: '2h 28min',
      genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
      score: 8.8
    },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
      director: 'Peter Jackson',
      duration: '2h 59min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.7
    },
    {
      title: 'One Flew Over the Cuckoo"s Nest',
      year: 1975,
      director: 'Milos Forman',
      duration: '2h 13min',
      genre: ['Drama'],
      score: 8.7
    },
    {
      title: 'Goodfellas',
      year: 1990,
      director: 'Martin Scorsese',
      duration: '2h 26min',
      genre: ['Crime', 'Drama'],
      score: 8.7
    }];

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors() {
    const directors = movies.map(film => film.director);
    return directors;
};

//  console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
    const spielbergDramas = movies.filter(film => film.director === 'Steven Spielberg' && film.genre === 'Drama');
    return spielbergDramas;
};

//console.log(howManyMovies(movies));

Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage() {
    const initialValue = 0;
    const totalScores = movies.reduce();
    return totalScores;
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
