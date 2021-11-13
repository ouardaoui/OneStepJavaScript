import ExpenseForm from "./ExpenseForm";
import React, { useContext } from "react"
import { TextContext } from "../context/Context";
import { useNavigate } from 'react-router-dom';


const AddExpensivePage = () => {
    const { addexpense } = useContext(TextContext)
    let navigate = useNavigate();
    return (
        <div>
            <h1>Add expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    addexpense(expense)
                    navigate("/")
                }}
                expense={null}
            />
        </div>
    );
}
export default AddExpensivePage;