import React, { Component } from 'react';
import MapView, { AnimatedRegion,Polyline,Marker, Callout, ProviderPropType } from 'react-native-maps';
import { Image,ScrollView,StyleSheet,TouchableOpacity,StatusBar,Alert,
    TouchableHighlight,Dimensions,Animated,Easing } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab, Button,  Left, Body, Right,
    Footer, FooterTab} from 'native-base';

import { Actions, ActionConst } from 'react-native-router-flux'; // 4.0.0-beta.31
import Toast from 'react-native-simple-toast';
import Permissions from 'react-native-permissions'
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
// import { BottomNavigation } from 'react-native-material-ui';

import BottomNavigation, {
    ShiftingTab
} from 'react-native-material-bottom-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iccon from 'react-native-vector-icons/SimpleLineIcons';
import Iccons from 'react-native-vector-icons/Foundation'

const card      = {card: {width: 300,height:500}};
const cardItem = {cardItem: {fontSize: 40}};
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 17.4365557;
const LONGITUDE = 78.3670722;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
import carImg from '../Images/car.png';
import bus from '../Images/bus.png';
import bus1 from '../Images/bus1.png';
import bus2 from '../Images/bus2.png';
const r = [
    {
        latitude : 17.4609136,
        longitude : 78.3345608,
        latitudeDelta : LATITUDE_DELTA,
        longitudeDelta : LONGITUDE_DELTA,
    },
    {
        latitude : 17.4447244,
        longitude : 78.3861475,
        latitudeDelta : LATITUDE_DELTA,
        longitudeDelta : LONGITUDE_DELTA,
    },
    {
        latitude : 17.4853033,
        longitude : 78.3573451,
        latitudeDelta : LATITUDE_DELTA,
        longitudeDelta : LONGITUDE_DELTA,
    },
    {
        latitude : 17.4365557,
        longitude : 78.3648835,
        latitudeDelta : LATITUDE_DELTA,
        longitudeDelta : LONGITUDE_DELTA,
    },

];
export default class Trips extends Component {

    state = {
        types: [],
        status: {},
    }


    constructor() {
        super();



        this.state= {
            active:'search',
        };
        // this.state = {
        //     coordinates: [
        //         {
        //             latitude: LATITUDE,
        //             longitude: LONGITUDE,
        //         },
        //         {
        //             latitude: 17.4338811,
        //             longitude: 78.3702524,
        //         },
        //     ],
        // };
        //
        // this.mapView = null;


        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            routeCoordinates: [],
            distanceTravelled: 0,
            prevLatLng: {},
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE,

            })
        };
    }
    state = {
        activeTab: 'track'
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

                break;
            case 'ticket':
                Actions.ticketScreen();
                break;
            case 'more':
                break;
            default:

        }
    }

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />

    )

    renderTab = ({ tab, isActive }) => (
        <ShiftingTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    componentDidMount() {

        let types = Permissions.getTypes()
        let canOpenSettings = Permissions.canOpenSettings()

        this.setState({ types, canOpenSettings })
        this._updatePermissions(types)
        // AppState.addEventListener('change', this._handleAppStateChange)

        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { coordinate, routeCoordinates, distanceTravelled } =   this.state;
                const { latitude, longitude } = position.coords;

                const newCoordinate = {
                    latitude,
                    longitude
                };
                // if (Platform.OS === "android") {
                    if (this.marker) {
                        this.marker._component.animateMarkerToCoordinate(
                            newCoordinate,
                            500
                        );
                    }
                // } else {
                //     coordinate.timing(newCoordinate).start();
                // }
                this.setState({
                    latitude,
                    longitude,
                    routeCoordinates: routeCoordinates.concat([newCoordinate]),
                    distanceTravelled:
                    distanceTravelled + this.calcDistance(newCoordinate),
                    prevLatLng: newCoordinate


                });
                // Toast.show("Latitute"+this.state.latitude+"Longitude"+this.state.longitude);
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        // Toast.show("Latitute"+this.state.latitude+"Longitude"+this.state.longitude);
    }

    // componentWillUnmount() {
    //     AppState.removeEventListener('change', this._handleAppStateChange)
    // }

    // //update permissions when app comes back from settings
    // _handleAppStateChange = appState => {
    //     if (appState == 'active') {
    //         this._updatePermissions(this.state.types)
    //     }
    // }

    _openSettings = () =>
        Permissions.openSettings().then(() => alert('back to app!!'))
    _updatePermissions = types => {
        Permissions.checkMultiple(types)
            .then(status => {
                if (this.state.isAlways) {
                    return Permissions.check('location', 'always').then(location => ({
                        ...status,
                        location,
                    }))
                }
                return status
            })
            .then(status => this.setState({ status }))
    }

    _requestPermission = permission => {
        var options

        if (permission == 'location') {
            options = this.state.isAlways ? 'always' : 'whenInUse'
        }

        Permissions.request(permission, options)
            .then(res => {
                this.setState({
                    status: { ...this.state.status, [permission]: res },
                })
                if (res != 'authorized') {
                    var buttons = [{ text: 'Cancel', style: 'cancel' }]
                    if (this.state.canOpenSettings)
                        buttons.push({
                            text: 'Open Settings',
                            onPress: this._openSettings,
                        })

                    Alert.alert(
                        'Whoops!',
                        'There was a problem getting your permission. Please enable it from settings.',
                        buttons,
                    )
                }
            })
            .catch(e => console.warn(e))
    }

    _onLocationSwitchChange = () => {
        this.setState({ isAlways: !this.state.isAlways })
        this._updatePermissions(this.state.types)
    }

    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };
    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,

    });

    sleepabit (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    // animate(){
        // let i;
        // i = 0;



        // for(let j=0;j<10;j++){

        // this.marker._component.animateMarkerToCoordinate(r[3] ,20000);
            // this.marker1._component.animateMarkerToCoordinate(r[3] ,30000);
            // this.marker2._component.animateMarkerToCoordinate(r[3] ,30000);
        // this.marker._component.animateMarkerToCoordinate(r[2] ,3000);
        // this.marker._component.animateMarkerToCoordinate(r[i] ,2000);
        // i=0;
        // this.marker._component.animateMarkerToCoordinate(r[i] ,2000);
        // i=1;
        // this.marker._component.animateMarkerToCoordinate(r[i] ,2000);


        // i>=2 ? i=0 : i;

        // }



        // this.mapView.animateToCoordinate(r ,2000);

    // }
    render() {

        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#0c71b7'/>
                </View>

                {/*<View style={styles.container}>*/}
                    {/*{this.state.types.map(p => (*/}
                        {/*<TouchableHighlight*/}
                            {/*style={[styles.button, styles[this.state.status[p]]]}*/}
                            {/*key={p}*/}
                            {/*// onPress={() => this._requestPermission(p)}*/}
                        {/*>*/}
                            {/*<View>*/}
                                {/*<Text style={styles.text}>*/}
                                    {/*/!*{Platform.OS == 'ios' && p == 'location'*!/*/}
                                        {/*? `location ${this.state.isAlways ? 'always' : 'whenInUse'}`*/}
                                        {/*: p*/}
                                    {/*/!*}*!/*/}
                                {/*</Text>*/}
                                {/*<Text style={styles.subtext}>{this.state.status[p]}</Text>*/}
                            {/*</View>*/}
                        {/*</TouchableHighlight>*/}
                    {/*))}*/}
                    {/*<View style={styles.footer}>*/}
                        {/*<TouchableHighlight*/}
                            {/*style={styles['footer_' + Platform.OS]}*/}
                            {/*onPress={this._onLocationSwitchChange}*/}
                        {/*>*/}
                            {/*<Text style={styles.text}>Toggle location type</Text>*/}
                        {/*</TouchableHighlight>*/}

                        {/*{this.state.canOpenSettings && (*/}
                            {/*<TouchableHighlight onPress={this._openSettings}>*/}
                                {/*<Text style={styles.text}>Open settings</Text>*/}
                            {/*</TouchableHighlight>*/}
                        {/*)}*/}
                    {/*</View>*/}

                    {/*/!*<Text style={styles['footer_' + Platform.OS]}>*!/*/}
                        {/*/!*Note: microphone permissions may not work on iOS simulator. Also,*!/*/}
                        {/*/!*toggling permissions from the settings menu may cause the app to*!/*/}
                        {/*/!*crash. This is normal on iOS. Google "ios crash permission change"*!/*/}
                    {/*/!*</Text>*!/*/}
                {/*</View>*/}
                {/*<ScrollView >*/}
                {/*<View style={[styles.headerview]}>*/}

                <MapView
                    ref = {(ref)=>this.mapView=ref}
                    style={styles.map}
                    showUserLocation={true}
                    followUserLocation={true}
                    showsPointsOfInterest={false}
                    showsIndoors={false}
                    showsBuildings={false}
                    showsTraffic={false}
                    provider={"google"}
                    loadingEnabled
                    apikey={"AIzaSyD3a7smG62nUL0Wp4jsP4Iv3rNg763HFyQ"}
                    // strokeWidth={3}
                    mapType={"standard"}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    showsScale={true}
                    zoomControlEnabled={true}
                    maxZoomLevel={200}
                    region={this.getMapRegion()}
                >
                    <MapView.Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} strokeColor='#2eacde' />
                    <MapView.Marker.Animated
                        ref={marker => {
                            this.marker = marker;
                        }}
                        coordinate={{
                            latitude: 17.4853033,
                            longitude: 78.3573451,
                        }}
                       centerOffset={{ x: -18, y: -60 }}
                       anchor={{ x: 0.69, y: 1 }}
                        image={bus}
                        onPress={()=> {this.marker._component.animateMarkerToCoordinate(r[3] ,20000)}}
                    >
                    </MapView.Marker.Animated>

                    <MapView.Marker.Animated
                        ref={marker1 => {
                            this.marker1 = marker1;
                        }}
                        coordinate={{
                            latitude: 17.4609136,
                            longitude: 78.3345608,
                        }}
                        centerOffset={{ x: -18, y: -60 }}
                        anchor={{ x: 0.69, y: 1 }}
                        image={bus1}
                        onPress={()=> {this.marker1._component.animateMarkerToCoordinate(r[3] ,20000)}}
                    >
                    </MapView.Marker.Animated>

                    <MapView.Marker.Animated
                        ref={marker2 => {
                            this.marker2 = marker2;
                        }}
                        coordinate={{
                            latitude: 17.4447244,
                            longitude: 78.3861475,
                        }}
                        centerOffset={{ x: -18, y: -60 }}
                        anchor={{ x: 0.69, y: 1 }}
                        image={bus2}
                        onPress={()=> {this.marker2._component.animateMarkerToCoordinate(r[3] ,20000)}}
                    >
                    </MapView.Marker.Animated>
                    {/*<Marker*/}
                    {/*coordinate={{*/}
                    {/*latitude: LATITUDE + SPACE,*/}
                    {/*longitude: LONGITUDE + SPACE,*/}
                    {/*}}*/}
                    {/*centerOffset={{ x: -18, y: -60 }}*/}
                    {/*anchor={{ x: 0.69, y: 1 }}*/}
                    {/*image={carImg}*/}
                    {/*/>*/}
                    {/*<Marker*/}
                    {/*coordinate={{*/}
                    {/*latitude: LATITUDE - SPACE,*/}
                    {/*longitude: LONGITUDE - SPACE,*/}
                    {/*}}*/}
                    {/*centerOffset={{ x: -42, y: -60 }}*/}
                    {/*anchor={{ x: 0.84, y: 1 }}*/}
                    {/*>*/}
                    {/*<Callout>*/}
                    {/*<View>*/}
                    {/*<Text>This is a plain view</Text>*/}
                    {/*</View>*/}
                    {/*</Callout>*/}
                    {/*</Marker>*/}
                </MapView>

                {/*</View>*/}
                {/*styles.bubble*/}
                {/*<View style={styles.Container}>*/}
                {/*<TouchableOpacity style={[styles.bubble, styles.buttonContainer]}>*/}
                {/*<Text style={styles.bottomBarContent}>*/}
                {/*{parseFloat(this.state.distanceTravelled).toFixed(2)} km*/}
                {/*</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*</View>*/}

                {/*</ScrollView>*/}



                <View style={[styles.footer]}>

                    <BottomNavigation
                        tabs={this.tabs}
                        activeTab={this.state.activeTab}
                        onTabPress={newTab => {this.setState({ activeTab: newTab.key }),this._handleTabPress(newTab.key)}}
                        renderTab={this.renderTab}
                        // useLayoutAnimation
                    />
                    {/*<BottomNavigation active={'track'} hidden={false} >*/}
                        {/*<BottomNavigation.Action*/}
                            {/*key="home"*/}
                            {/*// icon={<Image source={require('../Images/home_icon.png')} color="#2eacde" name="Search" style={{ width: 20, height: 20 }} />}*/}
                            {/*label="Home"*/}
                            {/*icon = {<Iccon type='SimpleLineIcons' name='home' size={24} color="#2eacde"/>}*/}
                            {/*// onLoad={() => this.setState({ active: 'search' })}*/}
                            {/*onPress={() => this.setState({ active: 'home' },Actions.homeScreen())}*/}
                            {/*// onPress={()=>this.setState({showasearchimage:!this.state.showasearchimage})}*/}
                            {/*// {this.changebottomLogo()}*/}
                        {/*/>*/}
                        {/*<BottomNavigation.Action*/}
                            {/*key="track"*/}
                            {/*// icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}*/}
                            {/*icon = {<Icons type='FontAwesome5' name='route' size={24} color="#2eacde"/>}*/}
                            {/*label="Track"*/}
                            {/*onPress={() => this.setState({ active: 'track' })}*/}
                        {/*/>*/}
                        {/*<BottomNavigation.Action*/}
                            {/*key="history"*/}
                            {/*// icon={<Image source={require('../Images/ticket.png')} color="#669999" name="History" style={{ width: 20, height: 20 }} />}*/}
                            {/*icon = {<Iccons type='Foundation' name='ticket' size={24} color="#2eacde"/>}*/}
                            {/*label="History"*/}
                            {/*onPress={() => this.setState({ active: 'history' },Actions.ticketScreen())}*/}
                        {/*/>*/}
                        {/*<BottomNavigation.Action*/}
                            {/*key="more"*/}
                            {/*// icon={<Image source={require('../Images/menuicon.png')} color="#669999" name="More" style={{ width: 20, height: 20 }} />}*/}
                            {/*icon = {<Iccon type='SimpleLineIcons' name='menu' size={24} color="#2eacde"/>}*/}
                            {/*label="More"*/}
                            {/*onPress={() => this.setState({ active: 'more' })}*/}
                        {/*/>*/}
                    {/*</BottomNavigation>*/}
                </View>
            </View>

        );
        // Toast.show("Latitute"+this.state.latitude+"Longitude"+this.state.longitude);
    }
    // _renderContent = (Tab: string,) => {
    //     if(this.state.selectedTab==="Search"){
    //         return (
    //             <Home/>
    //         );
    //     }
    //     else if(this.state.selectedTab==="Favourite"){
    //         return (
    //             <Favourite/>
    //         );
    //
    //     }
    //     else if(this.state.selectedTab==="Recent"){
    //         return (
    //             <Home/>
    //         );
    //     }
    // }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',

    },
    headerview: {
        // height: 250,
        //borderRadius:25,
        // borderWidth:5,
        // borderColor:'#917cb7',
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        paddingRight:5,
        paddingLeft:5,
        paddingTop:55,
        left: 0,
        right: 0,
        top:0,

    },
    content1: {
        // backgroundColor: '#B7B152',
        marginTop:300,

    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtext: {
        textAlign: 'center',
    },
    button: {
        margin: 5,
        borderColor: 'black',
        borderWidth: 3,
        overflow: 'hidden',
    },
    buttonInner: {
        flexDirection: 'column',
    },
    undetermined: {
        backgroundColor: '#E0E0E0',
    },
    authorized: {
        backgroundColor: '#C5E1A5',
    },
    denied: {
        backgroundColor: '#ef9a9a',
    },
    restricted: {
        backgroundColor: '#ef9a9a',
    },
    footer: {
        height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        // borderTopColor:'#00CC77'
        // backgroundColor: '#8BC34A'
    },
    box: {

        backgroundColor: '#FFFFFF',
        // marginBottom: 10
        marginRight:5,
        marginLeft:5,

    },
    header: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderTopEndRadius:5,
        borderWidth:2,
        // borderColor:'#FFFFFF',
        marginRight:5,
        marginLeft:5,
    },
    headerText: {
        // textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        // color:'#FFFFFF',
    },
    content: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        // color:'#B7B152',
        marginRight:5,
        marginLeft:5,
    },

    Container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex:1
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});