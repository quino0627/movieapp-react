import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

//블렉스박스, 쉐도우 포자션relative정도의 css

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
      console.log(movie)
      return <Movie title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
         />;
    });
    //console.log(movies)
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
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then(potato => potato.json())
    .then(json => json.data.movies) //화살표 표시는 리턴작성할필요없음 모던js라서 자동임
    .catch(err => console.log(err))
  }

  render() {
    // console.log("Did render");
    const { movies } = this.state;
    return (
      
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App;
