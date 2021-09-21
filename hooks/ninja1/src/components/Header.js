import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header(){
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            Header
            <hr />
        </div>
    );
}