import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

function App() {
  const [state, setState] = useState({ date: null, focused: false })

  console.log(state)
  return (
    <div className="App">
      <SingleDatePicker
        date={state.data}
        onDateChange={(date) => setState({ ...state, date })}
        focused={state.focused}
        onFocusChange={({ focused }) => setState({ ...state, focused })}
        id="date"
      />
    </div>
  );
}
const HigerOrderCompenent = (WrappedCompenent) => {
  return (props) => (
    <>
      {props.info ? (<WrappedCompenent {...props} />) :
        (<p>please login</p>)}
    </>
  )
}

const Test = HigerOrderCompenent(App)

export default Test;