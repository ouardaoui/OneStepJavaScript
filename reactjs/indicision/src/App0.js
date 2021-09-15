import { useState, useEffect }from 'react';
import './App.css';

function App0() {
    const [visibility,setVisibility] =useState(false)

    return(
        <div>
            <h1>visibility Toggle</h1>
            <button onClick={() => setVisibility(!visibility)}>{visibility ? "hide details" : "show details"}</button>
            {visibility && (<p>hey. They are some details you can now see!</p>)} 
        </div>
    )
}


export default App0;
