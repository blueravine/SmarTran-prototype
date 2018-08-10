import React, { Component } from 'react';
import { Image,StyleSheet,TouchableHighlight,
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
        title: '  189M           5:51 PM                 \u20B9 72/-\n' +
               '                   5 min away',
        content: '5:51 PM  o  Jedimetla\n'
        + '                 |\n'
        + '                 |  189M\n'
        + '                 |\n'
        + '7:00 PM  o  Medipatnam'
    },
    {
        title: '  158J            5:45 PM                 \u20B9 68/-\n' +
        '                     5 min away',
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
        title: '  158JA           5:45 PM                 \u20B9 70/-\n' +
        '                     5 min away',
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
        title: '   9K                5:45 PM                 \u20B9 65/-\n' +
        '                     5 min away',
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
        title: '  189M           5:56 PM                 \u20B9 72/-\n' +
        '                     5 min away',
        content: '5:56 PM  o  Jedimetla\n'
        + '                 |\n'
        + '                 |   189M\n'
        + '                 |\n'
        + '7:03 PM  o  Medipatnam'
    },
    {
        title: '  9K                 6:08 PM                \u20B9 65/-\n' +
        '                     5 min away',
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



    _renderHeader(section) {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>

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
                                    <Card  styles={{width: 100,height:300,borderWidth: 3,
                                        borderColor: '#999999', alignItems: 'center',
                                        borderRadius: 5,
                                        overflow: 'hidden',

                                        elevation: 1,
                                        padding: 10}}>


                                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                                {/*<Image source={require('../Images/smartranlogo.png')} style={{height: 200, width: null, flex: 1}}/>*/}
                                                <Text note style={{textAlign:'center',fontSize:14,}} >Jedimetla
                                                    </Text>
                                                <Image source={require('../Images/arrow.png')} style = {{ width: 25, height: 25,alignItems:'center' }}/>
                                                <Text note style={{textAlign:'center',fontSize:14}} >Mehdipatnam
                                                    </Text>
                                            </View>



                                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                                    <Text style={{fontSize:14,textAlign:'center',}} >Riding Now</Text>

                                                    <Text style={{textAlign:'center',marginBottom:1,fontSize:14}} >A/C only</Text>
                                                </View>


                                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                                <TouchableHighlight onPress={() => Actions.homeScreen()} >
                                                    <Image source={require('../Images/editpencil_icon.png')}
                                                           style={{height: 50, width: 50,alignItems:'center'}}
                                                    />
                                                </TouchableHighlight>
                                                {/*<Button rounded style={{height:28,backgroundColor: '#669999'}}*/}
                                                        {/*onPress={() => Actions.homeScreen()}>*/}

                                                    {/*<Text style={{fontWeight: "bold",fontSize:14}}>Change</Text>*/}
                                                {/*</Button>*/}
                                                <Text style={{textAlign:'center',fontSize:14}} >Direct bus</Text>

                                            </View>

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
        color:'#2eacde',
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