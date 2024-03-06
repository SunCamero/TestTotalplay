import React, { useState } from 'react';
import './App.css';

function SearchBar({text,setText}) {
 // const  textOnchange = (event) => {
  //    setText(event.target.value)
  //}
   return (
     <div >
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className='bar' />
      </div>
      
  )
}

export default SearchBar;





