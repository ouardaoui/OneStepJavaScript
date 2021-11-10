import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/Header"
import Notfound from "../component/Notfound"
import HelpExpensivePage from "../component/HelpExpensivePage"
import EditExpensivePage from "../component/EditExpensivePage"
import AddExpensivePage from "../component/AddExpensivePage"
import ExpensiveDashboardPage from "../component/ExpensiveDashboardPage"
import Test from "../component/Test";
import Provider from "../context/Context";
const AppRouters = () => {

    return (
        <Provider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ExpensiveDashboardPage />} />
                    <Route path="add" element={<AddExpensivePage />} />
                    <Route path="edit/:id" element={<EditExpensivePage />} />
                    <Route path="help" element={<HelpExpensivePage />} />
                    <Route path="test" element={<Test info={5} />} />
                    <Route element={<Notfound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default AppRouters;
