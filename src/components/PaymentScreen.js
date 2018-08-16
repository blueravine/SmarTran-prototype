import React, { Component } from 'react';
import { Image,StyleSheet,TouchableOpacity,
    Dimensions,ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem,Radio, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab, Button, Icon, Left, Body, Right,
    Footer, FooterTab} from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.31
import SmartPicker from 'react-native-smart-picker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const MARGIN = 40;
import { BottomNavigation } from 'react-native-material-ui';

const card      = {card: {width: 100,height:300,borderWidth: 3,
        borderRadius: 3,
        borderColor: '#FFFFFF',
        padding: 10}};
const cardItem = {cardItem: {fontSize: 40}};
import Accordion from 'react-native-collapsible/Accordion';
import Moment from "moment/moment";



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
        content: '       Paytm\n\n' +
        '         Mobikwik\n\n' +
        '         Freecharge'
    },
];
var radio_props;
export default class PaymentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "At",

        };
        this.state={
            value:"",
        };

    }

    _onPressHandle = () => {
        this.setState({value: !this.state.value})
    }

    _renderHeader(section) {
        // radio_props = [
        //     {label: section.title, value: 0 }
        // ];
        return (
            <View style={styles.header}>
                <View style={{flexDirection:"row"}}>
                    {/*<Image source={require('../Images/circleicon.png')} style={{height: 25,marginLeft:15,width: 25,marginTop:20,justifyContent:'flex-start'}}/>*/}

                    {/*<RadioForm*/}
                        {/*radio_props={radio_props}*/}
                        {/*initial={ '' }*/}
                        {/*labelColor={'#000'}*/}
                        {/*buttonColor={'#2eacde'}*/}
                        {/*onPress={this._onPressHandle}*/}
                    {/*/>*/}

                    {/*<Radio style={{width:15,height:30}}*/}
                        {/*selected={false}*/}
                           {/*color={'#2eacde'}*/}
                           {/*radioColor={'#2eacde'}*/}
                           {/*radioBtnSize={20}*/}
                           {/*selectedColor={'#46de21'}/>*/}
                           <TouchableOpacity>
                    <Text style={styles.headerText}>{section.title}</Text>
                           </TouchableOpacity>
                </View>
                {/*<View style={{flexDirection:"column"}}>*/}
                    {/*<Text style={styles.headerText}>{section.title}</Text>*/}
                {/*</View>*/}
            </View>
        );
    }
    _renderContent(section) {
        // radio_props = [
        //     {label: section.content, value: 0 }
        //     // {label: '', value: 1 }
        // ];
        return (
            <View style={styles.content}>

                {/*<RadioForm*/}
                    {/*radio_props={radio_props}*/}
                    {/*initial={0}*/}
                    {/*labelColor={'#000'}*/}
                    {/*buttonColor={'#2eacde'}*/}
                    {/*onPress={this._onPressHandle}*/}
                {/*/>*/}
                <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"column"}}>
                <Radio style={{width:30,height:30,borderRadius:10,borderWidth:10,borderColor:'#2eacde'}}
                    selected={true}
                       color={'#2eacde'}
                       radioColor={'#2eacde'}
                       radioBtnSize={20}
                       selectedColor={'#2eacde'}
                       onPress={this._onPressHandle}/>
                <Radio style={{width:30,height:30,borderRadius:10,marginTop:10,borderWidth:10,borderColor:'#2eacde'}}
                       selected={false}
                       color={'#2eacde'}
                       radioColor={'#2eacde'}
                       radioBtnSize={20}
                       selectedColor={'#2eacde'}
                       onPress={this._onPressHandle}/>
                <Radio style={{width:30,height:30,borderRadius:10,marginTop:10,borderWidth:10,borderColor:'#2eacde'}}
                       selected={false}
                       color={'#2eacde'}
                       radioColor={'#2eacde'}
                       radioBtnSize={20}
                       selectedColor={'#2eacde'}
                       onPress={this._onPressHandle}/>

                </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"column"}}>
                            <Text>{section.content}</Text>
                        </View></View>
                </View>
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
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={() => Actions.searchScreen()} >
                            <Image source={require('../Images/back_arrow.png')} style={{height: 30, width: 30,
                                color:'#FFFFFF',marginTop:5, flex:1}}
                            />
                        </TouchableOpacity>
                        <Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:5}} > </Text>
                        <Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:1}} >Payment Details</Text>


                    </View>
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
                            {/*<Image source={require('../Images/wind_chime.png')} style={{height: 60, width: 60}}/>*/}
                            <Text  style={{marginTop:20,fontSize:18,color:'#000',fontWeight:'bold',
                            }} >Payment
                            </Text>
                            {/*<Image source={require('../Images/wind_chime.png')} style={{height: 60,width: 60}}/>*/}
                        </View>

                        <View style={{flexDirection:"row",justifyContent:'space-evenly'}}
                              onPress={this._showDateTimePicker}>
                            <Text note style={{fontSize:12,textAlign:'left',color:'#000',flex:1}} onPress={this._showDateTimePicker}> {
                                Moment(this.state.date).format('DD MMMM')} </Text>

                            <Text note style={{textAlign:'right',fontSize:14,color:'#000',fontWeight:'bold',flex:1
                            }} > &#8377;45/-
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:'space-evenly',marginBottom:10}}>
                            {/*<Image source={require('../Images/smartranlogo.png')} style={{height: 200, width: null, flex: 1}}/>*/}
                            <Text  style={{textAlign:'center',fontSize:16,color:'#000',marginTop:10}} >From: Jedimetla
                            </Text>

                            {/*<Image source={require('../Images/right_arrow.png')} style = {{ width: 25, height: 25,alignItems:'center',marginTop:10 }}/>*/}
                            <Text  style={{textAlign:'center',fontSize:16,color:'#000',marginTop:10}} >To: Mehdipatnam
                            </Text>


                        </View>

                        {/*</CardItem>*/}
                        <View style={{flexDirection:"row"}}>
                            <Text  style={{marginLeft:20,marginTop:20,fontSize:18,fontWeight:'bold',color:'#000',justifyContent:'flex-start'
                            }} >Select Payment Method
                            </Text>
                            {/*<Text note style={{textAlign:'left',justifyContent: 'flex-end',marginBottom:10,fontSize:40,color:'#000',fontWeight:'bold',marginTop:20,*/}
                            {/*}} > &#8377;45/-*/}
                            {/*</Text>*/}
                            {/*<Text note style={{marginTop:20,marginLeft:100,fontSize:18,fontWeight:'bold',justifyContent:'flex-end'*/}
                            {/*}} >02/08/2018 11:50 AM*/}
                            {/*</Text>*/}
                        </View>
                        {/*<ScrollView>*/}

<TouchableOpacity>
                        <Accordion
                            sections={SECTIONS}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
</TouchableOpacity>
                        {/*</Accordion>*/}
                        {/*</ScrollView>*/}
                        {/*<View style={{flexDirection:"row"}}>*/}
                        {/*<Image source={require('../Images/rupee_symbol.png')} style={{marginLeft:20,marginTop:20,height: 25, width: 25, justifyContent: 'flex-start'}}/>*/}
                        {/*<Text note style={{marginRight:20,marginTop:20,fontSize:20,fontWeight:'bold'*/}
                        {/*}} >45/-*/}
                        {/*</Text>*/}
                        {/*<Image source={require('../Images/qr_code.png')} style={{marginLeft:60,marginTop:20,height: 50, width: 50, justifyContent: 'flex-end'}}/>*/}
                        {/*</View>*/}
                        {/*marginLeft:220,*/}
                        <View style={{flexDirection:"row"}}>
                            {/*<Text note style={{textAlign:'left',marginBottom:10,fontSize:40,color:'#2eacde',fontWeight:'bold',marginTop:20,*/}
                            {/*}} > &#8377;45/-*/}
                            {/*</Text>*/}
                            <Button style={{height:50,width:width-10,backgroundColor: '#2eacde',
                                marginTop:30,justifyContent:'space-evenly'}}
                                    onPress={() => Actions.ticketScreen()}>
                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                    {/*<Image source={require('../Images/search_magnifie.png')} style = {{ width: 25,*/}
                                        {/*height: 25,alignItems:'center'}}/>*/}
                                    <Text style={{fontWeight: "bold",fontSize:14,color:'#FFFFFF'
                                        ,textAlign:'center',paddingLeft:10}}>Pay securely</Text>
                                </View>
                            </Button>
                            {/*<Button rounded style={{marginLeft:50,marginTop:20,height:28,backgroundColor: '#2eacde',justifyContent: 'flex-end',}}*/}
                                    {/*onPress={() => Actions.ticketScreen()}>*/}
                                {/*/!*<Image source={require('../Images/location.png')} style = {{ width: 25, height: 25,paddingLeft:5 }}/>*!/*/}
                                {/*<Text style={{fontWeight: "bold",fontSize:18}}>Pay securely</Text>*/}
                            {/*</Button>*/}
                        </View>

                        {/*<Text note style={{marginLeft:20,marginTop:20,fontSize:18,fontStyle:'italic',justifyContent: 'flex-start'*/}
                        {/*}} >This a secure transaction*/}
                        {/*</Text>*/}

                        {/*<Text note style={{marginLeft:20,marginBottom:30,fontSize:18,fontStyle:'italic',justifyContent: 'flex-start'*/}
                        {/*}} >Please do not navigate back or refresh !*/}
                        {/*</Text>*/}
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
    header: {
        backgroundColor: '#FFFFFF',
        padding: 10,

        // borderTopEndRadius:5,
        // borderWidth:1,
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1,
        width: width - 20,
        borderColor:'#0c71b7',
        // borderBottomColor:'#FFFFFF',
        marginBottom:0,
        marginRight:5,
        marginLeft:5,
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
        // fontWeight: '500',
        color:'#000',
        marginTop:20,
        justifyContent:'flex-end'
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