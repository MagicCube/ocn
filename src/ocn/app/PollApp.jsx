import React from 'react';
import { render } from 'react-dom';

import BottomBar from '../components/BottomBar';
import MovieCoverList from '../components/MovieCoverList';
import { nextBatch } from '../logic/poll-service';

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
    const movies = await nextBatch();
    this.setState({ movies: movies.slice(0, 20) });
  }

  render() {
    return (
      <div className="ocn-poll-app">
        <MovieCoverList data={this.state.movies ? this.state.movies : []} />
        <BottomBar onNextBatchButtonClick={() => this.nextBatch()} />
      </div>
    );
  }
}


render(
  <PollApp />,
  document.getElementById('ocn-root')
);
