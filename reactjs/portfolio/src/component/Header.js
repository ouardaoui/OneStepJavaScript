import {NavLink} from "react-router-dom";
const Header = () => {
    return ( 
        <div>
            <h1>Portfolio</h1>
            <NavLink to="/home" exact={true}>home</NavLink>
            <NavLink to="/portfolio" exact={true}>portfolio</NavLink>
            <NavLink to="/contact">contact</NavLink>
        </div>
    );
}

export default Header;