import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  View
} from 'react-native';
import {
  StyleProvider,
  Container,
  Content,
  Button,
  Text,
  List,
  ListItem,
  Right,
  Left,
  Icon,
  Thumbnail,
  Body
} from 'native-base';
import getTheme from '../../setup/native-base-theme/components';
import material from '../../setup/native-base-theme/variables/material';

const Window = Dimensions.get('window')

const projectIcon = require('../../assets/icon/eiei.png');
const profileIcon = require('../../assets/icon/profile.png');

const textHeader = 'Drawer Screen';
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
    this
      .props
      .navigator
      .showSnackbar({text: 'Woo Snacks!'});
  };
  handlePressSetTabBadge = () => {
    this
      .props
      .navigator
      .setTabBadge({
        tabIndex: 2,
        badge: Math.floor(Math.random() * 20) + 1
      });
  };
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            <View style={styles.containerTop}>
              <Thumbnail
                style={{
                marginBottom: 20
              }}
                large
                source={profileIcon}/>
              <Text
                style={{
                color: 'white',
                fontFamily: 'Kanit-SemiBold',
                fontSize: 18
              }}>โรเบิร์ด ลมควัน</Text>
            </View>
            <View style={styles.containerMenu}>
              <List>
                <ListItem>
                  <TouchableOpacity
                    style={{
                    flexDirection: 'row'
                  }}
                    onPress={this.handlePressModal}>
                    <Left style={{
                      flex: 1
                    }}>
                      <Thumbnail small source={projectIcon}/>
                    </Left>
                    <Body
                      style={{
                      flex: 5,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 16,
                        fontFamily: 'Kanit-Medium',
                        color: '#16d8ef'
                      }}>
                        หน้าแแรก
                      </Text>
                    </Body>
                  </TouchableOpacity>
                </ListItem>
                <ListItem>
                  <TouchableOpacity
                    style={{
                    flexDirection: 'row'
                  }}
                    onPress={this.handlePressModal}>
                    <Left style={{
                      flex: 1
                    }}>
                      <Thumbnail small source={projectIcon}/>
                    </Left>
                    <Body
                      style={{
                      flex: 5,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 16,
                        fontFamily: 'Kanit-Medium',
                        color: '#16d8ef'
                      }}>
                        ค้นหาคนงาน
                      </Text>
                    </Body>
                  </TouchableOpacity>
                </ListItem>
                <ListItem>
                  <TouchableOpacity
                    style={{
                    flexDirection: 'row'
                  }}
                    onPress={this.handlePressModal}>
                    <Left style={{
                      flex: 1
                    }}>
                      <Thumbnail small source={projectIcon}/>
                    </Left>
                    <Body
                      style={{
                      flex: 5,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 16,
                        fontFamily: 'Kanit-Medium',
                        color: '#16d8ef'
                      }}>
                        คนหาแคมป์
                      </Text>
                    </Body>
                  </TouchableOpacity>
                </ListItem>
                <ListItem>
                  <TouchableOpacity
                    style={{
                    flexDirection: 'row'
                  }}
                    onPress={this.handlePressModal}>
                    <Left style={{
                      flex: 1
                    }}>
                      <Thumbnail small source={projectIcon}/>
                    </Left>
                    <Body
                      style={{
                      flex: 5,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 16,
                        fontFamily: 'Kanit-Medium',
                        color: '#16d8ef'
                      }}>
                        ค้นหาโครงการ
                      </Text>
                    </Body>
                  </TouchableOpacity>
                </ListItem>
                <ListItem>
                  <TouchableOpacity
                    style={{
                    flexDirection: 'row'
                  }}
                    onPress={this.handlePressModal}>
                    <Left style={{
                      flex: 1
                    }}>
                      <Thumbnail small source={projectIcon}/>
                    </Left>
                    <Body
                      style={{
                      flex: 5,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 16,
                        fontFamily: 'Kanit-Medium',
                        color: '#16d8ef'
                      }}>
                        นโยบบายแอพ
                      </Text>
                    </Body>
                  </TouchableOpacity>
                </ListItem>
                <ListItem>
                  <TouchableOpacity
                    style={{
                    flexDirection: 'row'
                  }}
                    onPress={this.handlePressModal}>
                    <Left style={{
                      flex: 1
                    }}>
                      <Thumbnail small source={projectIcon}/>
                    </Left>
                    <Body
                      style={{
                      flex: 5,
                      justifyContent: 'center'
                    }}>
                      <Text
                        style={{
                        fontSize: 16,
                        fontFamily: 'Kanit-Medium',
                        color: '#16d8ef'
                      }}>
                        ออกจากระบบ
                      </Text>
                    </Body>
                  </TouchableOpacity>
                </ListItem>
              </List>
            </View>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  containerTop: {
    backgroundColor: '#16d8ef',
    height: Window.height / 3.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerMenu: {
    backgroundColor: 'white',
    height: Window.height - Window.height / 3.5
  },
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    flex: 1
  },
  textMenu: {
    color: '#16d8ef',
    fontFamily: 'Kanit-Medium'
  }
});