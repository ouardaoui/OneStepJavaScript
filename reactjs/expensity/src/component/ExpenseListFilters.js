import React, { useContext, useState } from "react";
import { DateRangePicker } from "react-dates";
import { TextContext } from "../context/Context";

const ExpenseListFilters = () => {
  const { state, settextfilter, sortByDate, sortByAmount, setEndDate, setStartDate } = useContext(TextContext)
  const filters = state.filters
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate);
  };

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => settextfilter(e.target.value)} />
      <select value={filters.sortBy}
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
      <DateRangePicker
        startDate={state.filters.startDate}
        startDateId="tata-start-date"
        endDate={state.filters.endDate}
        endDateId="tata-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
      />
    </div >
  )
}
export default ExpenseListFilters;