import React from 'react';
import { render } from 'react-dom';

import { loadClusters } from '../logic/cluster-service';
import ClusterList from '../components/ClusterList';

import '../cluster.html';
import '../res/index.less';
import '../res/cluster-app.less';

export default class ClusterApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clusterCount: 25,
      clusters: []
    };
  }

  componentDidMount() {
    this.load();
  }

  async load() {
    const clusters = await loadClusters();
    this.setState({ clusters });
  }

  async handleClusterCountChange(clusterCount) {
    const clusters = await loadClusters(clusterCount);
    this.setState({ clusters, clusterCount });
  }

  render() {
    return (
      <div className="ocn-cluster-app">
        <div className="ocn-cluster-count">
          <select value={this.state.clusterCount} onChange={e => this.handleClusterCountChange(e.target.value)}>
            <option value={5}>聚合为 5 组</option>
            <option value={10}>聚合为 10 组</option>
            <option value={15}>聚合为 15 组</option>
            <option value={20}>聚合为 20 组</option>
            <option value={25}>聚合为 25 组</option>
            <option value={50}>聚合为 50 组</option>
          </select>
        </div>

        <ClusterList data={this.state.clusters} />
      </div>
    );
  }
}


render(
  <ClusterApp />,
  document.getElementById('ocn-root')
);
