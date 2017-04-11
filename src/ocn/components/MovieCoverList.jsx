import React from 'react';

import MovieCover from './MovieCover';
import { deselectMovie, selectMovie } from '../logic/service';

import '../res/movie-cover-list.less';

export default class MovieCoverList extends React.Component {
  async selectMovie(movie) {
    await selectMovie(movie.id);
    movie.selected = true;
    this.forceUpdate();
  }

  async deselectMovie(movie) {
    await deselectMovie(movie.id);
    movie.selected = false;
    this.forceUpdate();
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
      <li key={movie.id} className={movie.selected ? 'selected' : null} onClick={() => this.handleMovieClick(movie)}>
        <MovieCover data={movie} />
        {movie.selected ? <div className="check" /> : null}
      </li>
    ));
    return (
      <ul className="ocn-movie-cover-list">
        {items}
      </ul>
    );
  }
}
