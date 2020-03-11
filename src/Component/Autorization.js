import React, {Component} from 'react';

export const AutorizationContext = React.createContext(null);
export class AutorizationProvider extends Component{
    state = {
        isLogged : true,
        toLogin : ()=> this.setState({isLogged : true}),
    }
    render (){
        return(
            <AutorizationContext.Provider value={this.state}>
            {this.props.children}
            </AutorizationContext.Provider>
            )
    }
}

export const withAutorization = (Component) =>{
    class NewComponent extends Component{
        render(){
            return(
                <AutorizationContext.Consumer>
                {value => <Component {...value} {...this.props}/>}
                </AutorizationContext.Consumer>
                )
        }
    }
    return NewComponent;
}