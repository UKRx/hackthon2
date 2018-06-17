import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  StyleProvider,
  Container,
  Text,
  Tabs,
  Tab,
  TabHeading,
  Button
} from 'native-base';
import getTheme from '../../../setup/native-base-theme/components';
import material from '../../../setup/native-base-theme/variables/material';

const textHeader = 'Screen 4 Notification';
const textNormal = "Test Notification";

const Window = Dimensions.get('window')

export default class Notification extends Component {
  handlePressCloseModalAll = () => {
    this
      .props
      .navigator
      .dismissAllModals({
        animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
      });
  };
  handlePressModalNext = () => {
    this
    .props
    .navigator
    .dismissAllModals({
      animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
    });
    this
      .props
      .navigator
      .showModal({
        screen: 'FormThree', // unique ID registered with Navigation.registerScreen
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
        <View
          style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}>
          <Button
            style={{
            alignSelf: 'center',
            width: Window.width / 1.5,
            backgroundColor: '#16d8ef',
            justifyContent: 'center'
          }}>
            <Text>บันทึกข้อมูลแล้ว</Text>
          </Button>
          <Button
            style={{
            alignSelf: 'center',
            width: Window.width / 1.5,
            backgroundColor: '#16d8ef',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 14
            }}>ต้องการเพิ่มข้อมูลคนงานอีกหรือไม่</Text>
          </Button>
          <Button
            onPress={this.handlePressModalNext}
            style={{
            alignSelf: 'center',
            width: Window.width / 1.5,
            backgroundColor: 'white',
            justifyContent: 'center'
          }}>
            <Text
              style={{
              color: '#16d8ef',
              fontFamily: 'Kanit-Light'
            }}>ต้องการ</Text>
          </Button>
          <Button
            onPress={this.handlePressCloseModalAll}
            style={{
            alignSelf: 'center',
            width: Window.width / 1.5,
            backgroundColor: 'white',
            justifyContent: 'center'
          }}>
            <Text
              style={{
              color: '#16d8ef',
              fontFamily: 'Kanit-Light'
            }}>ไม่ต้องการ</Text>
          </Button>
        </View>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fontHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  fontNormal: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 5
  }
});