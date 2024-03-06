import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useState } from 'react'

function Component() {
    const [text,setText] = useState();
    const  textOnchange = (event) => {
        setText(event.target.value)
    }
     return (
       <div>
        <input type="text" value={text} onChange={textOnchange} />
        <button>Actualizar</button>
        <p>text input : {text}</p>
        <p>texto actualizado</p>
        </div>
        
    )
}

export default Component
