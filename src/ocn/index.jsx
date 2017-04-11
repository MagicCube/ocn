import React from 'react';
import { render } from 'react-dom';

import Application from './app/Application';

import './index.html';
import './res/index.less';

render(
  <Application />,
  document.getElementById('ocn-root')
);
