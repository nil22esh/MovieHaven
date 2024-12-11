import React from "react";
import MovieList from "./MovieList";
import "./index.css";
import { movies } from "./moviesData";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleStarIncrease = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) {
      return;
    }

    movies[mid].stars += 0.5;
    this.setState({
      movies,
    });
  };

  handleStarDecrease = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars <= 0) {
      return;
    }

    movies[mid].stars -= 0.5;
    this.setState({
      movies,
    });
  };

  handleToggleFavourite = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies,
    });
  };

  handleAddCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].addCart = !movies[mid].addCart;

    if (movies[mid].addCart) {
      cartCount = cartCount + 1;
    } else {
      cartCount = cartCount - 1;
    }
    this.setState({
      movies,
      cartCount,
    });
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.handleStarIncrease}
          decStars={this.handleStarDecrease}
          toggleFav={this.handleToggleFavourite}
          addToCart={this.handleAddCart}
        />
      </>
    );
  }
}

export default App;
