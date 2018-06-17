import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const textHeader = 'Screen 4 Modal';
const textNormal = 'text normal';

export default class MainScreen extends Component {
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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fontHeader}>
          {textHeader}
        </Text>
        <Text style={styles.fontNormal}>
          {textNormal}
        </Text>
        <Button
          onPress={this.handlePressModal}
          title="Next Modal"
          color="#6f4fff"
          accessibilityLabel="Learn more about this purple button"/>
        <Button
          onPress={this.handlePressBack}
          title="Back"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
        <Button
          onPress={this.handlePressCloseModalAll}
          title="CloseModalAll"
          color="#ff4f6c"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd04f'
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