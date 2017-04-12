import React from 'react';

import '../res/bottom-bar.less';

export default class BottomBar extends React.PureComponent {
  render() {
    return (
      <div className="ocn-bottom-bar">
        <div className="hint">请选择看过的影片<br /><span className="auto">后台自动提交</span></div>
        <button className="next-batch" onClick={this.props.onNextBatchButtonClick}>好，换一批</button>
      </div>
    );
  }
}
