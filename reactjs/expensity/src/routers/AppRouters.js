import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../component/Header"
import Notfound from "../component/Notfound"
import HelpExpensivePage from "../component/HelpExpensivePage"
import EditExpensivePage from "../component/EditExpensivePage"
import AddExpensivePage from "../component/AddExpensivePage"
import ExpensiveDashboardPage from "../component/ExpensiveDashboardPage"

import Provider from "../context/Context";
const AppRouters = () => {

    return (
        <BrowserRouter>
            <Provider>
                <Header />
                <Switch>
                    <Route path="/" component={ExpensiveDashboardPage} exact />
                    <Route path="/add" component={AddExpensivePage} />
                    <Route path="/edit/:id" component={EditExpensivePage} />
                    <Route path="/help" component={HelpExpensivePage} />
                    <Route component={Notfound} />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}

export default AppRouters;
