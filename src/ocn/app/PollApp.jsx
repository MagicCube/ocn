import React from 'react';
import { render } from 'react-dom';

import BottomBar from '../components/BottomBar';
import MovieCoverList from '../components/MovieCoverList';
import * as service from '../logic/poll-service';

import '../index.html';
import '../res/index.less';
import '../res/poll-app.less';

export default class PollApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.nextBatch();
  }

  async nextBatch() {
    document.body.scrollTop = 0;
    const movies = await service.nextBatch();
    this.setState({ movies: movies.slice(0, 20) });
  }

  async selectMovie(movie) {
    movie.selected = true;
    this.forceUpdate();
    await service.selectMovie(movie.id);
  }

  async deselectMovie(movie) {
    movie.selected = false;
    this.forceUpdate();
    await service.deselectMovie(movie.id);
  }

  handleMovieClick(movie) {
    if (!movie.selected) {
      this.selectMovie(movie);
    } else {
      this.deselectMovie(movie);
    }
  }

  render() {
    return (
      <div className="ocn-poll-app">
        <MovieCoverList
          data={this.state.movies ? this.state.movies : []}
          onMovieClick={movie => this.handleMovieClick(movie)}
        />
        <BottomBar onNextBatchButtonClick={() => this.nextBatch()} />
      </div>
    );
  }
}


render(
  <PollApp />,
  document.getElementById('ocn-root')
);
