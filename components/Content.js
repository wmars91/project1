
import React, {Component} from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';

export default class Content extends Component{
    constructor(){
        super();
        this.state = {
            name: ""
        }
    }

    handleClick(){
        this.setState({
            name: "WAHYUDIN MARSAOLY"
        });
    }

    render(){
        return (
            <View>
                <Text>Who am I?</Text>
                <TouchableOpacity onPress={ ()=> this.handleClick() }>
                    <Text style = {styles.button} >Click Me!</Text>
                </TouchableOpacity>
                <Text>{this.state.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : "#74a2ed",
        width: 100,
        height: 40,
        width: 100,
        padding: 10,
        margin: 10, 
    }
});