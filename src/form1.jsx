import React, { useState } from 'react';
import './styles.css';
import calendar  from './calendar-3.png';
import  Form2 from './form2';


function Card  ({movies})   {
  const [Updatep,setUpdatep] = useState();
  const  buttonOnClick   =() =>{
    console.log("no borrar",movies);
    setUpdatep(movies);
  }
const movieList = movies.map(movie => (
  <div className='contentMovie' key={movie.imdbID} onClick={buttonOnClick}>
    <h2 className='title'>{movie.Title}</h2>
    <p className='year'>{movie.Year}</p>
    <img src={movie.Poster} alt="Logo de la aplicación" className="poster" />
    <img src={calendar} alt="calendario" className="logo-calendar" />

    {}
    <Form2 movies={movie} />
  </div>
));

return (
  <div>

    <div className='form'>{movieList}
    </div>

    </div>
);

;}

export default Card;
  /* <ul>{movies.map((movie,index)=>(
        <li key={index}>{movie}</li>
    ))}</ul> */