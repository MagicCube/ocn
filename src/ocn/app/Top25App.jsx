import React from 'react';
import { render } from 'react-dom';

import { loadStats } from '../logic/stat-service';
import MovieCoverList from '../components/MovieCoverList';

import '../top25.html';
import '../res/index.less';

export default class Top25App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stats: {
        sessionCount: 0,
        top25: []
      }
    };
  }

  componentDidMount() {
    this.load();
  }

  async load() {
    const stats = await loadStats();
    this.setState({ stats });
  }

  render() {
    return (
      <div className="ocn-cluster-app">
        <h2>基于 {this.state.stats.sessionCount} 个样本</h2>
        <MovieCoverList data={this.state.stats.top25} displayTitle={true} displayIndex={true} displayStats={true} />
      </div>
    );
  }
}


render(
  <Top25App />,
  document.getElementById('ocn-root')
);
