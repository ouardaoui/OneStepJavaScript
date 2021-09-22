import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { AuthProvider } from './contexts/AuthContext';
import { BookContextProvider } from './contexts/BookContext';





function App() {
  return (
    <div className="App">
      <ThemeProvider> 
        <AuthProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthProvider>  
      </ThemeProvider>
    </div>
  );
}

export default App;


