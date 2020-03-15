import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {withAutorization} from './Autorization';
import logo from "./logo_market_place.png";

class Navigation extends Component{
    render(){
        return (
            <div>
                <ul class="menu-nav">
                    <li class="logo">
                        <Link to="/"><img src={logo}/></Link>
                    </li>
                    <li class="f-right">
                        {this.props.isLogged ? "connecté ":<ul><li>
                        <Link to="/Signin">Se Connecter</Link>
                    </li>
                    </ul>}
                    
                    </li>
                    <li class="f-right">
                        <Link to="/Signup" onClick={this.props.toLogin}>{this.props.isLogged ? "": "Créer un Compte"}</Link>
                    </li>
                    <li class="f-right">
                        <Link to="/" onClick={this.props.toLogin}>
                            {this.props.isLogged ? "Se déconnecter": ""}
                        </Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default withAutorization(Navigation);