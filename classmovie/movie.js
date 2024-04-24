class Movie {
    constructor (title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
}
static getPG(movies) {
    const pgMovies = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].rating === "PG") {
            pgMovies.push(movies[i]);
        }
    }
    return pgMovies;
}
}
const movie1 = new Movie("Teddy", "Studio Green")
console.log(movie1);
console.log('..................')
const movie2 =[new Movie("Remo", "Sun Pictures", "PG"),
               new Movie("Doctor", "Studio Green", "PG-13"),
               new Movie("Theri", "Sun Pictures", "R"),
               new Movie("Fidda","S Pictures", "PG")];
console.log(Movie.getPG(movie2));
const movie3 = new Movie("Casino Royale", "Eon Productions", "PG13") 
console.log(".................")
console.log(movie3);           