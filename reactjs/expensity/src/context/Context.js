import { createContext, useReducer } from "react";
import { Reducer } from "../reducer/reducer";

export const TestContext = createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, 0);
  const increment = (payload) => {
    dispatch({ type: "INCREMENT", payload })
  }
  const decrement = (payload) => {
    dispatch({ type: "DECREMENT", payload })
  }
  const reset = () => {
    dispatch({ type: "RESET" })
  }


  return (
    <TestContext.Provider value={{ state, increment, decrement, reset }}>
      {children}
    </TestContext.Provider>
  )
}
export default Provider;