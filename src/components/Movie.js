import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, year,rating}){
  return (
  <div>
    <h4>{title}</h4>
    <h3>{year}</h3>
    <em>{rating}</em>
  </div>);
}

Movie.propType={
  title:PropTypes.string.isRequired,
  year:PropTypes.number.isRequired,
  nating:PropTypes.string.isRequired,
};
export default Movie;