import React, {Component} from 'react';

class Home extends Component {
    render(){
        return (
            <div>
                <div class="limiter">
            		<div class="container-login100">
            			<div class="wrap-login100 p-t-50 p-b-90">
            				<form class="login100-form validate-form flex-sb flex-w">
            					<span class="login100-form-title p-b-51">
            						Créer un compte
            					</span>
                                
                                <div class="wrap-input100 validate-input" data-validate = "name">
            						<input class="input100" type="text" name="name" placeholder="Name"></input>
            						<span class="focus-input100"></span>
            					</div>
            					
            					<div class="wrap-input100 validate-input" data-validate = "Username is required">
            						<input class="input100" type="text" name="username" placeholder="Username"></input>
            						<span class="focus-input100"></span>
            					</div>
            					
            					<div class="wrap-input100 validate-input" data-validate = "E-mail adress">
            						<input class="input100" type="text" name="E-mail adress" placeholder="E-mail adress"></input>
            						<span class="focus-input100"></span>
            					</div>
            					
            					
            					<div class="wrap-input100 validate-input" data-validate = "Password is required">
            						<input class="input100" type="password" name="pass" placeholder="Password"></input>
            						<span class="focus-input100"></span>
            					</div>
            					
            					<div class="wrap-input100 validate-input" data-validate = "Password is required">
            						<input class="input100" type="password" name="pass" placeholder="Password Confirm"></input>
            						<span class="focus-input100"></span>
            					</div>
            
            					<div class="container-login100-form-btn m-t-17">
            						<button class="login100-form-btn">
            							Create Account
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

export default Home;