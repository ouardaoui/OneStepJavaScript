import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { AuthProvider } from './contexts/AuthContext';



function App() {
  return (
    <div className="App">
      <ThemeProvider> 
        <AuthProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthProvider>  
      </ThemeProvider>
    </div>
  );
}

export default App;


