import React, { useContext, useEffect } from "react";
import { TextContext } from "../context/Context";

const AddExpensivePage = () => {
    const { state, addexpense, sortByAmount } = useContext(TextContext)
    useEffect(() => {
        addexpense({ description: "Rent", amount: "450", createAt: 200 })
        sortByAmount()
        console.log(state)

    }, [])
    return (<p>{state.expense.length, state.filters.sortBy}</p>);
}
export default AddExpensivePage;