import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class ViewDetail extends Component {
  render() {
    return (
      <Container>
            <Content>
                <Card>
                    <CardItem Header>
                        <Text>Detail View</Text>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://cdn1.icicletech.com/media/react-native-logo.png'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
      </Container>
    );
  }
}
