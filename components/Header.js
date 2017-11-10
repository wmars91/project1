
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Header extends Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 10,
      backgroundColor: '#74a2ed'
    }
});