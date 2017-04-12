import React from 'react';

import MovieCoveList from './MovieCoverList';

import '../res/cluster-list.less';

export default class ClusterList extends React.Component {
  render() {
    const items = this.props.data.map((cluster, i) => (
      <div key={'c' + i} className="cluster">
        <div>{`${(i + 1)}. ${cluster._tags.join(', ')}`}</div>
        <MovieCoveList data={cluster.movies} displayTitle={true} />
      </div>
    ));
    return (
      <div className="ocn-cluster-list">
        {items}
      </div>
    );
  }
}
