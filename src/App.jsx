import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import Receipt from "./components/Receipt";


function App() {
    return (
        <div >
            <BrowserRouter>
                <Route path="/" exact component={Home}/>
                <Route path="/Menu" exact component={Menu}/>
                <Route path="/Payment" exact component={Payment}/>
                <Route path="/receipt" exact component={Receipt}/>

            </BrowserRouter>

        </div>
    );
}

export default App;
