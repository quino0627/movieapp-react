import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

// class MoviePoster extends Component {
//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   };
//   render() {
//     console.log(this.props);
//     return <img src={this.props.poster} />;
//   }
// }

function Movie({ title, poster }) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

function MoviePoster({ poster }) {
  return <img src={poster} />;
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

export default Movie;
