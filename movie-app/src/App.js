import React, { Component } from "react";

import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "너의 결혼식",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/On_Your_Wedding_Day.jpg/220px-On_Your_Wedding_Day.jpg"
  },
  {
    title: "신과 함께",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/9/97/신과_함께_-_인과_연.png"
  },
  {
    title: "앤트맨",
    poster: "https://upload.wikimedia.org/wikipedia/ko/b/b4/앤트맨.jpg"
  },
  {
    title: "미션임파서블",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/6/6d/미션_임파서블_로그네이션.jpg"
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
