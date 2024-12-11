import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movies, addStars, decStars, toggleFav, addToCart } = this.props;
    const { title, plot, price, rating, stars, poster, fav, addCart } =
      this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt="Poster" />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"
                  alt="decrease"
                  className="str-btn"
                  onClick={() => {
                    decStars(movies);
                  }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                  alt="star"
                  className="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                  alt="increase"
                  className="str-btn"
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span className="starCount">{stars}</span>
              </div>
              {fav ? (
                <button
                  className="unfavourite-btn"
                  onClick={() => {
                    toggleFav(movies);
                  }}
                >
                  Unfavourite
                </button>
              ) : (
                <button
                  className="favourite-btn"
                  onClick={() => {
                    toggleFav(movies);
                  }}
                >
                  Favourite
                </button>
              )}
              {addCart ? (
                <button
                  className="removecart-btn"
                  onClick={() => {
                    addToCart(movies);
                  }}
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  className="cart-btn"
                  onClick={() => {
                    addToCart(movies);
                  }}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
