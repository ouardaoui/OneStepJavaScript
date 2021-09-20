import React, { Component,useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Navbar(){ 
  const {light,dark,islightTheme} = useContext(ThemeContext)
  
  const theme = islightTheme ? light : dark
  
    return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
    <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </nav>
    );
}
