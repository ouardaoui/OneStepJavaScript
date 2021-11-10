import { Link } from "react-router-dom";
import React from "react";
const Header = () => {
    return (
        <div>
            <h1>Expensify</h1>
            <Link to="/"  >go home</Link>
            <Link to="add" >create expense</Link>
            <Link to="edit" >edit expense </Link>
            <Link to="help" >help</Link>

        </div>
    )
}
export default Header;