import React from 'react';
import {Dimensions, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
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
    Card,
    CardItem,
    Body
} from 'native-base';
import getTheme from '../../../../setup/native-base-theme/components';
import material from '../../../../setup/native-base-theme/variables/material';

import {Col, Row, Grid} from 'react-native-easy-grid';

const Window = Dimensions.get('window')

export default class Tabs extends React.Component {
    handlePressModal = () => {
        this
          .props
          .navigator
          .showModal({
            screen: 'FormThree', // unique ID registered with Navigation.registerScreen
            title: 'แก้ไขข้อมูลบุตร', // title of the screen as appears in the nav bar (optional)
            passProps: {}, // simple serializable object that will pass as props to the modal (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
          });
      };
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text style={styles.textHeader}>ข้อมูลบุตร</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Grid>
                                        <Col>
                                            <Text style={styles.textForm}>เลขประจำตัวบุตร</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>1956115546565
                                            </Text>
                                        </Col>
                                    </Grid>
                                    <Grid>
                                        <Col>
                                            <Text style={styles.textForm}>วันเดือนปีเกิด</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>12 ธันวาคม 1000</Text>
                                        </Col>
                                    </Grid>
                                    <Grid>
                                        <Col>
                                            <Text style={styles.textForm}>อายุ</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>14</Text>
                                        </Col>
                                    </Grid>
                                    <Grid>
                                        <Col >
                                            <Text style={styles.textForm}>สัญชาติ</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>เกาหลี</Text>
                                        </Col>
                                    </Grid>
                                    <Grid>
                                        <Col>
                                            <Text style={styles.textForm}>เพศ</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>ชาย</Text>
                                        </Col>
                                    </Grid>
                                </Body>
                            </CardItem>
                        </Card>
                        <Button
                            onPress={this.handlePressModal}
                            rounded
                            style={{
                            backgroundColor: "#16d8ef",
                            margin: 10
                        }}>
                            <Text>แก้ไขข้อมูลบุตร</Text>
                        </Button>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

//Style
const styles = StyleSheet.create({
    textHeader: {
        color: '#16d8ef'
    },
    textData: {
        color: 'gray',
        fontSize: 14
    },
    textForm: {
        color: 'black',
        fontSize: 14
    },
    between: {
        marginBottom: 5
    }
});