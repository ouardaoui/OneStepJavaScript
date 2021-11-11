import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters"

const ExpensiveDashboardPage = () => {
    return (
        <>
            <ExpenseListFilters />
            <ExpenseList />
        </>
    );
}
export default ExpensiveDashboardPage;