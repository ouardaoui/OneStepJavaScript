import React,{useContext,useState} from "react";
import { BookContext } from "../context/BookContext";

const BookFrom = () => {
    const {dispatch}=useContext(BookContext)
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const handleAddBook=(e)=>{
        e.preventDefault();
        dispatch({type:"add_book",book :{title,author}});
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleAddBook}>
            <input type="text" placeholder="book's title" value={title}
            onChange={(e)=>setTitle(e.target.value)} required/>
            <input type="text" placeholder="author's name" value={author}
            onChange={(e)=>setAuthor(e.target.value)} required/>
            <input type="submit" value="add book"/>
        </form>
     );
}
 
export default BookFrom;