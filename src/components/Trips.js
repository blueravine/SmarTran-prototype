import React, { Component } from 'react';
import MapView, { AnimatedRegion,Polyline,Marker, Callout, ProviderPropType } from 'react-native-maps';
import { Image,ScrollView,StyleSheet,TouchableOpacity,StatusBar,
    TouchableHighlight,Dimensions,Animated,Easing } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab,Icon, Button,  Left, Body, Right,
    Footer, FooterTab} from 'native-base';

import { Actions, ActionConst } from 'react-native-router-flux'; // 4.0.0-beta.31
import Toast from 'react-native-simple-toast';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
import { BottomNavigation } from 'react-native-material-ui';

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

export default class Trips extends Component {


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

    componentDidMount() {
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

    animate(){
        let i;
        i = 0;
        let r = [
            {
                latitude : 17.4288048,
                longitude : 78.3731846,
                latitudeDelta : LATITUDE_DELTA,
                longitudeDelta : LONGITUDE_DELTA,
            },
            {
                latitude : 17.4288048,
                longitude : 78.3731846,
                latitudeDelta : LATITUDE_DELTA,
                longitudeDelta : LONGITUDE_DELTA,
            },
            {
                latitude : 17.4364795,
                longitude : 78.364338,
                latitudeDelta : LATITUDE_DELTA,
                longitudeDelta : LONGITUDE_DELTA,
            },

        ];

        // for(i=0;i<5;i++){

        this.marker._component.animateMarkerToCoordinate(r[i] ,2000);
        i=1;
        this.marker._component.animateMarkerToCoordinate(r[i] ,2000);
        i=2;
        this.marker._component.animateMarkerToCoordinate(r[i] ,2000);
        // this.marker._component.animateMarkerToCoordinate(r[i] ,2000);
        i=0;
        // this.marker._component.animateMarkerToCoordinate(r[i] ,2000);
        i=1;
        // this.marker._component.animateMarkerToCoordinate(r[i] ,2000);


        // i>=2 ? i=0 : i;

        // }



        // this.mapView.animateToCoordinate(r ,2000);

    }
    render() {

        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#0c71b7'/>
                </View>
                {/*<ScrollView >*/}
                {/*<View style={[styles.headerview]}>*/}

                <MapView
                    ref = {(ref)=>this.mapView=ref}
                    style={styles.map}
                    showUserLocation
                    followUserLocation
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
                    <Marker.Animated
                        ref={marker => {
                            this.marker = marker;
                        }}
                        coordinate={this.state.coordinate}
                        centerOffset={{ x: -18, y: -60 }}
                        anchor={{ x: 0.69, y: 1 }}
                        image={carImg}
                        onPress={()=>this.animate()}
                    >
                    </Marker.Animated>
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
                    <BottomNavigation active={'trips'} hidden={false} >
                        <BottomNavigation.Action
                            key="search"
                            icon={<Image source={require('../Images/search_magnifier_black.png')} color="#669999" name="Search" style={{ width: 20, height: 20 }} />}
                            label="Search"
                            // iconColor:"#2CA8DB"
                            // onLoad={() => this.setState({ active: 'search' })}
                            onPress={() => this.setState({ active: 'search' },Actions.homeScreen())}
                            // onPress={()=>this.setState({showasearchimage:!this.state.showasearchimage})}
                            // {this.changebottomLogo()}
                        />
                        <BottomNavigation.Action
                            key="trips"
                            icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
                            label="Trips"
                            onPress={() => this.setState({ active: 'trips' },Actions.tripScreen())}
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