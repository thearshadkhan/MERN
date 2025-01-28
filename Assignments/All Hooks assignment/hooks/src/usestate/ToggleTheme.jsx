import { useState } from "react"
import React from 'react'

const ToggleTheme = () => {
    const [bgColor, setBgColor] = useState('black')
    const [txt,setTxt]=useState('white')
    const changeColor = () => {
        if (bgColor === 'black') {
          setBgColor('white')
          setTxt('black');
          }
        if(bgColor==='white'){ setBgColor('gray')
            setTxt('red');
        }
        if(bgColor==='gray'){ setBgColor('black')
            setTxt('white');
        }
        }
    


  return (
    <div className="flex flex-col items-center justify-center">
        <h1 style={{backgroundColor:bgColor,color:txt}}
        
        >Toggle Theme</h1>
        <button onClick={changeColor}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition -center"
        >Toggle Theme</button>
        
        
    </div>
  )
}

export default ToggleTheme