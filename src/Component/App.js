import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";// import * as Routes from 'Constants/Routes';
import Home from "./Home";
import {withAutorization} from './Autorization';
import {AutorizationProvider} from './Autorization';
import Navigation from "./Navigation";
import Signin from "./Signin";
import Signup from "./Signup";



class Titre extends Component{
    render(){
        return <h1>{this.props.isLogged ? "Connecté" : "Se Connecter"}</h1>;
    }
}

const Titre2 = withAutorization(Titre);

export class Bouton extends Component{
    render(){
        console.log("bouton props",this.props);
        return <button onClick={this.props.toLogin}>
                Se Connecter
            </button>;
    }
}



export const Bouton2 = withAutorization(Bouton);

class App extends Component{
    render(){
        return(
            <AutorizationProvider>
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
                    <Titre/>
                </Router>
            </AutorizationProvider>
        )
    }
}

export default App;