import React from 'react';
import './styles.css';
import calendar  from './calendar-3.png';

function Card  ({movies})   {
 
const movieList = movies.map(movie => (
  <div className='contentMovie' key={movie.imdbID}>
    <h2 className='title'>{movie.Title}</h2>
    <p className='year'>{movie.Year}</p>
    <img src={movie.Poster} alt="Logo de la aplicación" className="poster" />
    <img src={calendar} alt="calendario" className="logo-calendar" />

    {/* Otros elementos según tus necesidades */}
  </div>
));

return (
    <div className='form'>{movieList}</div>
);
;}

export default Card;
  /* <ul>{movies.map((movie,index)=>(
        <li key={index}>{movie}</li>
    ))}</ul> */