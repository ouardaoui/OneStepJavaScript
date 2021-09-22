import React from "react";
import BookFrom from "./component/BookForm";
import BookList from "./component/BookList";
import Navbar from "./component/navbar.";
import BookProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Navbar/>
        <BookList/>
        <BookFrom />
      </BookProvider>
    </div>
  );
}

export default App;
