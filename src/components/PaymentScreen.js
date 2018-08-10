import React, { Component } from 'react';
import { Image,StyleSheet,
    Dimensions,ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab, Button, Icon, Left, Body, Right,
    Footer, FooterTab} from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.31
import SmartPicker from 'react-native-smart-picker'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
import { BottomNavigation } from 'react-native-material-ui';

const card      = {card: {width: 100,height:300,borderWidth: 3,
        borderRadius: 3,
        borderColor: '#FFFFFF',
        padding: 10}};
const cardItem = {cardItem: {fontSize: 40}};
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
        title: ' Credit Card',
    },
    {
        title: ' Debit Card',
    },
    {
        title: ' Net Banking',
    },
    {
        title: ' Wallets',
        content: '     o  Paytm\n' +
        '       o  Mobikwik\n' +
        '       o  Freecharge'
    },
];

export default class PaymentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "At",

        };

    }

    _renderHeader(section) {
        return (
            <View style={styles.header}>
                <View style={{flexDirection:"row"}}>
                    <Image source={require('../Images/circleicon.png')} style={{height: 25,marginLeft:15,width: 25,marginTop:20,justifyContent:'flex-start'}}/>

                    <Text style={styles.headerText}>{section.title}</Text>
                </View>
            </View>
        );
    }
    _renderContent(section) {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    }

    render() {

        return (
            <View style={styles.container}>
                {/*<ScrollView>*/}
                <View style={[styles.headerview]}>
                    {/*<Container >*/}
                        {/*<Content>*/}
                            <Card  styles={{width: 100,height:300, borderWidth: 1.5,
                                borderRadius:10,
                                borderColor:'#2EACDE', alignItems: 'center',
                                overflow: 'hidden',
                                backgroundColor: 'white',
                                elevation: 1,
                                padding: 10}}>

                                {/*<CardItem cardBody  styles={{width: 100,height:300, borderWidth: 1.5,*/}
                                    {/*borderRadius:10,*/}
                                    {/*borderColor:'#2EACDE', alignItems: 'center',*/}
                                    {/*overflow: 'hidden',*/}
                                    {/*backgroundColor: 'white',*/}
                                    {/*elevation: 1,*/}
                                    {/*padding: 10}}>*/}
                                {/*</CardItem>*/}

                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>

                                    <Text note style={{textAlign:'left',marginTop:10,fontSize:16,fontWeight:'bold'
                                    }} >Jedimetla
                                    </Text>
                                    <Image source={require('../Images/arrow.png')} style={{width: 25, height: 25,marginTop:10}}/>
                                    <Text note style={{textAlign:'right',fontSize:16,fontWeight:'bold',marginTop:10
                                    }} >Mehdipatnam
                                    </Text>
                                </View>

                                {/*<View style={{flexDirection:"row"}}>*/}
                                    <Text note style={{textAlign:'center',marginTop:10,fontSize:16,fontWeight:'bold',
                                    }} >Route(s): 9K, 113M
                                    </Text>

                                {/*</View>*/}

                            </Card>

                    <Card  styles={{width: 100,height:300, borderWidth: 1.5,
                        borderRadius:10,
                        borderColor:'#2EACDE', alignItems: 'center',
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        elevation: 1,
                        padding: 10}}>

                        {/*<CardItem cardBody  styles={{width: 100,height:300, borderWidth: 1.5,*/}
                        {/*borderRadius:10,*/}
                        {/*borderColor:'#2EACDE', alignItems: 'center',*/}
                        {/*overflow: 'hidden',*/}
                        {/*backgroundColor: 'white',*/}
                        {/*elevation: 1,*/}
                        {/*padding: 10}}>*/}
                        <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                            <Image source={require('../Images/wind_chime.png')} style={{height: 60, width: 60}}/>
                            <Text  style={{marginTop:20,fontSize:18,color:'#2eacde',fontWeight:'bold',
                            }} >Payment
                            </Text>
                            <Image source={require('../Images/wind_chime.png')} style={{height: 60,width: 60}}/>
                        </View>


                        {/*</CardItem>*/}
                        <View style={{flexDirection:"row"}}>
                            <Text  style={{marginLeft:20,marginTop:20,fontSize:18,fontWeight:'bold',color:'#2eacde',justifyContent:'flex-start'
                            }} >Select Payment Method
                            </Text>
                            {/*<Text note style={{marginTop:20,marginLeft:100,fontSize:18,fontWeight:'bold',justifyContent:'flex-end'*/}
                            {/*}} >02/08/2018 11:50 AM*/}
                            {/*</Text>*/}
                        </View>

                        <Accordion
                            sections={SECTIONS}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />

                        {/*<View style={{flexDirection:"row"}}>*/}
                        {/*<Image source={require('../Images/rupee_symbol.png')} style={{marginLeft:20,marginTop:20,height: 25, width: 25, justifyContent: 'flex-start'}}/>*/}
                        {/*<Text note style={{marginRight:20,marginTop:20,fontSize:20,fontWeight:'bold'*/}
                        {/*}} >45/-*/}
                        {/*</Text>*/}
                        {/*<Image source={require('../Images/qr_code.png')} style={{marginLeft:60,marginTop:20,height: 50, width: 50, justifyContent: 'flex-end'}}/>*/}
                        {/*</View>*/}
                        {/*marginLeft:220,*/}
                        <View style={{flexDirection:"row"}}>
                            <Text note style={{textAlign:'left',marginBottom:10,fontSize:40,color:'#2eacde',fontWeight:'bold',marginTop:20,
                            }} > &#8377;45/-
                            </Text>
                            <Button rounded style={{marginLeft:50,marginTop:20,height:28,backgroundColor: '#2eacde',justifyContent: 'flex-end',}}
                                    onPress={() => Actions.ticketScreen()}>
                                {/*<Image source={require('../Images/location.png')} style = {{ width: 25, height: 25,paddingLeft:5 }}/>*/}
                                <Text style={{fontWeight: "bold",fontSize:18}}>Pay securely</Text>
                            </Button>
                        </View>

                        <Text note style={{marginLeft:20,marginTop:20,fontSize:18,fontStyle:'italic',justifyContent: 'flex-start'
                        }} >This a secure transaction
                        </Text>

                        <Text note style={{marginLeft:20,marginBottom:30,fontSize:18,fontStyle:'italic',justifyContent: 'flex-start'
                        }} >Please do not navigate back or refresh !
                        </Text>
                    </Card>
                        {/*</Content>*/}


                        {/*<Content />*/}



                    {/*</Container>*/}
                </View>

                    {/*<View style={[styles.content1]}>*/}
                        {/*<View style={[styles.box]}>*/}
                            {/*/!*<Text note style={{fontSize:5}} >   </Text>*!/*/}
                            {/*<Content>*/}
                                {/*<Card  styles={{width: 100,height:300, borderWidth: 1.5,*/}
                                    {/*borderRadius:10,*/}
                                    {/*borderColor:'#2EACDE', alignItems: 'center',*/}
                                    {/*overflow: 'hidden',*/}
                                    {/*backgroundColor: 'white',*/}
                                    {/*elevation: 1,*/}
                                    {/*padding: 10}}>*/}

                                    {/*/!*<CardItem cardBody  styles={{width: 100,height:300, borderWidth: 1.5,*!/*/}
                                        {/*/!*borderRadius:10,*!/*/}
                                        {/*/!*borderColor:'#2EACDE', alignItems: 'center',*!/*/}
                                        {/*/!*overflow: 'hidden',*!/*/}
                                        {/*/!*backgroundColor: 'white',*!/*/}
                                        {/*/!*elevation: 1,*!/*/}
                                        {/*/!*padding: 10}}>*!/*/}
                                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                                            {/*<Image source={require('../Images/wind_chimes.png')} style={{height: 60, width: 60}}/>*/}
                                            {/*<Text  style={{marginTop:20,fontSize:18,color:'#669999',fontWeight:'bold',*/}
                                            {/*}} >Payment*/}
                                            {/*</Text>*/}
                                            {/*<Image source={require('../Images/wind_chimes.png')} style={{height: 60,width: 60}}/>*/}
                                        {/*</View>*/}


                                    {/*/!*</CardItem>*!/*/}
                                    {/*<View style={{flexDirection:"row"}}>*/}
                                        {/*<Text  style={{marginLeft:20,marginTop:20,fontSize:18,fontWeight:'bold',color:'#669999',justifyContent:'flex-start'*/}
                                        {/*}} >Select Payment Method*/}
                                        {/*</Text>*/}
                                        {/*/!*<Text note style={{marginTop:20,marginLeft:100,fontSize:18,fontWeight:'bold',justifyContent:'flex-end'*!/*/}
                                        {/*/!*}} >02/08/2018 11:50 AM*!/*/}
                                        {/*/!*</Text>*!/*/}
                                    {/*</View>*/}

                                        {/*<Accordion*/}
                                        {/*sections={SECTIONS}*/}
                                        {/*renderHeader={this._renderHeader}*/}
                                        {/*renderContent={this._renderContent}*/}
                                    {/*/>*/}

                                    {/*/!*<View style={{flexDirection:"row"}}>*!/*/}
                                        {/*/!*<Image source={require('../Images/rupee_symbol.png')} style={{marginLeft:20,marginTop:20,height: 25, width: 25, justifyContent: 'flex-start'}}/>*!/*/}
                                        {/*/!*<Text note style={{marginRight:20,marginTop:20,fontSize:20,fontWeight:'bold'*!/*/}
                                        {/*/!*}} >45/-*!/*/}
                                        {/*/!*</Text>*!/*/}
                                        {/*/!*<Image source={require('../Images/qr_code.png')} style={{marginLeft:60,marginTop:20,height: 50, width: 50, justifyContent: 'flex-end'}}/>*!/*/}
                                    {/*/!*</View>*!/*/}
                                    {/*/!*marginLeft:220,*!/*/}
                                    {/*<View style={{flexDirection:"row"}}>*/}
                                    {/*<Text note style={{textAlign:'left',marginBottom:10,fontSize:40,color:'#669999',fontWeight:'bold',marginTop:20,*/}
                                    {/*}} > &#8377;45/-*/}
                                    {/*</Text>*/}
                                    {/*<Button rounded style={{marginLeft:50,marginTop:20,height:28,backgroundColor: '#669999',justifyContent: 'flex-end',}}*/}
                                            {/*onPress={() => Actions.ticketScreen()}>*/}
                                        {/*/!*<Image source={require('../Images/location.png')} style = {{ width: 25, height: 25,paddingLeft:5 }}/>*!/*/}
                                        {/*<Text style={{fontWeight: "bold",fontSize:18}}>Pay securely</Text>*/}
                                    {/*</Button>*/}
                                    {/*</View>*/}

                                    {/*<Text note style={{marginLeft:20,marginTop:20,fontSize:18,fontStyle:'italic',justifyContent: 'flex-start'*/}
                                    {/*}} >This a secure transaction*/}
                                    {/*</Text>*/}

                                    {/*<Text note style={{marginLeft:20,marginBottom:30,fontSize:18,fontStyle:'italic',justifyContent: 'flex-start'*/}
                                    {/*}} >Please do not navigate back or refresh !*/}
                                    {/*</Text>*/}
                                {/*</Card>*/}

                            {/*</Content>*/}


                            {/*<Content />*/}



                        {/*</View>*/}

                    {/*</View>*/}
                {/*</ScrollView>*/}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor:'#0c71b7',
    },
    headerview: {
        // height: 250,
        //borderRadius:25,
        // borderWidth:5,
        // borderColor:'#2EACDE',
        position: 'absolute',
        paddingRight:5,
        paddingLeft:5,
        paddingTop:15,
        backgroundColor:'#0c71b7',
        left: 0,
        right: 0,
        // bottom:0,
        // top:0,


    },
    content1: {
        // backgroundColor:'#FFFFFF',
        marginTop: 90,

    },
    footer: {
        height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: '#8BC34A'
    },
    box: {

        backgroundColor: '#0c71b7',
        // color:'#FFFFFF',
        marginBottom: 5,
        marginRight:5,
        marginLeft:5,
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     backgroundColor: '#F5FCFF',
    // },
    // title: {
    //     textAlign: 'center',
    //     fontSize: 22,
    //     fontWeight: '300',
    //     marginBottom: 20,
    // },
    // header: {
    //     backgroundColor: '#FFFFFF',
    //     padding: 5,
    //     borderTopEndRadius:5,
    //     borderWidth:2,
    //     borderColor:'#2EACDE',
    //     marginBottom:8,
    //     marginRight:5,
    //     marginLeft:5,
    // },
    headerText: {
        // textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        color:'#0c71b7',
        marginTop:20,
    },
    content: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        color:'#669999',
        marginRight:5,
        marginLeft:5,
    },
    // active: {
    //     backgroundColor: 'rgba(255,255,255,1)',
    // },
    // inactive: {
    //     backgroundColor: 'rgba(245,252,255,1)',
    // },
    // selectors: {
    //     marginBottom: 10,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    // },
    // selector: {
    //     backgroundColor: '#F5FCFF',
    //     padding: 10,
    // },
    // activeSelector: {
    //     fontWeight: 'bold',
    // },
    // selectTitle: {
    //     fontSize: 14,
    //     fontWeight: '500',
    //     padding: 10,
    // },
});