import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from "../component/Contact";
import Portfolio from "../component/Portfolio";
import Home from "../component/Home";
import Header from "../component/Header"
import PortfolioItem from "../component/PortfolioItem";

export default function Approuter() {
    return (
    <Router>
        <Header/>
        
            <Route path="/home" exact={true} component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" exact={true} component={Portfolio}/> 
            <Route path="/portfolio/:id" component={PortfolioItem}/>
        
    </Router>
    );
}
