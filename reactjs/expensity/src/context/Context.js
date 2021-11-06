import { createContext, useReducer, useEffect } from "react";
import { Reducers } from "../reducer/reducer";
import { v4 as uuid } from 'uuid';

export const TestContext = createContext();
const Provider = ({ children }) => {
  const initState = {
    expense: [],
    filters: {
      text: "",
      sortBy: "data",
      startDate: undefined,
      endDate: undefined
    }
  }
  const [state, dispatch] = useReducer(Reducers(), initState);

  //AD_EXPENSIVE
  const addexpense = ({ description, amount } = {}) => ({
    type: "ADD_EXPENSE", expense: { description, amount, id: uuid() }
  })
  //REMOVE_EXPENSE
  const removexpense = (id) => ({
    type: "REMOVE_EXPENSE", id
  })
  //EDIT_EXPENSE
  const editexpense = (id, update) => ({
    type: "EDIT_EXPENSE", id, update
  })
  const settextfilter = (text) => ({
    type: "SET_TEXT_FILTER", text
  })

  const expense1 = (addexpense({ description: "Rent", amount: 300 }))
  const expense2 = (addexpense({ description: "Rent", amount: 4500 }))
  useEffect(() => {
    dispatch(expense1)
    dispatch(expense2)
    // dispatch(removexpense(expense1.expense.id))
    dispatch(editexpense(expense2.expense.id, { amount: 450 }))
    dispatch(settextfilter("rent"))
    dispatch(settextfilter("onther"))
  }, [])

  console.log(state)
  return (
    <TestContext.Provider value={{ state, dispatch }}>
      {children}
    </TestContext.Provider>
  )
}
export default Provider;