import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import Receipt from "./components/Receipt";
import { createStore } from 'redux'
import reducer from './reducers/index'
import OrderHistoryPage from "./components/OrderHistoryPage";
import Inventory from "./components/Inventory";
import NavbarApp from "./components/NavbarApp";
import SaleTrend from "./components/SaleTrend";


function App() {
    return (
        <div >
            <BrowserRouter>
                <NavbarApp/>
                <Route path="/" exact component={Home}/>
                <Route path="/Menu" exact component={Menu}/>
                <Route path="/Payment" exact component={Payment}/>
                <Route path="/receipt" exact component={Receipt}/>
                <Route path="/OrderHistory" exact component={OrderHistoryPage}/>
                <Route path="/Inventory" exact component={Inventory}/>
                <Route path="/SalesTrend" exact component={SaleTrend}/>

            </BrowserRouter>

        </div>
    );
}

export default App;
