/* eslint-disable arrow-body-style */
import React from 'react';

const Display = (props) => {
  const { data } = props;
  return (
    <>
      <div>{ data.symbol ? <p>{`Company Symbol: ${data.symbol}`}</p> : null }</div>
      <div>{ data.price ? <p>{`Price: $${data.price}`}</p> : null }</div>
      <div>{ data.changes ? <p className={ `data-display ${data.changes < 0 ? 'negative-change' : 'positive-change'}` }>{`Changes: ${data.changes}`}</p> : null }</div>
      <div>{ data.website ? <p><i>Website: </i><a href={ data.website } rel='noopener noreferrer' target='_blank'>{data.website}</a></p> : null }</div>
    </>
  );
};

export default Display;
