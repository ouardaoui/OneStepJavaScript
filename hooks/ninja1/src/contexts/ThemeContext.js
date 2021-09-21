
import React, {useState} from 'react';

export const ThemeContext = React.createContext();

export function ThemeProvider(Props){
    const [theme,setTheme] =useState({     
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'},
        isLightTheme : true,
    }) 

    function toggleTheme(){
        setTheme({
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'},
        islightTheme : !theme.islightTheme });
    }

    return (
        <ThemeContext.Provider value={{...theme, toggleTheme}}>
            {Props.children}
        </ThemeContext.Provider>
    );

}
