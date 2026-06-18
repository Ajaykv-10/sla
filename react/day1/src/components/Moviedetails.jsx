function MovieDetails() {
  const movie = {
    movieName: "Leo",
    heroName: "Vijay",
    directorName: "Lokesh Kanagaraj",
    releaseYear: 2023,
  };

  return (
    <div className="border p-3">
      <h2>Movie Details</h2>
      <hr></hr>
      <p>
        <strong>Movie Name:</strong> {movie.movieName}
      </p>

      <p>
        <strong>Hero Name:</strong> {movie.heroName}
      </p>

      <p>
        <strong>Director Name:</strong> {movie.directorName}
      </p>

      <p>
        <strong>Release Year:</strong> {movie.releaseYear}
      </p>
    </div>
  );
}

export default MovieDetails;