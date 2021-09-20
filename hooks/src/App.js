import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeProvider>
    </div>
  );
}

export default App;
