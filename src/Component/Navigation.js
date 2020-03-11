import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {withAutorization} from './Autorization';

class Navigation extends Component{
    render(){
        return (
            <div>
                <ul class="menu-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Signin">Se Connecter</Link>
                    </li>
                    <li>
                        <Link to="/Signup">Créer un Compte</Link>
                    </li>
                    <li>
                        <h1>
                        {this.props.isLogged ? "connecté":"déconnecté"}
                        </h1>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withAutorization(Navigation);