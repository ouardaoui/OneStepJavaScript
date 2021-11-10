import React, { useContext, useEffect } from "react"
import { TextContext } from "../context/Context";
import ExpenseListItem from "./ExpenseListItem";
const ExpenseList = () => {
  const { state, addexpense, getvisibleexpense, settextfilter } = useContext(TextContext)
  useEffect(() => {
    addexpense({ description: "water bil", amount: 4500, createAt: 0 })
    addexpense({ description: "Gas bil", amount: 0, createAt: 0 })



  }, [])
  const expense = getvisibleexpense(state.expense, state.filters)
  return (
    <>
      <h1>hello there</h1>
      {expense.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })}
    </>
  )
}
export default ExpenseList;