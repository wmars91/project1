import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Button, List, ListItem, Header, Right, Icon, Left, Body, Fab} from 'native-base';

export default class ListBackend extends Component {

    constructor(){
        super();
        this.state = {
            codes: [
                {
                    name: "React Native",
                    image: "https://cdn1.icicletech.com/media/react-native-logo.png"
                },
                {
                    name: "Java Android",
                    image: "https://cdn57.androidauthority.net/wp-content/uploads/2017/05/android-studio-logo-840x359.png"
                },
                {
                    name: "Swift",
                    image: "http://www.mag-corp.com/wp-content/uploads/2017/04/swift-programming-language.png"
                }
            ]
        }
    }

    handleViewDetail(){
        this.props.navigator.push({
            screen: 'example.ViewDetail',
            title: 'Detail'
        });
    }

    render(){
        return(
            <Container>
                <Content>
                <List>
                    {this.state.codes.map((code, key)=>(
                        <ListItem key={key}> 
                            <Left>
                                <Text>{code.name}</Text>
                            </Left>    
                            <Body/>
                            <TouchableOpacity onPress={()=> this.handleViewDetail()} >
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </TouchableOpacity>
                        </ListItem>
                    ))}
                </List>
                </Content>
                <Fab
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                >
                    <Icon name="add" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="mail" />
                    </Button>
                </Fab>
            </Container>
        );
    }
}