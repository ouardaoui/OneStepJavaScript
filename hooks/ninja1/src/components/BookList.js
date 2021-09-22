// import React,{useContext}  from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';


// const BookList = () =>  {
//   const Context = useContext(ThemeContext)
//   console.log(Context)
  
//     return ( 
//      <div>
//      </div>
//     );
// }

 
// export default BookList;
import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

function BookList(){
    const {light,dark,islightTheme} = useContext(ThemeContext)
    const {books} =useContext(BookContext)
    const theme = islightTheme ? light : dark;
    console.log(books)
    return ( 
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          {books.map((book)=>{return(
            <li style={{ background: theme.ui }} key={book.id}>{book.name}</li>
            
          )})}
        </ul>
      </div>
    );
}

 
export default BookList;
