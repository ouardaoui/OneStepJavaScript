import {Link}from "react-router-dom";
import PortfolioItem from "./PortfolioItem";
const Portfolio = (props) => {
    console.log(props.match.params)
    return ( 
        <div>
            <h1>My work</h1>
            <p>checkout the following things i ve done :</p>
            <Link to="/portfolio/1">item1</Link>
            <Link to="/portfolio/2">item2</Link>
        </div>
    );
}
export default Portfolio;