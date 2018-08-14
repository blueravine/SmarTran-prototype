import React, { Component } from 'react';
import { Image,StyleSheet,TouchableOpacity,
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

export default class TicketScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: "At",

        };

    }

    render() {

        return (

            <View style={styles.container}>
                {/*<ScrollView>*/}
                <View style={[styles.headerview]}>
                    {/*<Content>*/}
                    {/*</Content>*/}
                    {/*<Content/>*/}
                    {/*<Container >*/}
                        {/*<Content>*/}
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={() => Actions.homeScreen()} >
                            <Image source={require('../Images/back_arrow.png')} style={{height: 30, width: 30,
                                color:'#FFFFFF',marginTop:5, flex:1}}
                            />
                        </TouchableOpacity>
                        <Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:5}} > </Text>
                        <Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:1}} >Ticket Details</Text>


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
                                    }} >SmarTran Ticket
                                    </Text>
                                    {/*<Image source={require('../Images/wind_chime.png')} style={{height: 60,width: 60}}/>*/}
                                </View>


                                {/*</CardItem>*/}
                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                    <Text note style={{marginTop:20,fontSize:18,fontWeight:'bold',justifyContent:'flex-start'
                                    }} >TSRTC
                                    </Text>
                                    <Text note style={{marginTop:20,fontSize:18,fontWeight:'bold',justifyContent:'flex-end'
                                    }} >02/08/2018 11:50 AM
                                    </Text>
                                </View>

                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                    <Text note style={{marginTop:20,fontSize:18,fontWeight:'bold',justifyContent:'flex-start'
                                    }} >Ticket Number
                                    </Text>
                                    <Text note style={{marginTop:20,fontSize:18,fontWeight:'bold',justifyContent:'flex-end'
                                    }} >100100000001
                                    </Text>
                                </View>

                                <Text note style={{textAlign:'center',marginTop:20,fontSize:18,fontWeight:'bold'
                                }} >1 Person Ride once only
                                </Text>

                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                    <Text note style={{marginRight:20,marginTop:10,fontSize:40,fontWeight:'bold'
                                    }} > &#8377;45/-
                                    </Text>
                                    <Image source={require('../Images/qr_code.png')} style={{marginLeft:60,marginTop:20,height: 50, width: 50, justifyContent: 'flex-end'}}/>
                                </View>
                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                    <Text note style={{textAlign:'left',marginTop:10,fontSize:16,fontWeight:'bold'
                                    }} >From: Jedimetla
                                    </Text>
                                    {/*<Image source={require('../Images/arrow.png')} style={{width: 25, height: 25,marginTop:10}}/>*/}
                                    <Text note style={{textAlign:'right',fontSize:16,fontWeight:'bold',marginTop:10
                                    }} >To: Mehdipatnam
                                    </Text>

                                </View>


                                    <Text note style={{textAlign:'center',marginTop:10,fontSize:16,fontWeight:'bold',
                                    }} >Route(s): 9K, 113M
                                    </Text>


                                <Text note style={{textAlign:'center',marginTop:10,marginBottom:40,fontSize:18,fontStyle:'italic',justifyContent: 'flex-start'
                                }} >Valid for one trip on 02/08/2018 only
                                </Text>

                                {/*<Text note style={{marginLeft:20,marginBottom:10,fontSize:18,fontStyle:'italic',justifyContent: 'flex-start'*/}
                                {/*}} >valid for today 02/08/2018 only*/}
                                {/*</Text>*/}
                            </Card>

                        {/*</Content>*/}


                        {/*<Content />*/}

                    {/*</Container>*/}
                </View>

                    {/*<View style={[styles.content1]}>*/}
                        {/*<View style={[styles.box]}>*/}
                            {/*/!*<Text note style={{fontSize:18}} >   </Text>*!/*/}


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
                                        {/*<View style={{flexDirection:"column"}}>*/}
                                        {/*/!*<Image source={require('../Images/smartranlogo.png')} style={{height: 200, width: null, flex: 1}}/>*!/*/}
                                        {/*<Text note style={{textAlign:'center',paddingBottom:10,fontSize:18,fontWeight:'bold',*/}
                                        {/*}} >Congratulations !*/}
                                        {/*</Text>*/}
                                        {/*<Text note style={{textAlign:'center',fontSize:18,fontWeight:'bold',*/}
                                        {/*}} >Have a safe trip ! !*/}
                                        {/*</Text>*/}

                                        {/*</View>*/}


                                    {/*/!*</CardItem>*!/*/}


                                {/*</Card>*/}

                            {/*</Content>*/}


                            {/*<Content />*/}



                          {/**/}
                          {/**/}
                        {/*</View>*/}

                    {/*</View>*/}
                {/*</ScrollView>*/}


                <View style={[styles.footer]}>
                    <BottomNavigation active={'history'} hidden={false} >
                        <BottomNavigation.Action
                            key="search"
                            icon={<Image source={require('../Images/searchmagnifier.png')}color="#669999" name="Search" style={{ width: 20, height: 20 }} />}
                            label="Search"
                            // iconColor:"#2CA8DB"
                            onPress={() => this.setState({ active: 'search' },Actions.homeScreen())}
                        />
                        <BottomNavigation.Action
                            key="trips"
                            icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
                            label="Trips"
                            onPress={() => this.setState({ active: 'trips' })}
                        />
                        <BottomNavigation.Action
                            key="history"
                            icon={<Image source={require('../Images/ticket.png')} color="#669999" name="History" style={{ width: 20, height: 20 }} />}
                            label="History"
                            onPress={() => this.setState({ active: 'history' })}
                        />
                        <BottomNavigation.Action
                            key="more"
                            icon={<Image source={require('../Images/menuicon.png')} color="#669999" name="More" style={{ width: 20, height: 20 }} />}
                            label="More"
                            onPress={() => this.setState({ active: 'more' })}
                        />
                    </BottomNavigation>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0c71b7',
    },
    headerview: {
        // height: 250,
        //borderRadius:25,
        // borderWidth:5,
        // borderColor:'#2EACDE',
        position: 'absolute',
        paddingRight:5,
        paddingLeft:5,
        paddingTop:0,
        backgroundColor:'#0c71b7',
        left: 0,
        right: 0,


    },
    content1: {
        // backgroundColor:'#FFFFFF',
        marginTop: 385,

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
        // marginBottom: 5,
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
    // headerText: {
    //     // textAlign: 'center',
    //     fontSize: 16,
    //     fontWeight: '500',
    //     color:'#0C71B7',
    // },
    // content: {
    //     padding: 20,
    //     backgroundColor: '#FFFFFF',
    //     marginRight:5,
    //     marginLeft:5,
    // },
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