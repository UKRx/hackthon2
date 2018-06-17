import React, {Component} from 'react';

import {
  StyleProvider,
  Container,
  Text,
  Tabs,
  Tab,
  TabHeading
} from 'native-base';
import getTheme from '../../../setup/native-base-theme/components';
import material from '../../../setup/native-base-theme/variables/material';

import Tab1 from './ChildrenProjectTabs/TabOne';
import Tab2 from './ChildrenProjectTabs/TabTwo';
import Tab3 from './ChildrenProjectTabs/TabThree';

const tabHeader1 = <TabHeading>
  <Text>รายละเอียด</Text>
</TabHeading>
const tabHeader2 = <TabHeading>
  <Text>การศึกษา</Text>
</TabHeading>
const tabHeader3 = <TabHeading>
<Text>ข้อมูลวัคซีน</Text>
</TabHeading>

export default class Mpdal extends Component {
  static navigatorStyle = {
    navBarHidden: false,
    navBarHideOnScroll: true,
    topBarElevationShadowEnabled: false,
    navBarButtonColor: 'white'
  };
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Tabs>
            <Tab heading={tabHeader1}>
              <Tab1 navigator={this.props.navigator}/>
            </Tab>
            <Tab heading={tabHeader2}>
              <Tab2 navigator={this.props.navigator}/>
            </Tab>
            <Tab heading={tabHeader3}>
              <Tab3 navigator={this.props.navigator}/>
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    );
  }
}
