import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import Lobby from "./Lobby";

export default function App(props) {
    return (
        <Router>
            <Switch>
                {/* Order is important, more complex routes first */}
                <Route path='/lobby'>
                    <Lobby />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}