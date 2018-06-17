import React from 'react';
import {Dimensions, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import {
    StyleProvider,
    Container,
    Content,
    Button,
    Text,
    List,
    ListItem,
    Right,
    Left,
    Icon,
    Card,
    CardItem,
    Body,
    Thumbnail
} from 'native-base';
import getTheme from '../../../../setup/native-base-theme/components';
import material from '../../../../setup/native-base-theme/variables/material';

import {Col, Row, Grid} from 'react-native-easy-grid';

const Window = Dimensions.get('window')

const workerIcon = require('../../../../assets/icon/worker.png');

export default class Tabs extends React.Component {

    handlePressModal = () => {
        this
            .props
            .navigator
            .showModal({
                screen: 'DetailWorker', // unique ID registered with Navigation.registerScreen
                title: 'นางสาวโอบ้ะบ้ะ จี้ดจี้ด', // title of the screen as appears in the nav bar (optional)
                passProps: {}, // simple serializable object that will pass as props to the modal (optional)
                navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
                animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
            });
    };
    handlePressModall = () => {
        this
          .props
          .navigator
          .showModal({
            screen: 'FormThree', // unique ID registered with Navigation.registerScreen
            title: 'เพิ่มข้อมูลคนงาน', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
          });
      };

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Content>
                        <List>
                            <ListItem>
                                <TouchableOpacity
                                    style={{
                                    flexDirection: 'row'
                                }}
                                    onPress={this.handlePressModal}>
                                    <Left
                                        style={{
                                        flex: 1
                                    }}>
                                        <Thumbnail source={workerIcon}/>
                                    </Left>
                                    <Body
                                        style={{
                                        flex: 4,
                                        justifyContent: 'center'
                                    }}>
                                        <Text>นางสาวโอบ้ะบ้ะ จี้ดจี้ด</Text>
                                        <Text note>ช่างทาสี</Text>
                                    </Body>
                                    <Right
                                        style={{
                                        flex: 1
                                    }}>
                                        <Icon name='ios-arrow-forward'/>
                                    </Right>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem>
                                <TouchableOpacity
                                    style={{
                                    flexDirection: 'row'
                                }}
                                    onPress={this.handlePressModal}>
                                    <Left
                                        style={{
                                        flex: 1
                                    }}>
                                        <Thumbnail source={workerIcon}/>
                                    </Left>
                                    <Body
                                        style={{
                                        flex: 4,
                                        justifyContent: 'center'
                                    }}>
                                        <Text>นางสาวนพ อ่างทอง</Text>
                                        <Text note>ช่างทาสี</Text>
                                    </Body>
                                    <Right
                                        style={{
                                        flex: 1
                                    }}>
                                        <Icon name='ios-arrow-forward'/>
                                    </Right>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem>
                                <TouchableOpacity
                                    style={{
                                    flexDirection: 'row'
                                }}
                                    onPress={this.handlePressModal}>
                                    <Left
                                        style={{
                                        flex: 1
                                    }}>
                                        <Thumbnail source={workerIcon}/>
                                    </Left>
                                    <Body
                                        style={{
                                        flex: 4,
                                        justifyContent: 'center'
                                    }}>
                                        <Text>นายสมสัก สมศรี</Text>
                                        <Text note>ช่างทาสี</Text>
                                    </Body>
                                    <Right
                                        style={{
                                        flex: 1
                                    }}>
                                        <Icon name='ios-arrow-forward'/>
                                    </Right>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem>
                                <TouchableOpacity
                                    style={{
                                    flexDirection: 'row'
                                }}
                                    onPress={this.handlePressModal}>
                                    <Left
                                        style={{
                                        flex: 1
                                    }}>
                                        <Thumbnail source={workerIcon}/>
                                    </Left>
                                    <Body
                                        style={{
                                        flex: 4,
                                        justifyContent: 'center'
                                    }}>
                                        <Text>นายทหาร ตำรวจ</Text>
                                        <Text note>ช่างทาสี</Text>
                                    </Body>
                                    <Right
                                        style={{
                                        flex: 1
                                    }}>
                                        <Icon name='ios-arrow-forward'/>
                                    </Right>
                                </TouchableOpacity>
                            </ListItem>
                        </List>
                        <Button
                        onPress={this.handlePressModall}
                            rounded
                            style={{
                            backgroundColor: "#16d8ef"
                        }}>
                            <Text>เพิ่มข้อมูลคนงาน</Text>
                        </Button>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

//Style
const styles = StyleSheet.create({
    textHeader: {
        color: '#16d8ef'
    },
    textData: {
        color: 'gray',
        fontSize: 14
    },
    textForm: {
        color: 'black',
        fontSize: 14
    },
    between: {
        marginBottom: 5
    }
});