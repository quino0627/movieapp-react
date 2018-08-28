import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

const movieTitles = ["너의 결혼식", "신과 함께", "앤트맨", "미션임파서블"];
const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/On_Your_Wedding_Day.jpg/220px-On_Your_Wedding_Day.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/9/97/신과_함께_-_인과_연.png",
  "https://upload.wikimedia.org/wikipedia/ko/b/b4/앤트맨.jpg",
  "https://upload.wikimedia.org/wikipedia/ko/6/6d/미션_임파서블_로그네이션.jpg"
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
