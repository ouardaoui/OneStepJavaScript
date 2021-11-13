import moment from "moment";

export const ExpenseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense]
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.id)
    case "EDIT_EXPENSE":
      return (state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense, ...action.update
          }
        } else {
          return expense
        }
      }))
    // return state.map((expense) => expense.id === action.id ? console.log(expense) : console.log("hi"))
    default:
      return state;
  }
}
export const FilterReducer = (state = {
  text: "",
  sortBy: "data",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
}, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text }
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" }
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" }
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate }
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate }
    default:
      return state;
  }
}
export const Reducers = (reducers = { expense: ExpenseReducer, filters: FilterReducer }) => {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  }
}
