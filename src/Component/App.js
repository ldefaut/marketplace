import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";// import * as Routes from 'Constants/Routes';
import Home from "./Home";
import Navigation from "./Navigation";
import Signin from "./Signin";
import Signup from "./Signup";

class App extends Component{
    render(){
        return(
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/Signin">
                        <Signin />
                    </Route>
                    <Route path="/Signup">
                        <Signup/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;