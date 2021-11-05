import React, { useContext, useState } from "react";
import { TestContext } from "../context/Context";
const MyTest = () => {
  const { state, increment, decrement, reset } = useContext(TestContext)
  const [payload, setPayload] = useState(1)
  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input type="number" value={payload} onChange={(e) => { setPayload(e.target.value) }} />
        <input type="submit" />
      </form>
      <button onClick={() => increment(payload)}>+{payload}</button>
      <button onClick={() => decrement(payload)}>-{payload}</button>
      <button onClick={() => reset()}>0</button>
      <p>"just testing"{state}</p>
    </div>
  )
}
export default MyTest;