import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const textHeader = 'Screen 4 Push';
const textNormal = "Can't to black for Push page";

export default class MainScreen extends Component {
  render() {
    return (
      <View
        style={styles.container}>
        <Text style={styles.fontHeader}>
          {textHeader}
        </Text>
        <Text style={styles.fontNormal}>
          {textNormal}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
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
    marginBottom: 5,
  },
});