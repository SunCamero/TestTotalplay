import logo from './logo.svg';
import './App.css';
import Component from './component';
import  Card from './form1';
import  Form2 from './form2';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

 
function App() {
 const [text, setText] = useState('');
 const [movies,setMovies]= useState([]);
  useEffect(() => {
  
    const url = `https://www.omdbapi.com/?apikey=9527dabb&s=${text}`;
    const timeOutId = setTimeout(()=>{
    if(text.length > 3){
      fetch(url)
      .then((response)=>response.json())
      .then((json)=>{
        console.log("este console es solo para  el response ",json.Search);
       // const responseArray = Object.values(json);
        setMovies(json.Search)})
      .catch((error)=>console.error("error al obtener pelicula",error));
    }
  },500);
  return ()=>clearTimeout(timeOutId);
  },[text]);
    
//const filterMovies = (movies,text) => {
 // if(!text){
   // return movies;
  ////}

  //return movies.filter((movie)=> movie.toLowerCase().includes(text.toLowerCase()));
//};
//const filteredMovies = filterMovies(movies,text)
  return (
    <div className="App">
      <header className="App-header">
       <Card movies={movies}/>
       <Form2 />
       <Header   movies={movies} />
       <SearchBar query={text} setText={setText} />
       
  
      </header>
    </div>
  );
}

export default App;
