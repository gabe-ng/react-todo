import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import TodosContainer from "../Containers/TodosContainer";

export default (
    <Switch>
        <Route path='/todos' component={TodosContainer} />
        <Route path='/' exact component={Home} />
    </Switch>
)