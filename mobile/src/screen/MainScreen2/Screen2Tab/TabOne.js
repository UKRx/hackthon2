import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';

import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return {
    reducerOne: state.reducerOne,
    reducerTwo: state.reducerTwo
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "setName", 
        payload: name
      });
    },
    Add: (value) => {
      dispatch({
        type: "ADD",
        payload: value
      });
    }
  };
}


const devideWidth = Dimensions
  .get("window")
  .width;

const textHeader = 'Main Screen 2';
const textNormal = 'text normal';


class TabOne extends React.Component {
  onScroll = (event) => {
    console.warn(event);
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{
          width: devideWidth
        }}>
          <Text style={styles.fontHeader}>
            {textHeader}
          </Text>
          <Text style={styles.fontNormal}>
            {this.props.reducerTwo.name}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
          <Text style={styles.fontNormal}>
            {textNormal}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

//Connect everything
export default connect(mapStateToProps,mapDispatchToProps)(TabOne);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcff4f'
  },
  contentContainer: {},
  fontHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  fontNormal: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 5
  }
});
