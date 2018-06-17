import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const textHeader = 'Screen 4 LightBox';
const textNormal = "test";

export default class ScreenLightBox extends Component {
  handlePressBack = () => {
    this
      .props
      .navigator
      .dismissLightBox();
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
        <Button onPress={this.handlePressBack} title="Back" color="#841584"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ffff9'
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