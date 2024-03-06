import React from 'react';
import logoImage  from './logo.png';
import './App.css';

const Header = ({movies}) => {
  console.log("movuess en header",movies.length);
  const result = movies.length;
  return (
    <div className="header">
         <img src={logoImage} alt="Logo de la aplicación" className="logo-movie" />
         <p className='result'> Found {result} result</p>
    

    </div>
     
  );

};

export default Header;



