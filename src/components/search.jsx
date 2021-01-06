/* eslint-disable arrow-body-style */
import React from 'react';

const loupe = require('../media/loupe.png');

const Search = (props) => {
  const { query, handleQuery, handleSubmit } = props;
  return (
    <>
      <h4>Search by Stock Symbol</h4>
      <form id='input-wrap' onSubmit={ handleSubmit }>
        <input
          type='text'
          id='search-bar'
          name='search-bar'
          value={ query }
          onChange={ handleQuery }
        />
        <button type='submit' onClick={ handleSubmit } id='loupe-button'>
          <img
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
