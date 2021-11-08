import React, { useContext, useEffect } from "react";
import { TextContext } from "../context/Context";

const AddExpensivePage = () => {
    const { state, addexpense } = useContext(TextContext)
    useEffect(() => {
        addexpense({ description: "Rent", amount: "450", createAt: 200 })
        addexpense({ description: "Coffee", amount: "400", createAt: 400 })
        addexpense({ description: "Rent", amount: "450", createAt: 20 })
        addexpense({ description: "Rent", amount: "450", createAt: 20 })
        console.log(state)

    }, [])
    return (<p>{state.expense.length}</p>);
}
export default AddExpensivePage;