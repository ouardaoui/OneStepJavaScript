import React,{createContext,useState} from "react";
export const BookContext =createContext();

export function BookContextProvider(props){
    const [books,setBooks]=useState([
        {name : "name of the wind",id : 1},
        {name : "the way of kings",id : 2},
        {name : "the find empire",id : 3},
        {name : "the hero of ages",id : 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}


