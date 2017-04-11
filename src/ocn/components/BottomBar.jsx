import React from 'react';

import '../res/bottom-bar.less';

export default class BottomBar extends React.PureComponent {
  render() {
    return (
      <div className="ocn-bottom-bar">
        <div className="hint">请选择看过的影片</div>
        <button className="next-batch" onClick={this.props.onNextBatchButtonClick}>换一批</button>
      </div>
    );
  }
}