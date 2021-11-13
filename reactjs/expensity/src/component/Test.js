import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker, DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";


function App() {
  const [date, setDate] = useState()
  const [focused, setFocused] = useState()
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };




  return (
    <div className="App">
      <SingleDatePicker
        date={date}
        onDateChange={(date) => setDate(date)}
        focused={focused}
        onFocusChange={({ focused }) => setFocused(focused)}
        id="date"
      />
      <DateRangePicker
        startDate={startDate}
        startDateId="tata-start-date"
        endDate={endDate}
        endDateId="tata-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
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