/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, {
  useState,
} from 'react';

import Title from './components/title';
import Search from './components/search';
import Display from './components/display';

const App = () => {
  const [query, setQuery] = useState([]);
  const [data, setData] = useState([]);
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (! query) {
      alert('Please enter a search query...');
      return;
    }
    fetch(`/dataprofile?input=${query}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (data.length === 10) {
          data.pop();
        }
        setData(response);
      })
      .catch((error) => {
        alert('Please enter a valid stock symbol...');
        console.log(error);
      });
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
