/* eslint-disable no-alert */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';

const Display = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((index) => (
        <div key={ index.key }>
          <div>{ index.companyName ? <p>{`Company Name: ${index.companyName}`}</p> : null }</div>
          <div>{ index.symbol ? <p>{`Symbol: ${index.symbol}`}</p> : null }</div>
          <div>{ index.exchange ? <p>{`Exchange: ${index.exchange}`}</p> : null }</div>
          <div>{ index.price ? <p>{`Price: $${index.price}`}</p> : null }</div>
          <div>{ index.currency ? <p>{`Currency: ${index.currency}`}</p> : null }</div>
          <div>{ index.changes ? <p className={ `${index.changes < 0 ? 'negative-change' : 'positive-change'}` }>{`Changes: ${index.changes}`}</p> : <p>{ index.changes ? `Changes: ${index.changes}` : null }</p> }</div>
          <div>{ index.industry ? <p>{`Industry: ${index.industry}`}</p> : null }</div>
          <div>{ index.description ? <p>{`Description: ${index.description}`}</p> : null }</div>
          <div>{ index.ceo ? <p>{`CEO: ${index.ceo}`}</p> : null }</div>
          <div>{ index.sector ? <p>{`Sector: ${index.sector}`}</p> : null }</div>
          <div>{ index.country ? <p>{`Country: ${index.country}`}</p> : null }</div>
          <div>{ index.fullTimeEmployees ? <p>{`Full Time Employees: ${index.fullTimeEmployees}`}</p> : null }</div>
          <div>{ index.phone ? <p>{`Phone: ${index.phone}`}</p> : null }</div>
          <div>{ index.address ? <p>{`Address: ${index.address}`}</p> : null }</div>
          <div>{ index.city ? <p>{`City: ${index.city}`}</p> : null }</div>
          <div>{ index.state ? <p>{`State: ${index.state}`}</p> : null }</div>
          <div>{ index.zip ? <p>{`Zip: ${index.zip}`}</p> : null }</div>
          <div>{ index.website ? <p><i>Website: </i><a href={ index.website } rel='noopener noreferrer' target='_blank'>{index.website}</a></p> : null }</div>
          <div id='com-img'>{ index.image ? <img alt='company-logo' src={ index.image } /> : null }</div>
        </div>
      ))}
    </>
  );
};

export default Display;
