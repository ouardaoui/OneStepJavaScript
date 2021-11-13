import { createContext, useReducer } from "react";
import { Reducers } from "../reducer/reducer";
import { v4 as uuid } from 'uuid';
import moment from "moment";

export const TextContext = createContext();
const Provider = ({ children }) => {
  const initState = {
    expense: [],
    filters: {
      text: "",
      sortBy: "date",
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month"),
    }
  }
  const [state, dispatch] = useReducer(Reducers(), initState);
  //AD_EXPENSIVE
  const addexpense = ({ description, amount, createAt = 0 } = {}) =>
    dispatch({
      type: "ADD_EXPENSE", expense: { description, amount, createAt, id: uuid() }
    })

  //REMOVE_EXPENSE
  const removexpense = (id) => {
    dispatch({
      type: "REMOVE_EXPENSE", id
    })
  }


  //EDIT_EXPENSE
  const editexpense = (id, update) =>
    dispatch({
      type: "EDIT_EXPENSE", id, update
    })

  //SET_TEXT_FILTER
  const settextfilter = (text) =>
    dispatch({
      type: "SET_TEXT_FILTER", text
    })

  //SORT_BY_DATE
  const sortByDate = () => {
    dispatch({
      type: "SORT_BY_DATE"
    })
  }
  //SORT_BY_AMOUNT
  const sortByAmount = () => {
    dispatch({
      type: "SORT_BY_AMOUNT"
    })
  }
  //SET_START_DATE
  const setStartDate = (startDate) =>
    dispatch({
      type: "SET_START_DATE", startDate
    })


  //SET_END_DATE
  const setEndDate = (endDate) => {
    dispatch({
      type: "SET_END_DATE", endDate
    })
  }
  // GET_VISIBLE_EXPENSE
  const getvisibleexpense = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
      // using typeof and or for handling undifined error(aontherword to valide undifined case)
      const createAtMomet = moment(expense.createAt)
      const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMomet, "day") : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMomet, "day") : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
      if (sortBy === "date") {
        return a.createAt < b.createAt ? 1 : -1

      } else if (sortBy === "amount") {

        return a.amount < b.amount ? 1 : -1
      }
    })
  }
  return (
    <TextContext.Provider value={{ state, addexpense, removexpense, editexpense, settextfilter, sortByAmount, sortByDate, setEndDate, setStartDate, getvisibleexpense }}>
      {children}
    </TextContext.Provider>
  )
}
export default Provider;