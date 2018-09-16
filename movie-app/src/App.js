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
    this._getMovies();
    //console.log(fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating"));
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />;
    });
    console.log(movies)
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi() //이게 성공적으로 이루어지고 나면 ~ 
    this.setState({
      movies //moderns
      //moves : movies 
    });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(potato => potato.json())
    .then(json => json.data.movies) //화살표 표시는 리턴작성할필요없음 모던js라서 자동임
    .catch(err => console.log(err))
  }

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
