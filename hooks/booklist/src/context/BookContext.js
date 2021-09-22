import React ,{createContext,useReducer,useEffect} from "react";
import { reducer } from "./reducer/Bookreducer";

export const BookContext = createContext();

const BookProvider = (props) => {
    const [books,dispatch] = useReducer(reducer,[],()=>{
        const localData = localStorage.getItem("books")
        return localData ?  JSON.parse(localData) : []
    })
    useEffect(() =>{
        localStorage.setItem("books",JSON.stringify(books))
    },[books]);
    return ( 
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookProvider;



