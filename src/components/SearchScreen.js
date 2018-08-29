import React, { Component } from 'react';
import { Image,StyleSheet,TouchableHighlight,TouchableOpacity,
    Dimensions,ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab, Button, Left, Body, Right,
    Footer, FooterTab} from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.31
import SmartPicker from 'react-native-smart-picker'
import MultiToggleSwitch from 'react-native-multi-toggle-switch';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import BottomNavigation, {
    ShiftingTab
} from 'react-native-material-bottom-navigation'

var params;
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icoons from 'react-native-vector-icons/SimpleLineIcons';
import Iccons from 'react-native-vector-icons/FontAwesome';
import Icconss from 'react-native-vector-icons/Foundation'
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const MARGIN = 40;
// import { BottomNavigation } from 'react-native-material-ui';
// var Accordion = require('react-native-accordion');
const card      = {card: {width: 100,height:300,borderWidth: 3,
        borderRadius: 3,
        borderColor: '#FFFFFF',
        padding: 10}};
const cardItem = {cardItem: {fontSize: 40}};
import Accordion from 'react-native-collapsible/Accordion';
import Moment from "moment/moment";
const ac_icon_blue = require('../Images/ac_icon_blue.png');
const ac_icon_grey = require('../Images/ac_icon_grey.png');
const nonac_icon_blue = require('../Images/nonac_icon_blue.png');
const nonac_icon_grey = require('../Images/nonac_icon_grey.png');

export default class SearchScreen extends Component {


    constructor() {
        super();
        this.state = {
            selected: "At",

        };
        this.state= {
            activeTab: 'home',
        };

        this.state ={
            showacimage:false
        };
        this.state ={
            shownonacimage:false
        };
        this.state ={
            showtextsource:true
        };

        this.state = {
            count: 1
        };
        this.state ={
            showacview: true,
            shownonacview: true,
        };


        this._renderHeader = this._renderHeader.bind(this);
        this._renderContent=this._renderContent.bind(this)
    }

    // state = {
    //     activeTab: 'home'
    // };

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
    ];


    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />

    )


    _handleTabPress(pressedKey) {
        switch (pressedKey) {
            case 'home':
                Actions.homeScreen();
                break;
            case 'track':
                Actions.tripScreen();
                break;
            case 'ticket':
                Actions.ticketScreen(params);
                break;
            case 'more':
                Actions.moreScreen();
                break;
            default:

        }
    }
    renderTab = ({ tab, isActive }) => (
        <ShiftingTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
    handleChange(value: string) {
        this.setState({
            selected: value
        });
    }

    changeACLogo() {
        var imgsource = this.state.showacimage ? ac_icon_blue : ac_icon_grey;
        return (

            <Image source={imgsource} style={{height: 30, width: 30,alignItems:'center'}}/>

        );

    }

    changeNonACLogo() {
        var imgnonacsource = this.state.shownonacimage ? nonac_icon_blue : nonac_icon_grey;
        return (

            <Image source={imgnonacsource} style={{height: 30, width: 30,alignItems:'center'}}/>

        );
    }

    _renderHeader(section) {
        return (
            <View style={styles.header}>

                {(this.state.showacview) && (section.title === '625M') &&
                <View style={{flexDirection: "row", justifyContent: 'flex-start', marginTop:5}}>
                    <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                        <Image source={require('../Images/live_icon.png')}
                               style={{width: 20, height: 20, paddingLeft: 5}}/>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'left',
                            marginLeft:2,
                            // justifyContent:'flex-start'
                        }}>{section.title1}</Text>
                    </View>
                    {/*borderColor: 'grey', borderRadius: 1, borderWidth: 1,*/}
                    <View style={{flexDirection:"column",justifyContent:'space-evenly',marginLeft: 40,marginTop: 8}}>
                        <Icons type='FontAwesome5' name='bus-alt' size={12} color="#2eacde"/>
                        {/*<Image source={require('../Images/school_bus.png')}*/}
                        {/*style={{width: 25, height: 25, paddingLeft: 5}}/>*/}
                        <Text note style={{
                            fontSize: 12, color:'#000',textAlign: 'center', marginTop: 2, marginBottom: 2,
                            flex:5
                        }}>{section.title}</Text>

                    </View>
                    <View style={{flexDirection:'column',justifyContent:'space-evenly',marginLeft:45}}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'right',
                            marginLeft: 120,
                            marginRight:2

                            //    justifyContent:'flex-end'
                        }}>{section.title2}</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',borderColor:'#2eacde',borderWidth:1,borderRadius:1
                            ,marginLeft:65,marginRight:2}}>
                            <Button transparent style={{height: 18,width:width-880,backgroundColor: '#FFFFFF',
                            }}
                                    onPress={this.decrement}>
                                <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'
                                    ,textAlign:'center'}}>-</Text>
                            </Button>
                            <Text note style={{ fontSize: 16, textAlign: 'center'}}>1</Text>
                            {/*{this.state.count}*/}
                            <Button transparent style={{height: 18,width:width-880,backgroundColor: '#FFFFFF',
                            }}
                                    onPress={this.increment}>
                                <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'
                                    ,textAlign:'center'}}>+</Text>
                            </Button>
                        </View>
                    </View>

                </View>
                }
                {(this.state.shownonacview) && (section.title === '635MA') &&
                <View style={{flexDirection: "row", justifyContent: 'flex-start'}}>

                    <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Image source={require('../Images/live_icon.png')}
                               style={{width: 20, height: 20, paddingLeft: 5}}/>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'left',
                            marginLeft:2
                            // justifyContent:'flex-start'
                        }}>{section.title1}</Text>
                    </View>
                    {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                    <View style={{flexDirection:"column",justifyContent:'space-evenly',marginLeft: 40}}>
                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                        <Icons type='FontAwesome5' name='bus-alt' size={12} color="grey"/>
                        {/*<Image source={require('../Images/school_bus.png')}*/}
                        {/*style={{width: 25, height: 25, paddingLeft: 5}}/>*/}
                        <Text note style={{color:'#000',
                            fontSize: 12, textAlign: 'center', marginTop: 2, marginBottom: 2,
                        }}>{section.title}</Text>

                    </View>
                    <View style={{flexDirection:"column",justifyContent:'space-evenly',marginLeft: 12,marginTop:2}}>
                        <Icons type='FontAwesome5' name='bus-alt' size={12} color="grey"/>
                        {/*<Image source={require('../Images/school_bus.png')}*/}
                        {/*style={{width: 25, height: 25, paddingLeft: 5}}/>*/}

                        <Text note style={{color:'#000',
                            fontSize: 12, textAlign: 'center', marginTop: 2, marginBottom: 2,
                        }}>639A</Text>
                    </View>
                    <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'right',
                            marginLeft: 120,
                            marginRight:2

                            //    justifyContent:'flex-end'
                        }}>{section.title2}</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',borderColor:'#2eacde',borderWidth:1,borderRadius:1
                            ,marginLeft:65,marginRight:2}}>
                            <Button transparent style={{height: 18,width:width-880,backgroundColor: '#FFFFFF',
                            }}
                                    onPress={this.decrement}>
                                <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'
                                    ,textAlign:'center'}}>-</Text>
                            </Button>
                            <Text note style={{ fontSize: 16, textAlign: 'center'}}>1</Text>
                            {/*{this.state.count}*/}
                            <Button transparent style={{height: 18,width:width-880,backgroundColor: '#FFFFFF',
                            }}
                                    onPress={this.increment}>
                                <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'
                                    ,textAlign:'center'}}>+</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                }

                {(this.state.shownonacview) && (section.title === '645TA') &&
                <View style={{flexDirection: "row", justifyContent: 'flex-start'}}>
                    <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Image source={require('../Images/live_icon.png')}
                               style={{width: 20, height: 20, paddingLeft: 5}}/>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'left',
                            marginLeft:2
                            // justifyContent:'flex-start'
                        }}>{section.title1}</Text>
                    </View>
                    <View style={{flexDirection:"column",justifyContent:'space-evenly',marginLeft:40}}>
                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                        <Icons type='FontAwesome5' name='bus-alt' size={12} color="grey"/>
                        {/*<Image source={require('../Images/school_bus.png')}*/}
                        {/*style={{width: 25, height: 25, paddingLeft: 5}}/>*/}
                        <Text note style={{color:'#000',
                            fontSize: 12, textAlign: 'center', marginTop: 2, marginBottom: 2,
                        }}>{section.title}</Text>
                    </View>
                    <View style={{flexDirection:"column",justifyContent:'space-evenly',marginLeft: 15,marginTop:2}}>
                        <Icons type='FontAwesome5' name='bus-alt' size={12} color="grey"/>
                        {/*<Image source={require('../Images/school_bus.png')}*/}
                        {/*style={{width: 25, height: 25, paddingLeft: 5}}/>*/}

                        <Text note style={{color:'#000',
                            fontSize: 12, textAlign: 'center', marginTop: 2, marginBottom: 2,
                        }}>648KL</Text>
                    </View>
                    <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'right',
                            marginLeft: 90,
                            marginRight:5

                            //    justifyContent:'flex-end'
                        }}>{section.title2}</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',borderColor:'#2eacde',borderWidth:1,borderRadius:1
                            ,marginLeft:65,marginRight:6}}>
                            <Button transparent style={{height: 18,width:width-880,backgroundColor: '#FFFFFF',
                            }}
                                    onPress={this.decrement}>
                                <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'
                                    ,textAlign:'center'}}>-</Text>
                            </Button>
                            <Text note style={{ fontSize: 16, textAlign: 'center'}}>1</Text>
                            {/*{this.state.count}*/}
                            <Button transparent style={{height: 18,width:width-880,backgroundColor: '#FFFFFF',
                            }}
                                    onPress={this.increment}>
                                <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'
                                    ,textAlign:'center'}}>+</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                }

                {(this.state.showacview) && (section.title === '650N') &&
                <View style={{flexDirection: "row", justifyContent: 'flex-start'}}>

                    <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Image source={require('../Images/live_icon.png')}
                               style={{width: 20, height: 20, paddingLeft: 5}}/>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'left',
                            marginLeft:2
                            // justifyContent:'flex-start'
                        }}>{section.title1}</Text>
                    </View>
                    <View style={{flexDirection:"column",justifyContent:'space-evenly',marginLeft: 40}}>
                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                        <Icons type='FontAwesome5' name='bus-alt' size={12} color="#2eacde"/>
                        {/*<Image source={require('../Images/school_bus.png')}*/}
                        {/*style={{width: 25, height: 25, paddingLeft: 5}}/>*/}
                        <Text note style={{color:'#000',
                            fontSize: 12, textAlign: 'center', marginTop: 2, marginBottom: 2,
                        }}>{section.title}</Text>

                    </View>
                    <View style={{flexDirection:"column",justifyContent:'space-evenly',marginLeft: 18,marginTop:2}}>
                        <Icons type='FontAwesome5' name='bus-alt' size={12} color="#2eacde"/>
                        {/*<Image source={require('../Images/school_bus.png')}*/}
                        {/*style={{width: 25, height: 25, paddingLeft: 5}}/>*/}

                        <Text note style={{color:'#000',
                            fontSize: 12, textAlign: 'center', marginTop: 2, marginBottom: 2
                        }}>652H</Text>
                    </View>
                    <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'right',
                            marginLeft:120,
                            marginRight:2
                            //    justifyContent:'flex-end'
                        }}>{section.title2}</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',borderColor:'#2eacde',borderWidth:1,borderRadius:1
                            ,marginLeft:65,marginRight:2}}>
                            <Button transparent style={{height: 18,width:width-880,backgroundColor: '#FFFFFF',
                            }}
                                    onPress={this.decrement}>
                                <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'
                                    ,textAlign:'center'}}>-</Text>
                            </Button>
                            <Text note style={{ fontSize: 16, textAlign: 'center'}}>1</Text>
                            {/*{this.state.count}*/}
                            <Button transparent style={{height: 18,width:width-880,backgroundColor: '#FFFFFF',
                            }}
                                    onPress={this.increment}>
                                <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'
                                    ,textAlign:'center'}}>+</Text>
                            </Button>
                        </View>
                    </View>


                </View>
                }
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View style={styles.content}>

                {(section.title === '625M') &&

                <View style={{flexDirection: "row"}}>

                    {/*<Text>{this.props.fromLoc}</Text>*/}
                    <Text>{section.content}</Text>
                    <View style={{flexDirection: "column", justifyContent: 'space-evenly'}}>
                        <Image source={require('../Images/from_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/line_coloricon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/to_icon.png')} style={{width: 25, height: 35}}/>

                    </View>
                    <Text>{section.content1}</Text>
                </View>

                }
                {/*<Text>{section.content}</Text>*/}
                {(section.title === '635MA') &&
                <View style={{flexDirection: "row"}}>
                    <Text>{section.content}</Text>
                    <View style={{flexDirection: "column", justifyContent: 'space-evenly'}}>
                        <Image source={require('../Images/from_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/to_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/from_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/to_icon.png')} style={{width: 25, height: 35}}/>

                    </View>
                    <Text>{section.content1}</Text>
                </View>
                }
                {(section.title === '645TA') &&
                <View style={{flexDirection: "row"}}>
                    <Text>{section.content}</Text>
                    <View style={{flexDirection: "column", justifyContent: 'space-evenly'}}>
                        <Image source={require('../Images/from_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/to_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/from_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/to_icon.png')} style={{width: 25, height: 35}}/>

                    </View>
                    <Text>{section.content1}</Text>
                </View>
                }
                {(section.title === '650N') &&
                <View style={{flexDirection: "row"}}>
                    <Text>{section.content}</Text>
                    <View style={{flexDirection: "column", justifyContent: 'space-evenly'}}>
                        <Image source={require('../Images/from_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/to_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/from_icon.png')} style={{width: 25, height: 35}}/>
                        <Image source={require('../Images/to_icon.png')} style={{width: 25, height: 35}}/>

                    </View>
                    <Text>{section.content1}</Text>
                </View>
                }
                <Button style={{height:50,width:width-50,backgroundColor: '#2eacde',
                    marginTop:5,justifyContent:'space-evenly'}}
                        onPress={() => Actions.paymentScreen(params)}>
                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                        <Image source={require('../Images/rupees_symbol.png')} style = {{ width: 25,
                            height: 25,alignItems:'center'}}/>
                        <Text style={{fontWeight: "bold",fontSize:14,color:'#FFFFFF'
                            ,textAlign:'center',paddingLeft:10}}>Buy</Text>


                        {/*<Button rounded style={{height: 25,width:width-820,backgroundColor: '#FFFFFF',*/}
                        {/*}}*/}
                        {/*onPress={this.decrement}>*/}
                        {/*<Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'*/}
                        {/*,textAlign:'center'}}>-</Text>*/}
                        {/*</Button>*/}
                        {/*<Text note style={{ fontSize: 14, color:'#FFFFFF',textAlign: 'center',fontWeight:'bold'}}> 1 </Text>*/}
                        {/*/!*{this.state.count}*!/*/}
                        {/*<Button rounded style={{height: 25,width:width-820,backgroundColor: '#FFFFFF',*/}
                        {/*}}*/}
                        {/*onPress={this.increment}>*/}
                        {/*<Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde'*/}
                        {/*,textAlign:'center'}}>+</Text>*/}
                        {/*</Button>*/}
                    </View>
                </Button>

            </View>
        );
    }

    render() {
        params = {};
        params = {
            fromLoc:this.props.fromLoc,
            toLoc:this.props.toLoc,
            tripdte:this.props.tripdte,
        };
        const SECTIONS = [
            {
                title: '625M',title1:'5:51 PM \n '+
                '',title2:'\u20B9 72/-\n',

                content: '  \n' +
                '5:51 PM    \n'
                + '                  \n'
                + '                  \n'
                + '                  \n'
                + '                  \n'
                + '                  \n'
                + '7:00 PM           \n ',
                content1:'  \n' + this.props.fromLoc +
                '\n' +
                '\n' +
                '  \n' +
                ' 625M   (\u20B9 72/-)\n' +
                '  \n' +
                '\n'+
                this.props.toLoc

            },
            {
                title: '635MA',title1:'5:45 PM \n '+
                '',title2:'\u20B9 68/-\n',

                content: '\n'+
                '5:45 PM    \n'
                + '                  \n'
                + '                  \n'
                + '6:46 PM           \n'
                + '6:52 PM           \n'
                + '                  \n'
                + '                  \n'
                + '7:00 PM           \n ',
                content1:'\n'+ this.props.fromLoc+
                '\n'+
                + '\n'
                + '635MA   (\u20B9 34/-)\n'
                + '\n'
                + 'Lakdikapul\n'
                + 'Lakdikapul\n'
                + '\n'
                + '639A   (\u20B9 34/-)\n'
                +  this.props.toLoc

            },
            {
                title: '645TA',title1:'5:45 PM \n '+
                '',title2:'\u20B9 70/-\n',

                content: '\n'+
                '5:45 PM    \n'
                + '                  \n'
                + '                  \n'
                + '6:46 PM           \n'
                + '6:52 PM           \n'
                + '                  \n'
                + '                  \n'
                + '7:00 PM           \n ',
                content1:'\n'+ this.props.fromLoc+
                '\n'+
                + '\n'
                + '645TA   (\u20B9 35/-)\n'
                + '\n'
                + 'Lakdikapul\n'
                + 'Lakdikapul\n'
                + '\n'
                + '648KL   (\u20B9 35/-)\n'
                +  this.props.toLoc

            },
            {
                title: '650N',title1:'5:55 PM \n '+
                '',title2:'\u20B9 64/-\n',

                content: '\n'+
                '5:55 PM    \n'
                + '                  \n'
                + '                  \n'
                + '6:56 PM           \n'
                + '7:01 PM           \n'
                + '                  \n'
                + '                  \n'
                + '7:04 PM           \n ',
                content1:'\n'+ this.props.fromLoc+
                '\n'+
                + '\n'
                + '650N   (\u20B9 32/-)\n'
                + '\n'
                + 'Lakdikapul\n'
                + 'Lakdikapul\n'
                + '\n'
                + '652H   (\u20B9 32/-)\n'
                +  this.props.toLoc


            },
            {
                title: '625M',title1:'5:56 PM \n '+
                '',title2:'\u20B9 72/-\n',

                content: '  \n' +
                '5:56 PM    \n'
                + '                  \n'
                + '                  \n'
                + '                  \n'
                + '                  \n'
                + '                  \n'
                + '7:03 PM           \n ',
                content1:'  \n' + this.props.fromLoc+
                '\n' +
                '\n' +
                '\n'+
                '625M   (\u20B9 72/-)\n' +
                '\n' +
                '  \n' +
                this.props.toLoc
            },
        ];



        return (

            <View style={styles.container}>
                {/*<ScrollView >*/}
                <View style={[styles.headerview]}>
                    {/*<Container style={[styles.headerview]}>*/}
                    {/*<Content>*/}
                    <View style={{flexDirection:"row",backgroundColor:'#0c71b7',paddingRight:10,
                        paddingLeft:10,}}>
                        <TouchableOpacity onPress={() => Actions.homeScreen(params)} >
                            <Icon type='MaterialIcons' name='arrow-back' size={30} color="#FFFFFF"/>
                        </TouchableOpacity>
                        <Text note style={{marginTop:5,fontSize:16,textAlign:'center',color:'#FFFFFF', flex:5}} >Journey Options</Text>
                        <Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:1}} > </Text>
                    </View>
                    <ScrollView>
                        <Card  styles={{width: 100,height:300,borderWidth: 3,
                            borderColor: '#999999', alignItems: 'center',
                            borderRadius: 5,
                            overflow: 'hidden',
                            elevation: 1}}>
                            <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                <Text note style={{fontSize:12,textAlign:'left',color:'#000'}} > {
                                    Moment(this.props.tripdte).format('DD MMMM')} </Text>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly',marginBottom:10}}>
                                {/*<Image source={require('../Images/smartranlogo.png')} style={{height: 200, width: null, flex: 1}}/>*/}
                                <Text  style={{textAlign:'center',fontSize:16,color:'#000',marginTop:10}} >{this.props.fromLoc}
                                </Text>
                                <Text  style={{textAlign:'center',fontSize:16,color:'#000',marginTop:10}} > To
                                </Text>
                                {/*<Image source={require('../Images/right_arrow.png')} style = {{ width: 25, height: 25,alignItems:'center',marginTop:10 }}/>*/}
                                <Text  style={{textAlign:'center',fontSize:16,color:'#000',marginTop:10}} > {this.props.toLoc}
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                width: width - 10,}}>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'center'}}>

                                <MultiToggleSwitch defaultActiveIndex={2}
                                                   activeContainerStyle={size=20}
                                                   itemsContainer={size=20}
                                >
                                    <MultiToggleSwitch.Item  primaryColor={'#2EACDE'}  onPress={() => this.setState({shownonacview: false, showacview: true})}>
                                        <Iccons type='FontAwesome' name={'snowflake-o'} size={20}  />
                                    </MultiToggleSwitch.Item>
                                    <MultiToggleSwitch.Item  primaryColor={'#2EACDE'} onPress={() => this.setState({shownonacview: true, showacview: false})}>
                                        <Icoons type='SimpleLineIcons' name={'ban'} size={20} />
                                    </MultiToggleSwitch.Item>
                                    <MultiToggleSwitch.Item  primaryColor={'#2EACDE'} onPress={() => this.setState({shownonacview: true, showacview: true})}>
                                        <Icon type='MaterialIcons' name={'done-all'} size={20}/>
                                    </MultiToggleSwitch.Item>
                                </MultiToggleSwitch>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <Text note style={{fontSize:14,textAlign:'center'}} > </Text>
                                <Text note style={{fontSize:14,textAlign:'center'}} > </Text>
                                <Text note style={{fontSize:14,textAlign:'center'}} >A/C</Text>
                                <Text note style={{fontSize:14,textAlign:'center'}} >Non A/C</Text>
                                <Text note style={{fontSize:14,textAlign:'center'}} >ALL</Text>
                                <Text note style={{fontSize:14,textAlign:'center'}} > </Text>
                                <Text note style={{fontSize:14,textAlign:'center'}} > </Text>
                            </View>

                        </Card>
                        {/*<ScrollView>*/}
                        <Accordion
                            sections={SECTIONS}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        >

                        </Accordion>
                    </ScrollView>

                </View>

                <View style={[styles.footer]}>
                    <BottomNavigation
                        tabs={this.tabs}
                        activeTab={this.state.activeTab}
                        onTabPress={newTab => {this.setState({ activeTab: newTab.key }),this._handleTabPress(newTab.key)}}
                        renderTab={this.renderTab}
                        // useLayoutAnimation
                    />
                    {/*<BottomNavigation active={'home'} hidden={false} >*/}
                    {/*<BottomNavigation.Action*/}
                    {/*key="home"*/}
                    {/*// icon={<Image source={require('../Images/home_icon.png')} color="#2eacde" name="Search" style={{ width: 20, height: 20 }} />}*/}
                    {/*label="Home"*/}
                    {/*icon = {<Icoons type='SimpleLineIcons' name='home' size={24} color="#2eacde"/>}*/}
                    {/*// icon = {{ type:'MaterialIcons',name:'home'}}*/}
                    {/*// iconColor:"#2CA8DB"*/}
                    {/*// onLoad={() => this.setState({ active: 'search' })}*/}
                    {/*onPress={() => this.setState({ active: 'home' })}*/}
                    {/*// onPress={()=>this.setState({showasearchimage:!this.state.showasearchimage})}*/}
                    {/*// {this.changebottomLogo()}*/}
                    {/*/>*/}
                    {/*<BottomNavigation.Action*/}
                    {/*key="track"*/}
                    {/*// icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}*/}
                    {/*icon = {<Icons type='FontAwesome5' name='route' size={24} color="#2eacde"/>}*/}
                    {/*label="Track"*/}
                    {/*onPress={() => this.setState({ active: 'track' },Actions.tripScreen())}*/}
                    {/*/>*/}
                    {/*<BottomNavigation.Action*/}
                    {/*key="history"*/}
                    {/*// icon={<Image source={require('../Images/ticket.png')} color="#669999" name="History" style={{ width: 20, height: 20 }} />}*/}
                    {/*icon = {<Icconss type='Foundation' name='ticket' size={24} color="#2eacde"/>}*/}
                    {/*label="History"*/}
                    {/*onPress={() => this.setState({ active: 'history' },Actions.ticketScreen())}*/}
                    {/*/>*/}
                    {/*<BottomNavigation.Action*/}
                    {/*key="more"*/}
                    {/*// icon={<Image source={require('../Images/menuicon.png')} color="#669999" name="More" style={{ width: 20, height: 20 }} />}*/}
                    {/*icon = {<Icoons type='SimpleLineIcons' name='menu' size={24} color="#2eacde"/>}*/}
                    {/*label="More"*/}
                    {/*onPress={() => this.setState({ active: 'more' })}*/}
                    {/*// onPress={() => {this._drawer.open()}}*/}
                    {/*/>*/}
                    {/*</BottomNavigation>*/}
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
        top:0,
        bottom:0,

    },
    content1: {
        backgroundColor:'#0c71b7',
        marginTop: 140,

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
        color:'#0C71B7',
        // marginTop: 10
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
    header: {
        backgroundColor: '#FFFFFF',
        // padding: 0,

        // borderTopEndRadius:5,
        // borderWidth:1,
        flex: 1,
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1,
        width: width - 20,
        borderColor:'#0c71b7',
        // borderBottomColor:'#FFFFFF',
        marginBottom:0,
        marginRight:5,
        marginLeft:5,
    },
    headerText: {
        // textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color:'#000',
        textAlign:'left'
    },
    headerTexttitle:{
        // textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color:'#000',
        textAlign:'center',
        justifyContent:'flex-start'
    },
    content: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginRight:5,
        marginLeft:5,
        textAlign:'right'
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