import React,{useReducer} from "react";
const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
         case "increment":
            return {count : state.count +action.incrementby}
        case 'decrement':
            return {count: state.count - 1};
        case "reset" :
          return {count : 0}
        case "set":
          return {count :action.count}
        default:
            throw new Error();
  }
}
const HandleIncrement = ({incrementby = 1} ={}) =>({
  type : "increment",
  incrementby 
} 
)
const Handleset =({count}={}) =>({
  type :"set",
  count
})

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
      <button onClick={() => dispatch(HandleIncrement({incrementby:5}))}>+5</button>
      <button onClick={() => dispatch(HandleIncrement())}>+1</button>
      <button onClick={() => dispatch(HandleIncrement({incrementby:100}))}>+100</button>
      <button onClick={() => dispatch({type: 'reset'})}>0</button>
      <button onClick={() => dispatch(Handleset({count :100}))}>set</button>
    </div>
  );
}
export default Counter; 