import React from 'react';

import BottomBar from '../components/BottomBar';
import MovieCoverList from '../components/MovieCoverList';

export default class Application extends React.PureComponent {
  async componentDidMount() {
    const movies = await $.ajax({
      url: '/data/raw-detailed.json'
    });
    console.log(movies);
  }

  render() {
    return (
      <div className="ocn-app">
        <MovieCoverList data={[]} />
        <BottomBar />
      </div>
    );
  }
}
