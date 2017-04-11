import React from 'react';

import BottomBar from '../components/BottomBar';
import MovieCoverList from '../components/MovieCoverList';
import { nextBatch } from '../logic/service';

export default class Application extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    const movies = await nextBatch();
    this.setState({ movies: movies.slice(0, 20) });
  }

  render() {
    return (
      <div className="ocn-app">
        <MovieCoverList data={this.state.movies ? this.state.movies : []} />
        <BottomBar />
      </div>
    );
  }
}
