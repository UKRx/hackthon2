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
                                <Text style={styles.textHeader}>แรกเกิด - 1เดือน</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Grid>
                                        <Col>
                                            <Text style={styles.textForm}>BCG</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>รับวันที่ 20 ม.ค. 96
                                            </Text>
                                        </Col>
                                    </Grid>
                                    <Grid>
                                        <Col>
                                            <Text style={styles.textForm}>HB1</Text>
                                        </Col>
                                    </Grid>
                                    <Grid style={styles.between}>
                                        <Col size={1}/>
                                        <Col size={11}>
                                            <Text style={styles.textData}>นัดวันที่ 28 ม.ค. 96
                                            </Text>
                                        </Col>
                                    </Grid>
                                </Body>
                            </CardItem>
                        </Card>
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