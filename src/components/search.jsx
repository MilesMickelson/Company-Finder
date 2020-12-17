/* eslint-disable arrow-body-style */
import React from 'react';

const loupe = require('../media/loupe.png');

const Search = (props) => {
  const { query, handleQuery, handleSubmit } = props;
  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type='text'
          placeholder='Search..'
          id='search-bar'
          name='query'
          value={ query }
          onChange={ handleQuery }
        />
        <button type='submit' onClick={ handleSubmit }>
          <img
            className='loupe'
            id='loupe'
            src={ loupe }
            alt='loupe'
          />
        </button>
      </form>
    </>
  );
};

export default Search;
