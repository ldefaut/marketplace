import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {Bouton2} from './App';
import {withAutorization} from './Autorization';
import {Firebase} from '../firebase.js'


class Signin extends Component {
    
    handleChange= (event)=>{
        // console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (event) => {
        console.log("Email", this.state)
        event.preventDefault();
    }
    
    render(){
        return (
            <div>
                <div class="limiter">
            		<div class="container-login100">
            			<div class="wrap-login100 p-t-50 p-b-90">
            				<form class="login100-form validate-form flex-sb flex-w" onSubmit={this.onSubmit}>
            					<span class="login100-form-title p-b-51">
            						Se connecter
            					</span>
            
            					
            					<div class="wrap-input100 validate-input" data-validate = "Username is required">
            						<input class="input100" type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
            						<span class="focus-input100"></span>
            					</div>
            					
            					
            					<div class="wrap-input100 validate-input" data-validate = "Password is required">
            						<input class="input100" type="password" name="pass" placeholder="Password" onChange={this.handleChange}></input>
            						<span class="focus-input100"></span>
            					</div>
            					
            					<div class="flex-sb-m w-full p-t-3 p-b-24">
            					    <div class="signup">
            						    <h5>Pas de compte ? <Link to="/Signup">Créer un compte</Link></h5>
            						</div>
            					</div>
            
            					<div class="container-login100-form-btn m-t-17">
            						<button class="login100-form-btn" onClick={this.props.toLogin}>
                                        Se Connecter
                                    </button>
            					</div>
            
            				</form>
            			</div>
            		</div>
            	</div>
            </div>

        );
    }
}

export default withAutorization(Signin);