import React, {Component} from 'react';
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
  Thumbnail,
  Body
} from 'native-base';
import getTheme from '../../setup/native-base-theme/components';
import material from '../../setup/native-base-theme/variables/material';

import IconIonicons from 'react-native-vector-icons/Ionicons'; // Edit path for type Icon

const Window = Dimensions.get('window')

const bg = require("../../assets/bg/HomePage.jpg");

const text1 = 'โครงการบ้านสีเขียวด้วยกัน';
const text2 = 'โครงการบ้านสดใส';
const text3 = 'โครงการที่อยู่ในฝัน';
const text4 = 'โครงการบ้านสบาย';

const projectIcon = require('../../assets/icon/project.png');

import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {reducerOne: state.reducerOne, reducerTwo: state.reducerTwo};
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({type: "setName", payload: name});
    },
    Add: (value) => {
      dispatch({type: "ADD", payload: value});
    }
  };
}

class MainScreen extends Component {
  static navigatorStyle = {
    navBarHidden: false
  };

  componentDidMount() {
    console.log(this.props.reducerTwo);
    console.log(this.props.reducerOne);

    // Add Button Header
    let BtnMainMenu = undefined;
    let BtnCalendar = undefined;
    let BtnSearch = undefined;

    IconIonicons
      .getImageSource('md-menu', 22)
      .then((imgIcon) => {
        BtnMainMenu = imgIcon;
      })
      .then(() => {
        this
          .props
          .navigator
          .setButtons({
            leftButtons: [
              {
                id: 'BtnMainMenu',
                icon: BtnMainMenu,
                buttonColor: '#F8F8F8'
              }
            ]
          });
      });

    this
      .props
      .navigator
      .setButtons({
        rightButtons: [
          {
            id: 'BtnAddProject',
            title: 'เพิ่มโครงการ',
            buttonColor: '#FFFFFF'
          }
        ]
      });

    // Event Button Top Bar Press
    this
      .props
      .navigator
      .setOnNavigatorEvent((e) => {
        if (e.type == 'NavBarButtonPress') { // this is the event type for button presses
          if (e.id == 'BtnMainMenu') {
            // this is the same id field from the static navigatorButtons definition
            this
              .props
              .navigator
              .toggleDrawer({
                side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
              });
          } else if (e.id == 'BtnAddProject') { // this is the same id field from the static navigatorButtons definition
            this.handlePressModalAddProject();
          }
        }
      });

  }

  handlePressModalProject = () => {
    this
      .props
      .navigator
      .showModal({
        screen: 'DetailProject', // unique ID registered with Navigation.registerScreen
        title: "โครงการบ้านสีเขียวด้วยกัน", // title of the screen as appears in the nav bar (optional)
        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
  };
  handlePressModalProjectt = () => {
    this
      .props
      .navigator
      .showModal({
        screen: 'DetailProject', // unique ID registered with Navigation.registerScreen
        title: "โครงการบ้านสดใส", // title of the screen as appears in the nav bar (optional)
        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
  };
  handlePressModalProjecttt = () => {
    this
      .props
      .navigator
      .showModal({
        screen: 'DetailProject', // unique ID registered with Navigation.registerScreen
        title: "โครงการตึกในฝัน", // title of the screen as appears in the nav bar (optional)
        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
  };

  handlePressModalAddProject = () => {
    this
      .props
      .navigator
      .showModal({
        screen: 'FormOne', // unique ID registered with Navigation.registerScreen
        title: 'เพิ่มโครงการ', // title of the screen as appears in the nav bar (optional)
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
          <ScrollView showsHorizontalScrollIndicator={false}>
            <ImageBackground source={bg} style={styles.bg}/>
            <Content>
              <List>
                <ListItem
                  itemHeader
                  first
                  style={{
                  justifyContent: 'center',
                  marginBottom: 0,
                  paddingBottom: 0
                }}>
                  <Text
                    style={{
                    fontSize: 20,
                    fontFamily: 'Kanit-Medium',
                    color: '#16d8ef'
                  }}>
                    รายชื่อโครงการ
                  </Text>
                </ListItem>
                <ListItem>
                  <TouchableOpacity
                    style={{
                    flexDirection: 'row'
                  }}
                    onPress={this.handlePressModalProject}>
                    <Left style={{
                      flex: 1
                    }}>
                      <Thumbnail small source={projectIcon}/>
                    </Left>
                    <Body
                      style={{
                      flex: 5,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 16,
                        fontFamily: 'Kanit-Medium',
                        color: '#16d8ef'
                      }}>
                        โครงการบ้านสีเขียวด้วยกัน
                      </Text>
                    </Body>
                    <Right style={{
                      flex: 2
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
                    onPress={this.handlePressModalProjectt}>
                    <Left style={{
                      flex: 1
                    }}>
                      <Thumbnail small source={projectIcon}/>
                    </Left>
                    <Body
                      style={{
                      flex: 5,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 16,
                        fontFamily: 'Kanit-Medium',
                        color: '#16d8ef'
                      }}>
                        โครงการบ้านสดใส
                      </Text>
                    </Body>
                    <Right style={{
                      flex: 2
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
                    onPress={this.handlePressModalProjecttt}>
                    <Left style={{
                      flex: 1
                    }}>
                      <Thumbnail small source={projectIcon}/>
                    </Left>
                    <Body
                      style={{
                      flex: 5,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 16,
                        fontFamily: 'Kanit-Medium',
                        color: '#16d8ef'
                      }}>
                        โครงการตึกในฝัน
                      </Text>
                    </Body>
                    <Right style={{
                      flex: 2
                    }}>
                      <Icon name='ios-arrow-forward'/>
                    </Right>
                  </TouchableOpacity>
                </ListItem>
              </List>
            </Content>
            <Content>
              <Button
                rounded
                style={{
                backgroundColor: "#16d8ef"
              }}
                onPress={this.handlePressModalAddProject}>
                <Text>เพิ่มข้อมูลโครงการ</Text>
              </Button>
            </Content>
          </ScrollView>
        </Container>
      </StyleProvider>
    )
  }
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

//Style
const styles = StyleSheet.create({
  bg: {
    width: Window.width,
    height: Window.height / 3.5
  }
});