import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/about' component={Login} />
                <Route path='/contact'component={Login} />
                <Route path='/products/:productId' component={ProductDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouterApp;