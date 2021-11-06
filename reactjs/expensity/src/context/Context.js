import { createContext, useReducer } from "react";
import { Reducer } from "../reducer/reducer";
import { v4 as uuid } from 'uuid';

export const TestContext = createContext();
const Provider = ({ children }) => {
  const initState = {
    expense: [],
    filters: {
      test: "",
      sortBy: "data",
      startDate: undefined,
      endDate: undefined
    }
  }
  const [state, dispatch] = useReducer(Reducer, initState);

  return (
    <TestContext.Provider value={{ state, dispatch }}>
      {children}
    </TestContext.Provider>
  )
}
export default Provider;