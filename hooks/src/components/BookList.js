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
import { ThemeContext } from '../contexts/ThemeContext';

function BookList(){
    const {light,dark,islightTheme} = useContext(ThemeContext)
    const theme = islightTheme ? light : dark;
    return ( 
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>the way of kings</li>
          <li style={{ background: theme.ui }}>the name of the wind</li>
          <li style={{ background: theme.ui }}>the final empire</li>
        </ul>
      </div>
    );
}

 
export default BookList;
