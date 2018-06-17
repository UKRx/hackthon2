import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const textHeader = 'Main Screen 3';
const textNormal = 'text normal';

export default class MainScreen extends Component {
  handlePressResetTo = () => {
    this
      .props
      .navigator
      .resetTo({
        screen: 'MainScreen4', // unique ID registered with Navigation.registerScreen
        title: undefined, // navigation bar title of the pushed screen (optional)
        passProps: {}, // simple serializable object that will pass as props to the pushed screen (optional)
        animated: true, // does the resetTo have transition animation or does it happen immediately (optional)
        animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the resetTo have different transition animation (optional)
        navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
        navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
      });
  };
  handlePressSnackbar = () => {
    this.props.navigator.showSnackbar({
      text: 'Woo Snacks!'
    });
  };
  handlePressSetTabBadge = () => {
    this.props.navigator.setTabBadge({
      tabIndex: 2,
      badge: Math.floor(Math.random() * 20) + 1
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
        <Button onPress={this.handlePressResetTo} title="ResetTo" color="#0037ff"/>
        <Button onPress={this.handlePressSnackbar} title="Snackbar" color="#ff005d"/>
        <Button onPress={this.handlePressSetTabBadge} title="TabBadge" color="#ff6a00"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bc4fff'
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