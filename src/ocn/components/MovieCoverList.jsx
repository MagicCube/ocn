import React from 'react';

import MovieCover from './MovieCover';

import '../res/movie-cover-list.less';

export default class MovieCoverList extends React.Component {
  render() {
    const items = this.props.data.map(movie => (
      <li key={movie.id}>
        <MovieCover data={movie} />
      </li>
    ));
    return (
      <ul className="ocn-movie-cover-list">
        {items}
      </ul>
    );
  }
}
