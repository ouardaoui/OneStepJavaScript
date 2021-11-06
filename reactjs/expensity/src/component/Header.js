import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact>go home</NavLink>
            <NavLink to="/add" activeClassName="is-active">create expense</NavLink>
            <NavLink to="/edit" activeClassName="is-active">edit expense </NavLink>
            <NavLink to="/help" activeClassName="is-active">help</NavLink>

        </div>
    )
}
export default Header;