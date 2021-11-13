import { useParams } from "react-router";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from 'react-router-dom';
import React, { useContext } from "react";
import { TextContext } from "../context/Context";
const EditExpensivePage = () => {
    const { state, editexpense, removexpense } = useContext(TextContext)
    let navigate = useNavigate();
    const params = useParams()
    const expense = state.expense.find(expense => expense.id === params.id)

    return (
        <div>
            <h1>Edit</h1>
            <p >"Edit expensive page"</p>
            <ExpenseForm
                onSubmit={(expense) => {
                    editexpense(expense.id, expense)
                    navigate("/")


                }}
                expense={expense}
            />
            <button onClick={() => {
                removexpense(expense.id);
                navigate("/")


            }}
            >remove</button>
        </div>
    )
}


export default EditExpensivePage;