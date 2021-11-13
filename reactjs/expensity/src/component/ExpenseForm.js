import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";

const ExpenseForm = (props) => {

  const [focused, setFocused] = useState()
  const [state, setState] = useState({
    description: props.expense ? props.expense.description : "",
    amount: props.expense ? (props.expense.amount / 100).toString() : "",
    note: props.expense ? props.expense.note : "",
    createAt: props.expense ? moment(props.expense.createAt) : moment(),
    error: ""
  })
  const onChangeDescription = (e) => {
    setState({ ...state, description: e.target.value })
  }

  const onChangeNote = (e) => {
    setState({ ...state, note: e.target.value })
  }

  const onChangeAmount = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setState({ ...state, amount })
    }
  }
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!state.description || !state.amount) {
      setState({ ...state, error: "required description and amount" })
    } else {
      setState({ ...state, error: "" })
      props.onSubmit({
        description: state.description,
        amount: parseFloat(state.amount, 10) * 100,
        createAt: state.createAt.valueOf(),
        note: state.note
      })
    }
  }
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        {state.error && (<p>{state.error}</p>)}
        <input
          type="text"
          placeholder="description"
          value={state.description}
          onChange={onChangeDescription}
          autoFocus
        />
        <input
          type="text"
          placeholder="amount"
          value={state.amount}
          onChange={onChangeAmount}
        />
        <textarea
          placeholder="Add a note for your expense(optional)"
          value={state.note}
          onChange={onChangeNote}
        >
        </textarea>
        <SingleDatePicker
          date={state.createAt}
          onDateChange={(date) => setState({ ...state, createAt: date })}
          focused={focused}
          onFocusChange={({ focused }) => setFocused(focused)}
          id="date"
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <button type="submit">Add Expense</button>
      </form>
    </>
  )
}
export default ExpenseForm;