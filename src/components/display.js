/* eslint-disable no-alert */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';

const Display = (props) => {
  const { data } = props;
  return (
    <>
      <div>{ data.companyName ? <p>{`Company Name: ${data.companyName}`}</p> : null }</div>
      <div>{ data.symbol ? <p>{`Symbol: ${data.symbol}`}</p> : null }</div>
      <div>{ data.exchange ? <p>{`Exchange: ${data.exchange}`}</p> : null }</div>
      <div>{ data.price ? <p>{`Price: $${data.price}`}</p> : null }</div>
      <div>{ data.currency ? <p>{`Currency: ${data.currency}`}</p> : null }</div>
      <div>{ data.changes ? <p className={ `${data.changes < 0 ? 'negative-change' : 'positive-change'}` }>{`Changes: ${data.changes}`}</p> : <p>{ data.changes ? `Changes: ${data.changes}` : null }</p> }</div>
      <div>{ data.industry ? <p>{`Industry: ${data.industry}`}</p> : null }</div>
      <div>{ data.description ? <p>{`Description: ${data.description}`}</p> : null }</div>
      <div>{ data.ceo ? <p>{`CEO: ${data.ceo}`}</p> : null }</div>
      <div>{ data.sector ? <p>{`Sector: ${data.sector}`}</p> : null }</div>
      <div>{ data.country ? <p>{`Country: ${data.country}`}</p> : null }</div>
      <div>{ data.fullTimeEmployees ? <p>{`Full Time Employees: ${data.fullTimeEmployees}`}</p> : null }</div>
      <div>{ data.phone ? <p>{`Phone: ${data.phone}`}</p> : null }</div>
      <div>{ data.address ? <p>{`Address: ${data.address}`}</p> : null }</div>
      <div>{ data.city ? <p>{`City: ${data.city}`}</p> : null }</div>
      <div>{ data.state ? <p>{`State: ${data.state}`}</p> : null }</div>
      <div>{ data.zip ? <p>{`Zip: ${data.zip}`}</p> : null }</div>
      <div>{ data.website ? <p><i>Website: </i><a href={ data.website } rel='noopener noreferrer' target='_blank'>{data.website}</a></p> : null }</div>
      <div id='com-img'>{ data.image ? <img alt='company-logo' src={ data.image } /> : null }</div>
    </>
  );
};

export default Display;
