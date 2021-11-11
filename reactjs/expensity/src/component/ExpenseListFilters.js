import React, { useContext } from "react"
import { TextContext } from "../context/Context";

const ExpenseListFilters = () => {
  const { state, settextfilter, sortByDate, sortByAmount } = useContext(TextContext)

  return (
    <div>
      <input
        type="text"
        value={state.filters.text}
        onChange={(e) => settextfilter(e.target.value)} />
      <select value={state.filters.sortBy}
        onChange={(e) => {
          if (e.target.value === "date") {
            sortByDate()
          } else if (e.target.value === "amount") {
            sortByAmount()
          }
        }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div >
  )
}
export default ExpenseListFilters;