import React from 'react';

import MovieCover from './MovieCover';
import { deselectMovie, selectMovie } from '../logic/service';

import '../res/movie-cover-list.less';

export default class MovieCoverList extends React.Component {
  async selectMovie(movie) {
    movie.selected = true;
    this.forceUpdate();
    await selectMovie(movie.id);
  }

  async deselectMovie(movie) {
    movie.selected = false;
    this.forceUpdate();
    await deselectMovie(movie.id);
  }

  handleMovieClick(movie) {
    if (!movie.selected) {
      this.selectMovie(movie);
    } else {
      this.deselectMovie(movie);
    }
  }

  render() {
    const items = this.props.data.map(movie => (
      <div key={movie.id} className={movie.selected ? 'list-item selected' : 'list-item'} onClick={() => this.handleMovieClick(movie)}>
        <MovieCover data={movie} />
        {movie.selected ? <div className="check" /> : null}
      </div>
    ));
    return (
      <div className="ocn-movie-cover-list">
        <span>{items}</span>
      </div>
    );
  }
}
