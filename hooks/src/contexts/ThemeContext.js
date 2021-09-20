// import React,{useState, useContext} from "react";
// const ThemeContext = React.createContext();

// export default function ThemeContext(props) {
//         const [theme,setTheme] =useState({     
//             isLightTheme : true,
//             light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//             dark: { syntax: '#ddd', ui: '#333', bg: '#555'},
//         }) 

//         ToggleTheme = () =>{
//             setTheme ({isLightTheme : !theme.isLightTheme})
//         }
//         return (
//             <ThemeContext.Provider value = {{theme,setTheme,ToggleTheme}}>
//                 {props.children}
//             </ThemeContext.Provider>
//         );
// }
import React, {useState} from 'react';

export const ThemeContext = React.createContext();

export function ThemeProvider(Props){
    const [theme, setTheme] = useState({
        dark : { bg:'blue',syn: '#fff'},
        light : {bg:'#fff',syn: 'blue'},
        islightTheme : true
    }
    );

    function toggleTheme(){
        setTheme({
        dark : { background:'blue',color: '#fff'},
        light : {background:'#fff',color: 'blue'},
        islightTheme : !theme.islightTheme });
        return theme 
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {Props.children}
        </ThemeContext.Provider>
    );

}
