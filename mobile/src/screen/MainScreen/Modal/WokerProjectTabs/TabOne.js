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
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text style={styles.textHeader}>ข้อมูลคนงาน</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Grid>
                                        <Col>
                                            <Text style={styles.textForm}>เบอร์ติดต่อ</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>191
                                            </Text>
                                        </Col>
                                    </Grid>
                                    <Grid>
                                        <Col>
                                            <Text style={styles.textForm}>เลขประจำตัวคนงาน</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>1532254665215</Text>
                                        </Col>
                                    </Grid>
                                    <Grid>
                                        <Col>
                                            <Text style={styles.textForm}>สัญชาติ</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>ญี่ปุ่น</Text>
                                        </Col>
                                    </Grid>
                                    <Grid>
                                        <Col >
                                            <Text style={styles.textForm}>ประเภทแรงงาน</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>นักดับเพลิง</Text>
                                        </Col>
                                    </Grid>
                                </Body>
                            </CardItem>
                        </Card>
                        <Button
                            rounded
                            style={{
                            backgroundColor: "#16d8ef",
                            margin: 10
                        }}>
                            <Text>แก้ไขข้อมูลคนงาน</Text>
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