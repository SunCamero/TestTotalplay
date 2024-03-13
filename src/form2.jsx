import './styles.css'
import React, { useState, useEffect } from 'react';

function Card2({ movieId }) {

  console.log("id en form 2", movieId);

  const apiKey = '9527dabb'; 


  
  const [movie,setMovies]= useState([]);
  useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;
    const timeOutId = setTimeout(()=>{
      fetch(apiUrl)
      .then((response)=>response.json())
      .then((json)=>{
        console.log("RESPUESTA",json);
       // const responseArray = Object.values(json);
        setMovies(json)})
      .catch((error)=>console.error("error al obtener pelicula",error));
  
  },500);
  return ()=>clearTimeout(timeOutId);
  },[movieId]);



 
 return (
  <div className="form2">
    <div className='content-1'>
      <div className='title2'>{movie.Title}</div>
      <img src={movie.Poster} alt="Logo de la aplicación" className="poster2" />
      <div className="date">{movie.Released}</div>
      <div className="punto">*</div>
      <div className="time">{movie.Runtime}</div>
      <div className="type">{movie.Genre}</div>
      <div className="rating">★</div>
    </div>
    <div className='contentStar'>☆☆☆☆☆</div>
    <div className='content-2'>
      <div className='detail'>{movie.Plot}</div>
      <div className='actors'>{movie.Actors}</div>
      <div className='writer'>{movie.Writer}</div>
    </div>
  </div>
);
    
}


export default Card2;