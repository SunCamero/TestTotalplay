import React, { useState } from 'react';
import './styles.css';
import calendar from './calendar-3.png';
import  Form2 from './form2';

function Card({ movies }) {
  const [selectedMovieId, setSelectedMovieId] = useState(null); 
  const buttonOnClick = (id) => {
    console.log("id recibido", id);
    setSelectedMovieId(id);
  }

  const movieList = movies.map(movie => (
    <div className='contentMovie' key={movie.imdbID} onClick={() => buttonOnClick(movie.imdbID)}>
      <h2 className='title'>{movie.Title}</h2>
      <p className='year'>{movie.Year}</p>
      <img src={movie.Poster} alt="Logo de la aplicación" className="poster" />
      <img src={calendar} alt="calendario" className="logo-calendar" />
    </div>
  ));

  const renderNewComponent = () => {
    if (selectedMovieId) {
      return <Form2 movieId={selectedMovieId} />;
    }
    return null; 
  }

  return (
    <div>
      <div className='form'>{movieList}</div>
      {renderNewComponent()}
    </div>
  );
}

export default Card;
