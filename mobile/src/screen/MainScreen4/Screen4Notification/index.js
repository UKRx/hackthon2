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

export default class ScreenNotification extends Component {
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
            }}>ต้องการเพิ่มข้อมูลแคมป์เลยหรือไม่</Text>
          </Button>
          <Button
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