import React, { Component } from "react";

import "./App.css";
import Movie from "./Movie";

class App extends Component {
  //Render : componentWillMount() -> render() -> componentDidMount()
  //Update : componentWillReceiveProps() -> shouldComponentUpdate() ->
  //->componentWillUpdate() -> render() ->componentDidUpdate

  state = {};

  componentWillMount() {
    console.log("Will Mount");
  }

  componentDidMount() {
    //console.log("Did Mount");
    setTimeout(() => {
      this.setState({
        movies: [
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
          },
          {
            title: "어벤져스",
            poster:
              "https://upload.wikimedia.org/wikipedia/ko/1/18/어벤져스.jpg"
          }
        ]
      });
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };
  render() {
    // console.log("Did render");

    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App;
