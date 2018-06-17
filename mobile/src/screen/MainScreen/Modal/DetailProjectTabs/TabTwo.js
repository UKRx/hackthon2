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

const campIcon = require('../../../../assets/icon/camp.png');

export default class Tabs extends React.Component {

    handlePressModal = () => {
        this
            .props
            .navigator
            .showModal({
                screen: 'DetailCamp', // unique ID registered with Navigation.registerScreen
                title: 'แคมป์แบ่งกันยิ้ม', // title of the screen as appears in the nav bar (optional)
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
                screen: 'FormTwo', // unique ID registered with Navigation.registerScreen
                title: 'เพิ่มข้อมูลแคมป์ที่พัก', // title of the screen as appears in the nav bar (optional)
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
                                    flexDirection: 'row',
                                    flex: 1
                                }}
                                    onPress={this.handlePressModal}>
                                    <Left
                                        style={{
                                        flex: 1
                                    }}>
                                        <Thumbnail small source={campIcon}/>
                                    </Left>
                                    <Body
                                        style={{
                                        flex: 5,
                                        justifyContent: 'center'
                                    }}>
                                        <Text>แคมป์แบ่งกันยิ้ม</Text>
                                    </Body>
                                    <Right
                                        style={{
                                        flex: 2
                                    }}>
                                        <Icon name='ios-arrow-forward'/>
                                    </Right>
                                </TouchableOpacity>
                            </ListItem>
                            <ListItem>
                                <TouchableOpacity
                                    style={{
                                    flexDirection: 'row',
                                    flex: 1
                                }}
                                    onPress={this.handlePressModal}>
                                    <Left
                                        style={{
                                        flex: 1
                                    }}>
                                        <Thumbnail small source={campIcon}/>
                                    </Left>
                                    <Body
                                        style={{
                                        flex: 5,
                                        justifyContent: 'center'
                                    }}>
                                        <Text>แคมป์สดใส</Text>
                                    </Body>
                                    <Right
                                        style={{
                                        flex: 2
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
                            <Text>เพิ่มข้อมูลแคมป์ที่พัก</Text>
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