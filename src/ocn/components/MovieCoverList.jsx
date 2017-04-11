import React from 'react';

import MovieCover from './MovieCover';

export default class MovieCoverList extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired
  }

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
