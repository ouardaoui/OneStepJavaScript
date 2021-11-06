import React, { useContext, useEffect } from "react";
import { TestContext } from "../context/Context";
const MyTest = () => {
  const { state, dispatch } = useContext(TestContext)
  useEffect(() => {
    dispatch({ type: "ADD_EXPENSIVE", expense: { description: "hello", amount: 500 } })

  }, [])
  console.log(state)
  return (
    <div>
      <p>"just testing"</p>
    </div>
  )
}
export default MyTest;