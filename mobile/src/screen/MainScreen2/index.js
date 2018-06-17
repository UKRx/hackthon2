import React, {Component} from 'react';

export default class MainScreen extends Component {
  // Overide styles
  static navigatorStyle = {
    navBarHideOnScroll: true,
    topBar: {
      background: {
        color: 'red'
      }
    },
    statusBarStyle: 'light'
  };
}
