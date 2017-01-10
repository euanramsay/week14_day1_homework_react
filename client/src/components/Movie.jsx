var React = require('react');

var Movie = React.createClass({
  render: function () {
    return (
      <div className='movie'>
        <a className='movie-name' href={this.props.url}>{this.props.name}</a>
        <a className='movie-showtimes' href={this.props.showTimesURL}>SHOWTIMES</a>
      </div>
    )
  }
});

module.exports = Movie;