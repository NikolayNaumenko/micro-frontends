import React from 'react';
import ReacDOM from 'react-dom';

import App from './App';

export const mount = (element) => {
  ReacDOM.render(
    <App />,
    element,
  )
}
