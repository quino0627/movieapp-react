import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>hello this is a movie</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/On_Your_Wedding_Day.jpg/220px-On_Your_Wedding_Day.jpg" />
    );
  }
}

export default Movie;
