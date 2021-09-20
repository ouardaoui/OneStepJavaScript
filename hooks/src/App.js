import React,{useState} from 'react';
import BookList from './components/BookList';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeToggle /> 
      </ThemeProvider>
    </div>
  );
}

export default App;

