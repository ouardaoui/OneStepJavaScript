import React,{useContext} from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = (props) => {
    const{dispatch} =useContext(BookContext)
    return ( 
        <li onClick ={() => dispatch({type:"delecte_book",id : props.book.id})}>
            <div classname="title">{props.book.title}</div>
            <div classname="author">{props.book.author}</div>
        </li>
     );
}

export default BookDetails;