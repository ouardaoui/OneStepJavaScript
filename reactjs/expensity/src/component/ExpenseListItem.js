import React, { useContext } from "react"
import { TextContext } from "../context/Context";

const ExpenseListItem = ({ description, createAt, amount, id }) => {
  const { removexpense } = useContext(TextContext)
  return (
    <>
      <h3>{description}</h3>
      <p>{amount}$ - {createAt}</p>
      <button onClick={() => removexpense(id)}>remove</button>
    </>
  )
}
export default ExpenseListItem;