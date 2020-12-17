/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, {
  useState,
} from 'react';

import Title from './components/title';
import Search from './components/search';
import Display from './components/display';

// setConfig({
//   showReactDomPatchNotification: false,
// });

const App = () => {
  const [query, setQuery] = useState([]);
  const [data, setData] = useState([]);

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (! query) {
      // eslint-disable-next-line no-alert
      alert('Please enter a search query...');
      return;
    }
    fetch(`/dataprofile?input=${query}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response[0]);
      })
      .catch((error) => console.log(error));
    setQuery('');
  };

  return (
    <div id='container-A'>
      <div id='container-B'>
        <Title />
        <Search
          query={ query }
          handleQuery={ handleQuery }
          handleSubmit={ handleSubmit }
        />
        <Display
          data={ data }
        />
      </div>
    </div>
  );
};

export default App;
