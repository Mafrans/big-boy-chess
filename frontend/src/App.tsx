import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}