import React from 'react';

import '../res/bottom-bar.less';

export default class BottomBar extends React.PureComponent {
  render() {
    return (
      <div className="ocn-bottom-bar">
        <button className="next-batch">换一批</button>
      </div>
    );
  }
}
