import React, { useContext } from "react"
import { TextContext } from "../context/Context";
import ExpenseListItem from "./ExpenseListItem";
const ExpenseList = () => {
  const { state, getvisibleexpense } = useContext(TextContext)
  getvisibleexpense(state.expense, state.filters)
  const expense = getvisibleexpense(state.expense, state.filters)
  return (
    <>
      <h1>Expense List</h1>
      {expense.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })}
    </>
  )
}
export default ExpenseList;