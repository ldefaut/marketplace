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
        console.log(this.props); // this.props.isLogged
        return <h1>{this.props.isLogged ? "Connecté" : "Se Connecter"}</h1>;
    }
}

const Titre2 = withAutorization(Titre);

class Bouton extends Component{
    render(){
        console.log(this.props);
        return <button onClick={this.props.toLogin}>Se connecter</button>;
    }
}

const Bouton2 = withAutorization(Bouton);

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
                </Router>
                <Titre/>
                <Titre2/>
                <Bouton/>
            </AutorizationProvider>
        )
    }
}

export default App;