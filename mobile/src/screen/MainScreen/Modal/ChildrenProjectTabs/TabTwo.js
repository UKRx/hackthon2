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
    Body
} from 'native-base';
import getTheme from '../../../../setup/native-base-theme/components';
import material from '../../../../setup/native-base-theme/variables/material';

import {Col, Row, Grid} from 'react-native-easy-grid';

const Window = Dimensions.get('window')

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
                                    <Left>
                                        <Text >โรงเรียนประการัง</Text>
                                    </Left>
                                
                                </TouchableOpacity>
                            </ListItem>
                        </List>
                    
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