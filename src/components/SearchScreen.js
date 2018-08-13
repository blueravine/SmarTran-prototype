import React, { Component } from 'react';
import { Image,StyleSheet,TouchableHighlight,TouchableOpacity,
  Dimensions,ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab, Button, Icon, Left, Body, Right,
    Footer, FooterTab} from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.31
import SmartPicker from 'react-native-smart-picker'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const MARGIN = 40;
import { BottomNavigation } from 'react-native-material-ui';
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
const SECTIONS = [
    // {
    //     title: '  189M ',title1:'5:51 PM \n '+
    //     '5 min away',title2:'\u20B9 72/-\n',
    //
    //     content: '5:51 PM  o  Jedimetla\n'
    //     + '                 |\n'
    //     + '                 |  189M\n'
    //     + '                 |\n'
    //     + '7:00 PM  o  Medipatnam'
    // },
    {
        title: '  189M ',title1:'5:51 PM \n '+
        '5 min away',title2:'\u20B9 72/-\n',

        content: '5:51 PM  o  Jedimetla\n'
        + '                 |\n'
        + '                 |  189M\n'
        + '                 |\n'
        + '7:00 PM  o  Medipatnam'
    },
    {
        title: '  158J ',title1:'5:45 PM \n '+
        '5 min away',title2:'\u20B9 68/-\n',

        content: '5:45 PM  o  Jedimetla\n'
        + '                 |\n'
        + '                 |  158J\n'
        + '                 |\n'
        + '6:46 PM  o  Lakdikapul\n'
        + '6:52 PM  o  Lakdikapul\n'
        + '                 |\n'
        + '                 |  113M\n'
        + '                 |\n'
        + '7:04 PM  o  Mehdipatnam'
    },
    {
        title: '  158JA ',title1:'5:45 PM \n '+
        '5 min away',title2:'\u20B9 70/-\n',

        content: '5:45 PM  o  Jedimetla\n'
        + '                 |\n'
        + '                 |  158JA\n'
        + '                 |\n'
        + '6:46 PM  o  Lakdikapul\n'
        + '6:52 PM  o  Lakdikapul\n'
        + '                 |\n'
        + '                 |  216KL\n'
        + '                 |\n'
        + '7:04 PM  o  Mehdipatnam'
    },
    {
        title: '  9K ',title1:'5:45 PM \n '+
        '5 min away',title2:'\u20B9 65/-\n',

        content: '5:55 PM  o  Jedimetla\n'
        + '                 |\n'
        + '                 |   9K\n'
        + '                 |\n'
        + '6:56 PM  o  AG office/Birla Mandir\n'
        + '7:01 PM  o  AG office/Birla Mandir\n'
        + '                 |\n'
        + '                 |  113I/M\n'
        + '                 |\n'
        + '7:14 PM  o  Mehdipatnam'
    },
    {
        title: '  189M ',title1:'5:56 PM \n '+
        '5 min away',title2:'\u20B9 72/-\n',

        content: '5:56 PM  o  Jedimetla\n'
        + '                 |\n'
        + '                 |   189M\n'
        + '                 |\n'
        + '7:03 PM  o  Medipatnam'
    },
    {
        title: '  9K ',title1:'6:08 PM \n '+
        '5 min away',title2:'\u20B9 65/-\n',

        content: '6:08 PM  o  Jedimetla\n'
        + '                 |\n'
        + '                 |   9K\n'
        + '                 |\n'
        + '7:09 PM  o  AG office/Birla Mandir   '
        + '7:16 PM  o  AG office/Birla Mandir\n'
        + '                 |\n'
        + '                 |  113M\n'
        + '                 |\n'
        + '7:27 PM  o  Mehdipatnam'
    },
];
export default class SearchScreen extends Component {

    constructor() {
        super();
        this.state = {
            selected: "At",

        };
        this.state ={
            showacimage:false
        };
        this.state ={
            shownonacimage:false
        };
    }

    handleChange(value: string) {
        this.setState({
            selected: value
        });
    }
    state = {
        isOnDefaultToggleSwitch: true,
        isOnLargeToggleSwitch: false,
        isOnBlueToggleSwitch: false,
    };

    onToggle(isOn){
        alert('Changed to ' + isOn)
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
                <View style={{flexDirection:"row",justifyContent:'flex-start'}}>
                    <Button  style={{backgroundColor: '#2eacde'}}>
                        {/*<Image source={require('../Images/location.png')} style = {{ width: 25, height: 25,paddingLeft:5 }}/>*/}
                        <Text style={styles.headerText}>{section.title}</Text>
                    </Button>

                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize: 14,
                        fontWeight: 'bold',
                        color:'#000',
                        textAlign:'left',
                        justifyContent:'flex-end'}}>{section.title1}</Text>
                    <Text style={{fontSize: 14,
                        fontWeight: 'bold',
                        color:'#000',
                        textAlign:'right',
                        justifyContent:'flex-end'}}>{section.title2}</Text>
                </View>
                </View>
            </View>
        );
    }

    _renderContent(section) {
        return (
            <View style={styles.content}>
                {/*<Text>{section.content}</Text>*/}
                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                    <Text>{section.content}</Text>
                    {/*<Button rounded style={{backgroundColor: '#0C71B7',justifyContent: 'flex-start',}}onPress={this._onPress}>*/}
                    {/*/!*<Image source={require('../Images/location.png')} style = {{ width: 25, height: 25,paddingLeft:5 }}/>*!/*/}
                    {/*<Text>Buy --></Text>*/}
                    {/*</Button>*/}
                    {/*<Button rounded style={{marginLeft:220,height:28,backgroundColor: '#669999',justifyContent: 'flex-end',}}*/}
                    {/*onPress={() => Actions.paymentScreen()}>*/}
                    {/*//     /!*<Image source={require('../Images/location.png')} style = {{ width: 25, height: 25,paddingLeft:5 }}/>*!/*/}
                    {/*//     <Text style={{fontWeight: "bold",fontSize:14}}>Buy</Text>*/}
                    {/*// </Button>*/}
                    <TouchableHighlight onPress={() => Actions.paymentScreen()} >
                        <Image source={require('../Images/buynew_icon.png')} style={{height: 50, width: 50,alignItems:'center'}}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    render() {

        return (

            <View style={styles.container}>
                {/*<ScrollView >*/}
                <View style={[styles.headerview]}>
                    {/*<Container style={[styles.headerview]}>*/}
                        {/*<Content>*/}
                    <View style={{flexDirection:"row"}}>
                        <TouchableHighlight onPress={() => Actions.homeScreen()} >
                            <Image source={require('../Images/previous.png')} style={{height: 35, width: 35,
                                alignItems:'flex-start',color:'#FFFFFF',marginTop:5}}
                            />
                        </TouchableHighlight>

                        {/*<Text note style={{fontSize:12,justifyContent:'flex-end',color:'#FFFFFF',marginTop:5}} >Journey Details</Text>*/}
                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                        {/*<TouchableOpacity onPress={this._showDateTimePicker}>*/}
                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}


                        {/*<Text note style={{fontSize:12,textAlign:'center',justifyContent:'flex-start',color:'#FFFFFF',marginTop:5}} onPress={this._showDateTimePicker}> {*/}
                            {/*Moment(this.state.date).format('DD MMMM')} </Text>*/}
                        {/*<Text note style={{fontSize:10,color:'#000'}}*/}
                        {/*onPress={this._showDateTimePicker}> {*/}
                        {/*Moment(this.state.date).format(' MMMM ')} </Text>*/}
                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}*/}
                        {/*onPress={this._showDateTimePicker}>*/}
                        {/*<Text note style={{fontSize:10,color:'#000'}}*/}
                        {/*onPress={this._showDateTimePicker}> {*/}
                        {/*Moment(this.state.date).format(' ddd ')} </Text>*/}
                        {/*<Text note style={{fontSize:10,color:'#000'}}*/}
                        {/*onPress={this._showDateTimePicker}> {*/}
                        {/*Moment(this.state.date).format(' MMM ')} </Text>*/}
                        {/*</View>*/}
                        {/*</View>*/}
                        {/*</TouchableOpacity>*/}
                        {/*</View>*/}

                    </View>

                    <Card  styles={{width: 100,height:300,borderWidth: 3,
                                        borderColor: '#999999', alignItems: 'center',
                                        borderRadius: 5,
                                        overflow: 'hidden',

                                        elevation: 1,
                                        padding: 10}}>
                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}
                              onPress={this._showDateTimePicker}>
                            <Text note style={{fontSize:12,textAlign:'left',color:'#000'}} onPress={this._showDateTimePicker}> {
                                Moment(this.state.date).format('DD MMMM')} </Text>
                        </View>
                                            <View style={{flexDirection:"row",justifyContent:'space-evenly',marginBottom:10}}>
                                                {/*<Image source={require('../Images/smartranlogo.png')} style={{height: 200, width: null, flex: 1}}/>*/}
                                                <Text  style={{textAlign:'center',fontSize:16,color:'#000',marginTop:10}} >Jedimetla
                                                    </Text>

                                                <Image source={require('../Images/right_arrow.png')} style = {{ width: 25, height: 25,alignItems:'center',marginTop:10 }}/>
                                                <Text  style={{textAlign:'center',fontSize:16,color:'#000',marginTop:10}} >Mehdipatnam
                                                    </Text>


                                            </View>
                                        {/*<View style={{flexDirection: 'row', alignItems: 'center'}}>*/}
                                            <View style={{
                                                flex: 1,
                                                borderBottomColor: 'black',
                                                borderBottomWidth: 1,
                                                width: width - 20,}}>
                                            </View>
                                            {/*<TouchableOpacity  style={{alignItems:'center'}}>*/}
                                                {/*<Image source={require('../Images/change_position.png')} style={{height: 35, width: 35}}*/}
                                                {/*/>*/}
                                                {/*/!*onPress={this._SwapPickerText.bind(this)}*!/*/}
                                            {/*</TouchableOpacity>*/}
                                            {/*<View style={{*/}
                                                {/*flex: 1,*/}
                                                {/*borderBottomColor: 'black',*/}
                                                {/*borderBottomWidth: 1,*/}
                                                {/*width: width - 20,}}>*/}
                                            {/*</View>*/}
                                        {/*</View>*/}



                                                {/*<View style={{flexDirection:"row",justifyContent:'space-evenly',marginTop:10}}>*/}
                                                    {/*<TouchableOpacity onPress={this._showDateTimePicker}>*/}
                                                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}*/}
                                                              {/*onPress={this._showDateTimePicker}>*/}

                                                            {/*<Text note style={{fontSize:25,color:'#000'}} onPress={this._showDateTimePicker}> {*/}
                                                                {/*Moment(this.state.date).format('DD ')} </Text>*/}

                                                            {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}*/}
                                                                  {/*onPress={this._showDateTimePicker}>*/}
                                                                {/*<Text note style={{fontSize:10,color:'#000'}}*/}
                                                                      {/*onPress={this._showDateTimePicker}> {*/}
                                                                    {/*Moment(this.state.date).format(' dddd ')} </Text>*/}
                                                                {/*<Text note style={{fontSize:10,color:'#000'}}*/}
                                                                      {/*onPress={this._showDateTimePicker}> {*/}
                                                                    {/*Moment(this.state.date).format(' MMMM ')} </Text>*/}
                                                            {/*</View>*/}
                                                        {/*</View>*/}
                                                    {/*</TouchableOpacity>*/}
                                                {/*</View>*/}
                                                    {/*<View style={{*/}
                                                        {/*flex: 1,*/}
                                                        {/*borderBottomColor: 'black',*/}
                                                        {/*borderBottomWidth: 1,*/}
                                                        {/*width: width - 20,}}>*/}
                                                    {/*</View>*/}
                                                    {/*<TouchableOpacity  style={{alignItems:'center'}}*/}
                                                                       {/*onPress={()=>this.setState({showacimage:!this.state.showacimage})} >*/}
                                                        {/*{this.changeACLogo()}*/}
                                                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}*/}
                                                              {/*onPress={this._showDateTimePicker}>*/}
                                                            {/*<Text note style={{fontSize:14,textAlign:'center'}} >A/C</Text>*/}
                                                        {/*</View>*/}
                                                    {/*</TouchableOpacity>*/}

                                                    {/*<TouchableOpacity  style={{alignItems:'center'}}*/}
                                                                       {/*onPress={()=>this.setState({shownonacimage:!this.state.shownonacimage})}>*/}
                                                        {/*{this.changeNonACLogo()}*/}
                                                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}*/}
                                                              {/*onPress={this._showDateTimePicker}>*/}
                                                            {/*<Text note style={{fontSize:14,textAlign:'center'}} >Non A/C</Text>*/}
                                                        {/*</View>*/}
                                                    {/*</TouchableOpacity>*/}
                                                    {/*<Button style={{backgroundColor: '#2eacde',*/}
                                                        {/*justifyContent:'space-evenly'}}*/}
                                                            {/*onPress={() => Actions.homeScreen()}>*/}
                                                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                                                            {/*<Image source={require('../Images/edit_white_icon.png')} style = {{ width: 25,*/}
                                                                {/*height: 25,alignItems:'center'}}/>*/}
                                                            {/*<Text style={{fontWeight: "bold",fontSize:16,color:'#FFFFFF'*/}
                                                                {/*,textAlign:'center',paddingRight:15}}>Edit</Text>*/}
                                                        {/*</View>*/}
                                                    {/*</Button>*/}
                                                {/*</View>*/}

                                        {/*<Button style={{height:50,width:width-10,backgroundColor: '#2eacde',*/}
                                            {/*justifyContent:'space-evenly'}}*/}
                                                {/*onPress={() => Actions.homeScreen()}>*/}
                                            {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                                                {/*<Image source={require('../Images/edit_white_icon.png')} style = {{ width: 25,*/}
                                                    {/*height: 25,alignItems:'center'}}/>*/}
                                                {/*<Text style={{fontWeight: "bold",fontSize:16,color:'#FFFFFF'*/}
                                                    {/*,textAlign:'center',paddingRight:15}}>Edit</Text>*/}
                                            {/*</View>*/}
                                        {/*</Button>*/}
                                        {/*<View style={{*/}
                                            {/*flex: 1,*/}
                                            {/*borderBottomColor: 'black',*/}
                                            {/*borderBottomWidth: 1,*/}
                                            {/*width: width - 20,}}>*/}
                                        {/*</View>*/}
                                        <View style={{flexDirection:"row",justifyContent:'space-evenly',marginTop:10}}>
                                            <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                                <Text note style={{fontSize:12,textAlign:'center'}} >Filter</Text>
                                                <Text note style={{fontSize:12,textAlign:'center'}} >Below</Text>
                                                <Text note style={{fontSize:12,textAlign:'center'}} >Results</Text>
                                            </View>
                                            {/*<Text note style={{fontSize:12,textAlign:'center'}} >Filter Results</Text>*/}
                                            {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                                                <TouchableOpacity  style={{alignItems:'center'}}
                                                                   onPress={()=>this.setState({showacimage:!this.state.showacimage})} >
                                                    {this.changeACLogo()}
                                                    <View style={{flexDirection:"column",justifyContent:'space-evenly'}}
                                                          onPress={this._showDateTimePicker}>
                                                        <Text note style={{fontSize:14,textAlign:'center'}} >A/C</Text>
                                                    </View>
                                                </TouchableOpacity>

                                                <TouchableOpacity  style={{alignItems:'center'}}
                                                                   onPress={()=>this.setState({shownonacimage:!this.state.shownonacimage})}>
                                                    {this.changeNonACLogo()}
                                                    <View style={{flexDirection:"column",justifyContent:'space-evenly'}}
                                                          onPress={this._showDateTimePicker}>
                                                        <Text note style={{fontSize:14,textAlign:'center'}} >Non A/C</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            {/*</View>*/}
                                        </View>

                                        {/*<Button style={{height:50,width:width-10,backgroundColor: '#2eacde',*/}
                                            {/*marginTop:30,justifyContent:'space-evenly'}}*/}
                                                {/*onPress={() => Actions.homeScreen()}>*/}
                                            {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                                                {/*<Image source={require('../Images/edit_white_icon.png')} style = {{ width: 25,*/}
                                                    {/*height: 25,alignItems:'center'}}/>*/}
                                                {/*<Text style={{fontWeight: "bold",fontSize:16,color:'#FFFFFF'*/}
                                                    {/*,textAlign:'center',paddingRight:15}}>Edit</Text>*/}
                                            {/*</View>*/}
                                        {/*</Button>*/}
                                            {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                                                {/*<TouchableOpacity onPress={() => Actions.homeScreen()} >*/}
                                                    {/*<Image source={require('../Images/edit_icon.png')}*/}
                                                           {/*style={{height: 50, width: 50,alignItems:'center'}}*/}
                                                    {/*/>*/}
                                                {/*</TouchableOpacity>*/}
                                                {/*/!*<Button rounded style={{height:28,backgroundColor: '#669999'}}*!/*/}
                                                        {/*/!*onPress={() => Actions.homeScreen()}>*!/*/}

                                                    {/*/!*<Text style={{fontWeight: "bold",fontSize:14}}>Change</Text>*!/*/}
                                                {/*/!*</Button>*!/*/}
                                                {/*<Text style={{textAlign:'center',fontSize:14}} >Direct bus</Text>*/}

                                            {/*</View>*/}

                                    </Card>
                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                    <Text note style={{fontSize:14,color:'#FFFFFF',textAlign:'center'}} >Bus No </Text>
                    <Text note style={{fontSize:14,color:'#FFFFFF',textAlign:'center'}} >Arrival Time</Text>
                     <Text note style={{fontSize:14,color:'#FFFFFF',textAlign:'center'}} >Amount</Text>
                    </View>
                    <Accordion
                        sections={SECTIONS}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />

                        {/*</Content>*/}


                        {/*<Content />*/}

                    {/*</Container>*/}
                </View>


                    {/*<View style={[styles.content1]}>*/}
                        {/*<View style={[styles.box]}>*/}
                            {/*<Text note style={{fontSize:14,color:'#FFFFFF'}} >     Bus No           Arrival Time           Amount</Text>*/}
                            {/*<Accordion*/}
                                {/*sections={SECTIONS}*/}
                                {/*renderHeader={this._renderHeader}*/}
                                {/*renderContent={this._renderContent}*/}
                            {/*/>*/}
                        {/*</View>*/}

                    {/*</View>*/}
                {/*</ScrollView>*/}


                <View style={[styles.footer]}>
                    <BottomNavigation active={'search'} hidden={false} >
                        <BottomNavigation.Action
                            key="search"
                            icon={<Image source={require('../Images/searchmagnifier.png')}color="#669999" name="Search" style={{ width: 20, height: 20 }} />}
                            label="Search"
                            // iconColor:"#2CA8DB"
                            // onLoad={() => this.setState({ active: 'search' })}
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
                            onPress={() => this.setState({ active: 'history' },Actions.ticketScreen())}
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
        padding: 10,
        borderTopEndRadius:5,
        borderWidth:1,
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
        color:'#FFFFFF',
        textAlign:'center'
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
        textAlign:'center'
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