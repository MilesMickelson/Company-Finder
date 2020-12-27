/* eslint-disable arrow-body-style */
import React from 'react';

const loupe = require('../media/loupe.png');

const Search = (props) => {
  const { query, handleQuery, handleSubmit, handleMarketList } = props;
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
      <h5>Show me available stock symbols</h5>
      <button type='submit' onClick={ handleMarketList } id='loupe-button'>
        <img
          id='list-button'
          src={ loupe }
          alt='loupe'
        />
      </button>
    </>
  );
};

export default Search;
