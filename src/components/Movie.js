import React from 'react';
import PropTypes from 'prop-types';
import  "./Movie.css";
import {Link}from 'react-router-dom'
function Movie({title, year,summary, poster, genres}){
  return (
  <div className='moveie'>
    <Link to={{pathname:'/movie_detail', state:{year, title, summary, poster, genres}}}>
    <img src={poster} alt={title} onError={(e)=>{e.target.onerror = null; e.target.src="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"}}/>
    <div class="movie_data">
      <h3 class="movie_title">{title}</h3>
      <h5 class="movie_year">{year}</h5>
      <ul>
        {genres.map((genre , idx)=>{
          return(
            <li key={idx}>{genre}</li>
          )
        })}
      </ul>
      <p className="movie_summary">{summary}</p>
    </div>
    </Link>
  </div>);
}

Movie.propType={
  title:PropTypes.string.isRequired,
  year:PropTypes.number.isRequired,
  summary:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;