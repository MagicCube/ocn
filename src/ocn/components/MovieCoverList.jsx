import React from 'react';

import MovieCover from './MovieCover';

import '../res/movie-cover-list.less';

export default class MovieCoverList extends React.Component {
  handleMovieClick(movie) {
    if (typeof(this.props.onMovieClick) === 'function') {
      this.props.onMovieClick(movie);
    }
  }

  render() {
    const items = this.props.data.map((movie, i) => (
      <div
        key={movie.id}
        className={movie.selected ? 'list-item selected' : 'list-item'}
        onClick={() => this.handleMovieClick(movie)}
        title={this.props.displayStats ? `${movie.favs} 人看过，占 ${movie.favPercentage}%` : null}
      >
        {this.props.displayIndex ? <div className="index">{i + 1}</div> : null}
        <MovieCover data={movie} displayTitle={this.props.displayTitle} />
        {movie.selected ? <div className="check" /> : null}
      </div>
    ));
    return (
      <div className="ocn-movie-cover-list">
        {items}
      </div>
    );
  }
}
