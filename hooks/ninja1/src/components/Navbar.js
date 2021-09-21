import React, { Component,useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

export default function Navbar(){ 
  const {light,dark,islightTheme} = useContext(ThemeContext)
  const{isAuthenticated,toggleAuth}=useContext(AuthContext)
  const theme = islightTheme ? light : dark
  console.log(isAuthenticated)
  
    return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
    <h1>Context App</h1>
    <div onClick={toggleAuth}>
      {isAuthenticated ? "logged in" : "Logged out"}
    </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </nav>
    );
}
