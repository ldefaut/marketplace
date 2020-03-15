import React, {Component} from 'react';
import {Bouton} from './App' 
import {Link} from 'react-router-dom'
// import {Image} from 'react-native';
import zenbookpro from './Images/zenbookpro.jpg';
import Macbookpro from './Images/Macbook_pro.jpg';
import Acer from './Images/acer_marketplace.jpg';
import {withAutorization} from './Autorization';


class Card extends Component{
    render(){
        console.log(this.props)
        return(
            <div class="item" >
                <div class="image">
                    <img src={this.props.name}/>
                </div>
                <div class="description">
                    <h4>{this.props.value}</h4>
                    <p></p>
                    <BoutonAdd/>
                </div>
            </div>
            )
    }
}


export var count = 0;
class BoutonAdd extends Component {
    state = {
        added: false,
    };
  
    handleClick = () => {
        // count = count+1
        this.setState(({ added }) => ({
            added: ! this.state.added
        }));
        // this.setState(({ count }) => ({
        //     count: count + 1
        // })
        // );
        this.state.added ? count=count - 1: count=count + 1
        // console.log(this.state.added)
        console.log(count)
    };
    render() {
        return <button onClick={this.handleClick}  value={this.state.added}><Link to="/">Ajouter au panier</Link></button>;
    }
}



class ListItems extends Component{
    // state ={
    //     count : 0
    // }
    
    // onChange=()=>{
    //     this.state.added ? this.setState(({ count }) => ({count: count + 1})):this.setState(({ count }) => ({
    //   count: count - 1
    // }))
    // console.log(this.state.count)
    // }
    render(){
        return (
            <div>
                <h5>{count}</h5>
                
            </div>
        )
    }
}

class Home extends Component {
    render(){
        return (
            <div class="acc">
                <h1>Welcome to my Marketplace</h1>
                <ListItems/>
                <div class="items">
                    <Card name={zenbookpro} value="Zen Book Pro"/>
                    <Card name={Macbookpro} value="Apple MacBook Pro"/>
                    <Card name={Acer} value="PC Ultra-Portable Acer Swift"/>
                    <Card name={Macbookpro}/>
                </div>
            </div>
        );
    }
}

export default withAutorization(Home);