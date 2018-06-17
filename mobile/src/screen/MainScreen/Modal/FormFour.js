import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {
  StyleProvider,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from 'native-base';
import getTheme from '../../../setup/native-base-theme/components';
import material from '../../../setup/native-base-theme/variables/material';

const textHeader = 'Screen 4 Modal';
const textNormal = 'text normal';

export default class Modal extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'white'
  };
  constructor(props) {
    super(props);
    this.state = {
      projectid: "asds",
      projectnamethai: "",
      projectnameeng: "",
      projectprovide: "",
      projectdatestart: "",
      projectdateend: "",
      projectconnectername: "",
      projectconnecterphone: ""
    };
  };
  handlePressModal = () => {
    this
      .props
      .navigator
      .showModal({
        screen: 'MainScreen4Modal', // unique ID registered with Navigation.registerScreen
        title: 'Screen4Modal-Again', // title of the screen as appears in the nav bar (optional)
        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
  };
  handlePressBack = () => {
    this
      .props
      .navigator
      .dismissModal({
        animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
      });
  };
  handlePressCloseModalAll = () => {
    this
      .props
      .navigator
      .dismissAllModals({
        animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
      });
  };
  handlePressShowInAppNotification = () => {
    this
      .props
      .navigator
      .showInAppNotification({
        screen: "NotificationFormFour", // unique ID registered with Navigation.registerScreen
        passProps: {}, // simple serializable object that will pass as props to the in-app notification (optional)
        autoDismissTimerSec: 999 // auto dismiss notification in seconds
      });
  };
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <ScrollView>
            <Content>
              <Form>
                <Item floatingLabel style={styles.spaceInput}>
                  <Label>คำนำหน้าชื่อ</Label>
                  <Input/>
                </Item>
                <Item floatingLabel style={styles.spaceInput}>
                  <Label>ชื่อ - นามสกุล</Label>
                  <Input/>
                </Item>
                <Item floatingLabel>
                  <Label>เล็กประจำตัวเด็ก</Label>
                  <Input/>
                </Item>
                <Item floatingLabel>
                  <Label>วันเดือนปีเกิด(ค.ศ.)</Label>
                  <Input/>
                </Item>
                <Item floatingLabel>
                  <Label>สัญชาติ</Label>
                  <Input/>
                </Item>
                <Item floatingLabel>
                  <Label>ระดับชั้นการศึกษา</Label>
                  <Input/>
                </Item>
                <Item floatingLabel>
                  <Label>วัคซีที่เคยได้รับในช่วงอายุ 0-4 ปี</Label>
                  <Input/>
                </Item>
              </Form>
              <Button
                rounded
                style={styles.btnAccept}
                onPress={this.handlePressShowInAppNotification}>
                <Text>ยืนยัน</Text>
              </Button>
            </Content>
          </ScrollView>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  btnAccept: {
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: '#16d8ef'
  },
  textHeader: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
    fontSize: 20,
    fontFamily: "Kanit-Medium",
    color: '#16d8ef',
    alignSelf: 'center'
  },
  spaceInput: {
    marginTop: 10
  }
});