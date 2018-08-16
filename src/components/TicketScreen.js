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
import Moment from "moment/moment";

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
                    <View style={[styles.headerview1]}>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={() => Actions.homeScreen()} >
                            <Image source={require('../Images/back_arrow.png')} style={{height: 30, width: 30,
                                color:'#FFFFFF',marginTop:5, flex:1}}
                            />
                        </TouchableOpacity>
                        <Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:5}} > </Text>
                        <Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:1}} >Ticket Details</Text>

                    </View>
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
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                    <Text note style={{marginTop:20,color:'#000',fontSize:14,justifyContent:'flex-start'
                                    }} >Authority
                                    </Text>
                                    <Text note style={{marginTop:5,fontSize:14,color:'#000',justifyContent:'flex-start'
                                    }} >Date
                                    </Text>
                                    <Text note style={{fontSize:14,marginTop:5,color:'#000',justifyContent:'flex-start'
                                    }} >Ticket Number
                                    </Text>
                                    <Text note style={{fontSize:14,color:'#000',marginTop:5,justifyContent:'flex-start'
                                    }} >Price
                                    </Text>
                                    <Text note style={{fontSize:14,color:'#000',marginTop:5,justifyContent:'flex-start'
                                    }} >Number of Riders
                                    </Text>
                                    <Text note style={{fontSize:14,color:'#000',marginTop:5,justifyContent:'flex-start'
                                    }} >From
                                    </Text>
                                    <Text note style={{fontSize:14,color:'#000',marginTop:5,justifyContent:'flex-start'
                                    }} >To
                                    </Text>
                                    <Text note style={{fontSize:14,color:'#000',marginTop:5,justifyContent:'flex-start'
                                    }} >Route(s)
                                    </Text>


                                </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>

                                            <Text note style={{marginTop:20,fontSize:14,color:'#000',justifyContent:'flex-end'
                                            }} >: TSRTC
                                            </Text>
                                            <Text note style={{fontSize:14,color:'#000',justifyContent:'flex-end',marginTop:5,
                                            }} >: {Moment(this.state.date).format('DD/MM/YYYY ' +
                                                'h:mm A')}
                                            </Text>

                                            <Text note style={{fontSize:14,color:'#000',justifyContent:'flex-end',marginTop:5,
                                            }} >: 100100000001
                                            </Text>
                                            <Text note style={{color:'#000',fontSize:14,marginTop:5,
                                            }} >: &#8377;45/-
                                            </Text>
                                            <Text note style={{fontSize:14,color:'#000',marginTop:5,justifyContent:'flex-end'
                                            }} >: 1
                                            </Text>
                                            <Text note style={{fontSize:14,color:'#000',marginTop:5,justifyContent:'flex-end'
                                            }} >: Jedimetla
                                            </Text>
                                            <Text note style={{fontSize:14,color:'#000',marginTop:5,justifyContent:'flex-end'
                                            }} >: Mehdipatnam
                                            </Text>
                                            <Text note style={{fontSize:14,color:'#000',marginTop:5,justifyContent:'flex-end'
                                            }} >: 9K, 113M
                                            </Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <Image source={require('../Images/qr_code.png')} style={{marginTop:20,height: 80, width: 80,alignItems:'center'}}/>
                                </View>
                                <Text note style={{textAlign:'center',color:'#000',marginTop:10,marginBottom:20,fontSize:14,fontStyle:'italic',justifyContent: 'flex-start'
                                }} >Valid for one trip on {Moment(this.state.date).format('DD/MM/YYYY')} only
                                </Text>

                            </Card>
                </View>


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