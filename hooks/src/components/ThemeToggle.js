import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ToggleTheme(){
    const themeContext = useContext(ThemeContext);
    let theme =themeContext.theme
    return (
        <div>
            Current Theme:{theme.islightTheme ? " dark" : " light"}
            <br />
            <button style={theme.islightTheme ? theme.dark : theme.light} onClick={themeContext.toggleTheme}>
                ToggleTheme
            </button>
        </div>
    );
}
