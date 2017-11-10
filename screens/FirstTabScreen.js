import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';

export default class FirtsTabScreen extends Component {

    handleGotoAbout(){
        this.props.navigator.push({
            screen: 'example.About',
            title: 'About'
        });
    }

    handleGotoList(){
        this.props.navigator.push({
            screen: 'example.ListBackend',
            title: 'List Code'
        });
    }

    render(){
        return(
            <Container style = {styles.container} >
                <Content>
                    <Button full success 
                    onPress = {()=> this.handleGotoAbout()} style = {styles.button}>
                        <Text>Go To About</Text>
                    </Button>
                    <Button full success 
                    onPress = {()=> this.handleGotoList()} style = {styles.button}>
                        <Text>Go To List</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },

    button: {
        margin: 10
    }

}); 