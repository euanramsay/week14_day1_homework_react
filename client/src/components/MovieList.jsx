var React = require('react');
var Movie = require('./Movie.jsx');

var MovieList = React.createClass({
  render: function () {

    var movieComponents = this.props.movies.map(function (movieObject) {      
      return (
        <Movie name={movieObject.name} key={movieObject.id}>
          {movieObject.name}
        </Movie>
      )
    });

    return (
      <div className='movie-list'>
        {movieComponents}
      </div>
    );
  }
});

module.exports = MovieList;