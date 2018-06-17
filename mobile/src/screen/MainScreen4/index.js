import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const textHeader = 'Main Screen 4';
const textNormal1 = 'test Navigator';

export default class MainScreen extends Component {
  handlePressPush = () => {
    this
      .props
      .navigator
      .push({
        screen: 'MainScreen4Push', // unique ID registered with Navigation.registerScreen
        title: 'Screen4Push', // navigation bar title of the pushed screen (optional)
        subtitle: 'Subtitle Screen4Push', // navigation bar subtitle of the pushed screen (optional)
        //titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
        passProps: {}, // Object that will be passed as props to the pushed screen (optional)
        animated: true, // does the push have transition animation or does it happen immediately (optional)
        animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
        backButtonTitle: undefined, // override the back button title (optional)
        backButtonHidden: false, // hide the back button altogether (optional)
        navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
        navigatorButtons: {}, // override the nav buttons for the pushed screen (optional)
        // enable peek and pop - commited screen will have `isPreview` prop set as true.
        previewView: undefined, // react ref or node id (optional)
        previewHeight: undefined, // set preview height, defaults to full height (optional)
        previewCommit: true, // commit to push preview controller to the navigation stack (optional)
        previewActions: [
          { // action presses can be detected with the `PreviewActionPress` event on the commited screen.
            id: '', // action id (required)
            title: '', // action title (required)
            style: undefined, // 'selected' or 'destructive' (optional)
            actions: [], // list of sub-actions
          }
        ]
      });
  };
  handlePressModal = () => {
    this
      .props
      .navigator
      .showModal({
        screen: 'MainScreen4Modal', // unique ID registered with Navigation.registerScreen
        title: 'กรอกข้อมูลโครงการ', // title of the screen as appears in the nav bar (optional)
        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
  };
  handlePressLightBox = () => {
    this
      .props
      .navigator
      .showLightBox({
        screen: 'MainScreen4LightBox', // unique ID registered with Navigation.registerScreen
        passProps: {}, // simple serializable object that will pass as props to the lightbox (optional)
        style: {
          backgroundBlur: 'dark', // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
          backgroundColor: '#ff000080', // tint color for the background, you can specify alpha here (optional)
          tapBackgroundToDismiss: true // dismisses LightBox on background taps (optional)
        }
      });
  };
  handlePressShowInAppNotification = () => {
    this
      .props
      .navigator
      .showInAppNotification({
        screen: "MainScreen4Notification", // unique ID registered with Navigation.registerScreen
        passProps: {}, // simple serializable object that will pass as props to the in-app notification (optional)
        autoDismissTimerSec: 1 // auto dismiss notification in seconds
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fontHeader}>
          {textHeader}
        </Text>
        <Text style={styles.fontNormal}>
          {textNormal1}
        </Text>
        <Button onPress={this.handlePressPush} title="Push" color="#841584"/>
        <Button onPress={this.handlePressModal} title="Modal" color="#ffd04f"/>
        <Button onPress={this.handlePressLightBox} title="LightBox" color="#caff4f"/>
        <Button
          onPress={this.handlePressShowInAppNotification}
          title="Screen4Notification"
          color="#00ffa6"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4f6c'
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