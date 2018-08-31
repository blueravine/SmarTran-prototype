import React, { Component } from 'react';
import { Image,StyleSheet,TouchableOpacity,AsyncStorage,
    Dimensions,ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab, Button, Left, Body, Right,
    Footer, FooterTab} from 'native-base';

import BottomNavigation, {
    ShiftingTab
} from 'react-native-material-bottom-navigation'


import ToggleSwitch from 'toggle-switch-react-native';
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.31
import SmartPicker from 'react-native-smart-picker'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iccon from 'react-native-vector-icons/SimpleLineIcons';
import Iccons from 'react-native-vector-icons/Foundation'
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
// import { BottomNavigation } from 'react-native-material-ui';
import Moment from "moment/moment";
import Toast from "react-native-simple-toast";

const card      = {card: {width: 100,height:300,borderWidth: 3,
        borderRadius: 3,
        borderColor: '#FFFFFF',
        padding: 10}};
const cardItem = {cardItem: {fontSize: 40}};
var ticketdata;
var cardListArr;
var ticketobj;
var ticketkeys;
var ticketListArr;
export default class TicketScreen extends Component {

    constructor() {
        super();
        // this.state= {
        //     activeTab: 'ticket',
        //     thisticket : [],
        // };


        this.state = {
            thisticket : [],
            activeTab: 'ticket',
            thiscard : [],
        };


    }

    tabs = [
        {
            key:"home",
            // icon={<Image source={require('../Images/home_icon.png')} color="#2eacde" name="Search" style={{ width: 20, height: 20 }} />}
            label:"Home",
            icon : 'home',
            barColor: '#2eacde',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"track",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'location-on' ,
            label:"Track",
            barColor: '#2eacde',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"ticket",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon :'receipt' ,
            label:"Ticket",
            barColor: '#2eacde',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"more",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'menu' ,
            label:"More",
            barColor: '#2eacde',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]


    _handleTabPress(pressedKey) {
        switch (pressedKey) {
            case 'home':
                Actions.homeScreen();
                break;
            case 'track':
                Actions.tripScreen();
                break;
            case 'ticket':
                // Actions.ticketScreen();
                break;
            case 'more':
                Actions.moreScreen();
                break;
            default:

        }
    }
    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />

    );

    renderTab = ({ tab, isActive }) => (
        <ShiftingTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    );

    async componentDidMount() {
        await AsyncStorage.getItem('ticket')
            .then((ticket) => {
                ticketdata = ticket ? JSON.parse(ticket) : [];
                // Toast.show(ticketdata[0].From, Toast.LONG);
                this.setState({thisticket: ticketdata});
            }).done();
    }

    renderTicketText(currentTicket) {

        // return (

        //         var ticketobj = [currentTicket];
        // ticketobj.forEach(function(AllTicket){
        //     var ticketkeys=Object.keys(AllTicket);
        //     <Text note style={{
        //         marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
        //     }}>{ticketkeys[0]+ ":"+AllTicket[ticketkeys[0]]}</Text>
        //         alert(ticketkeys[0]+ ":"+AllTicket[ticketkeys[0]]);
        //
        // })
        // // )
    }

    render() {

        // const { ticketdata: list } = this.state.thiscard;
        //         ticketListArr = list && list.map(({Authority, Date},index) => {
        //             // ticketkeys=Object.keys(AllTicket);
        //             <View key={index}>
        //                 <Text>{Authority}</Text>
        //                 <Text>{Date}</Text>
        //             </View>


        //
        // var ticketobj;
        // var ticketkeys;
        // var ticketListArr;
        //
        // ticketListArr = this.state.thiscard.forEach(function(AllTicket){
        //     ticketkeys=Object.keys(AllTicket);

            {/*<Text note style={{*/}
                {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
            {/*}}>{ticketkeys[0] + ":" + AllTicket[ticketkeys[0]]}</Text>*/}
            // alert(ticketkeys[0]+ ":"+AllTicket[ticketkeys[0]]);

        // });
        // const { thisticket: list } = this.state.thisticket
        cardListArr = this.state.thisticket.map((AllTicket)=>{
            ticketkeys=Object.keys(AllTicket);
            // var ticketkeys=Object.keys(AllTicket);
            // alert(ticketkeys[0]+ ":"+AllTicket[ticketkeys[0]]);
            return(
            <View style={{  paddingRight:25,
                paddingLeft:35,
                paddingTop:20,}}>
                <Card>

                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                        <Text  style={{marginTop:20,fontSize:18,color:'#000',fontWeight:'bold',
                        }} >SmarTran Ticket
                        </Text>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                        <Text note style={{
                            marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                             }}>{ticketkeys[0]  }</Text>
                            <Text note style={{
                                marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                            }}>{ticketkeys[1] }</Text>
                            <Text note style={{
                                marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                            }}>{ticketkeys[2] }</Text>
                            <Text note style={{
                                marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                            }}>{ticketkeys[3]}</Text>
                            <Text note style={{
                            marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                             }}>{ticketkeys[4]}</Text>
                            <Text note style={{
                                marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                            }}>{ticketkeys[5]}</Text>
                            <Text note style={{
                                marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                            }}>{ticketkeys[6]}</Text>
                            <Text note style={{
                                marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                            }}>{ticketkeys[7] }</Text>
                        {/*{this.setState((({thiscard: cardInfo}), ticketListArr))}*/}
                        </View>
                        <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                            <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{":" + AllTicket[ticketkeys[0]]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{":" + AllTicket[ticketkeys[1]]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{":" + AllTicket[ticketkeys[2]]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{":" + AllTicket[ticketkeys[3]]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{":" + AllTicket[ticketkeys[4]]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{":" + AllTicket[ticketkeys[5]]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{":" + AllTicket[ticketkeys[6]]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{":" + AllTicket[ticketkeys[7]]}</Text>
                                {/*{this.setState((({thiscard: cardInfo}), ticketListArr))}*/}
                            </View>
                        </View>
                    </View>
                    {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                        {/*<Text note style={{*/}
                            {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
                        {/*}}>{":" + AllTicket[ticketkeys[0]]}</Text>*/}
                        {/*/!*{this.setState((({thiscard: cardInfo}), ticketListArr))}*!/*/}
                        {/*</View>*/}
                    {/*</View>*/}

                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                        <Image source={require('../Images/qr_code.png')} style={{marginTop:20,height: 80, width: 80,alignItems:'center'}}/>
                    </View>
                    <Text note style={{textAlign:'center',color:'#000',marginTop:10,marginBottom:20,fontSize:14,fontStyle:'italic',justifyContent: 'flex-start'
                    }} >Valid for one trip on {AllTicket[ticketkeys[1]]} only{"\n"}{"\n"}{"\n"}
                    </Text>
                </Card>
            </View>
        // ));
            );
        });

        return (

            <View style={styles.container}>
                {/*<ScrollView>*/}
                {/*<View style={[styles.headerview]}>*/}
                {/*<Content>*/}
                {/*</Content>*/}
                {/*<Content/>*/}
                {/*<Container >*/}
                {/*<Content>*/}
                {/*<View style={[styles.headerview1]}>*/}
                {/*<View style={{flexDirection:"row",backgroundColor:'#0c71b7',paddingRight:10,*/}
                {/*paddingLeft:10,}}>*/}
                {/*<TouchableOpacity onPress={() => Actions.homeScreen()} >*/}
                {/*<Icon type='MaterialIcons' name='arrow-back' size={30} color="#FFFFFF"/>*/}
                {/*</TouchableOpacity>*/}
                {/*<Text note style={{marginTop:5,fontSize:16,textAlign:'center',color:'#FFFFFF', flex:5}} >Ticket Details </Text>*/}
                {/*<Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:1}} > </Text>*/}

                {/*</View>*/}
                {/*</View>*/}


                {/*</View>*/}
                {/*<View style={[styles.headerview1]}>*/}
                {/*<View style={{flexDirection:"row",backgroundColor:'#0c71b7',paddingRight:10,*/}
                {/*paddingLeft:10,}}>*/}
                {/*<TouchableOpacity onPress={() => Actions.homeScreen()} >*/}
                {/**/}
                {/*<Icon type='MaterialIcons' name='arrow-back' size={30} color="#FFFFFF"/>*/}
                {/*</TouchableOpacity>*/}
                {/*<Text note style={{marginTop:5,fontSize:16,textAlign:'center',color:'#FFFFFF', flex:5}} >Ticket Details </Text>*/}
                {/*<Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:1}} > </Text>*/}

                {/*</View>*/}
                {/*</View>*/}
                <ScrollView>

                    <View style={{flexDirection:"row",backgroundColor:'#0c71b7',paddingRight:10,
                        paddingLeft:10,}}>
                        <TouchableOpacity onPress={() => Actions.homeScreen()} >
                            {/*<Image source={require('../Images/back_arrow.png')} style={{height: 30, width: 30,*/}
                            {/*color:'#FFFFFF',marginTop:5, flex:1}}*/}
                            {/*/>*/}
                            <Icon type='MaterialIcons' name='arrow-back' size={30} color="#FFFFFF"/>
                        </TouchableOpacity>
                        <Text note style={{marginTop:5,fontSize:16,textAlign:'center',color:'#FFFFFF', flex:5}} >Ticket Details </Text>
                        <Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:1}} > </Text>

                    </View>
                    <View >
                        {cardListArr}
                    </View>
                </ScrollView>
                <View style={[styles.footer]}>

                    <BottomNavigation
                        tabs={this.tabs}
                        activeTab={this.state.activeTab}
                        onTabPress={newTab => {this.setState({ activeTab: newTab.key }),this._handleTabPress(newTab.key)}}
                        renderTab={this.renderTab}
                        // useLayoutAnimation
                    />

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 5,
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
        paddingRight:25,
        paddingLeft:35,
        paddingTop:34,
        backgroundColor:'#0c71b7',
        left: 0,
        right: 0,


    },
    headerview1: {
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