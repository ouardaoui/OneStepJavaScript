import { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = () => {
  const now = moment()
  console.log(now.format("MMM Do, YYYY"))
  const [state, setState] = useState({
    description: "",
    amount: "",
    note: "",
    createAt: moment(),
    clanderFocused: false
  })
  const onChangeDescription = (e) => {
    setState({ ...state, description: e.target.value })
  }

  const onChangeNote = (e) => {
    setState({ ...state, note: e.target.value })
  }

  const onChangeAmount = (e) => {
    const note = e.target.value
    if (note.match(/^\d*(\.\d{0,2})?$/)) {
      setState({ ...state, amount: e.target.value })
    }
  }

  return (
    <>
      <form>
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
          <SingleDatePicker
            date={state.createAt} // momentPropTypes.momentObj or null
            onDateChange={createAt => setState({ createAt })} // PropTypes.func.isRequired
            focused={state.clanderFocused} // PropTypes.bool
            onFocusChange={({ focused }) => setState({ clanderFocused: focused })} // PropTypes.func.isRequired
          />
        </textarea>
        <button>Add Expense</button>
      </form>
    </>
  )
}
export default ExpenseForm;