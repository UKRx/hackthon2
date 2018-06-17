import React from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Footer,
  FooterTab,
  Text,
  Title,
  Button,
  Icon,
  StyleProvider
} from 'native-base';

import getTheme from '../../../setup/native-base-theme/components';
import material from '../../../setup/native-base-theme/variables/material';

export default class TabOne extends React.Component {

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>

          <Content padder>
            <Text>Content goes here</Text>
          </Content>

        </Container>
      </StyleProvider>
    );
  }
}
