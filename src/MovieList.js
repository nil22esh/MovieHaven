import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const { movies, addStars, decStars, addToCart, toggleFav } = this.props;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movies={movie}
            addStars={addStars}
            decStars={decStars}
            addToCart={addToCart}
            toggleFav={toggleFav}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
