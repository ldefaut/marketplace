import React, {Component} from 'react';
import {Image} from 'react-native'
import zenbookpro from './Images/zenbookpro.jpg';

class Card extends Component{
    render(){
        console.log(this.props)
        let url =(this.props.name,".png")
        console.log(this.props.name,".png");
        return(
            <div class="item">
                <div class="image">
                    <img src={zenbookpro}/>
                </div>
            </div>
            )
    }
}

class Home extends Component {
    render(){
        return (
            <div class="acc">
                <h1>Welcome to my Marketplace</h1>
                
                <div class="items">
                <Card name="zenbookpro"/>
                </div>
            </div>
        );
    }
}

export default Home;