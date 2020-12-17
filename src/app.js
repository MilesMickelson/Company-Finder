/* eslint-disable arrow-body-style */
import React from 'react';

import Title from './components/title';
import Search from './components/search';
import Display from './components/display';

// setConfig({
//   showReactDomPatchNotification: false,
// });

const App = () => {
  return (
    <div id='container-A'>
      <div id='container-B'>
        <Title />
        <Search />
        <Display />
      </div>
    </div>
  );
};

export default App;
