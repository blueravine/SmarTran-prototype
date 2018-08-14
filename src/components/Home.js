import React, { Component } from 'react';
import { Image,ScrollView,StyleSheet,TouchableOpacity,StatusBar,
    TouchableHighlight,Dimensions,Animated,Easing } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab,Icon, Button,  Left, Body, Right,
    Footer, FooterTab} from 'native-base';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
import DatePicker from 'react-native-datepicker'
import { Actions, ActionConst } from 'react-native-router-flux'; // 4.0.0-beta.31
import Toast from 'react-native-simple-toast';
// import Select from 'react-select';
import Divider from 'react-native-divider';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
import { BottomNavigation } from 'react-native-material-ui';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Swiper from 'react-native-swiper';
const card      = {card: {width: 300,height:500}};
const cardItem = {cardItem: {fontSize: 40}};
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const ac_icon_blue = require('../Images/ac_icon_blue.png');
const ac_icon_grey = require('../Images/ac_icon_grey.png');
const nonac_icon_blue = require('../Images/nonac_icon_blue.png');
const nonac_icon_grey = require('../Images/nonac_icon_grey.png');
const search_magnifier_black = require('../Images/search_magnifier_black.png');
const search_magnifier_blue = require('../Images/search_magnifier_blue.png');
// import {BoxShadow} from 'react-native-shadow';
// import Switch from 'react-native-customisable-switch';
import AutoComplete from "react-native-autocomplete";

// import DropDown, {
//     Select,
//     Option,
//     OptionList,
// } from 'react-native-selectme';


// const options = [
//     // ...
//     { value: 'Jedimetla', label: 'Jed' },
//     { label:"Ko", value:"Koti"},
//     {label:"Ga", value:"Gachibowli"},
//     {label:"Jub," ,value:"JublieeHills"},
//     {label:"Meh", value:"Mehdipatnam"},
//     {label:"Meh", value:"Mehboobnagar"},
//     {label:"Kot", value:"Kothaguda"},
//     {label:"Mi" ,value:"Miyapur" },
//     // ...
// ];
// const filterOptions = createFilterOptions({ options });

export default class Home extends Component {

    state = {
        isDateTimePickerVisible: false,
    };


    constructor() {
        super();

        this.state = { date: new Date() };
        this.state ={
            showacimage:false
        };
        this.state ={
            shownonacimage:false
        };
        this.state ={
            showasearchimage:false
        };
        // this.setState = { date: new Date() };

        this.state= {
            active:'search',
        };
        // this.state = {
        //     selected: "Je",
        //
        // };

        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
        this.state = {
            selectedItem: undefined,
            selected2: 'key2',
            results: {
                items: []
            }
        }
        // this.state = {
        //     canada: ''
        // };

    }

    // _getOptionList() {
    //     return this.refs['OPTIONLIST'];
    // }
    //
    //
    // _canada(province) {
    //
    //     this.setState({
    //         ...this.state,
    //         canada: province
    //     });
    // }

    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }
    onChangeValue (value: string) {
        this.setState({
            selected2 : value
        });
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    changeACLogo() {
        var imgsource = this.state.showacimage ? ac_icon_blue : ac_icon_grey;
        return (

            <Image source={imgsource} style={{height: 30, width: 30,alignItems:'center'}}/>

        );
    }
    changebottomLogo() {
        var imgsourcesearch = this.state.showasearchimage ? search_magnifier_blue : search_magnifier_black;
        return (

            <Image source={imgsourcesearch} style={{height: 30, width: 30,alignItems:'center'}}/>

        );
    }



    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({
            date :  date
        });
        this._hideDateTimePicker();
    };
    // _handleTimePicked = (time) => {
    //     this.setState({
    //         time :  time
    //     });
    //     this._hideDateTimePicker();
    // };
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
        // alert('Changed to ' + isOn)
        this.state=false;
    }
    onToggle(isOff){
        // alert('Changed to ' + isOn)
        this.state=true;
    }

    _SwapPickerText(){
        // var pickertext = fromloc;
        // fromloc = toloc;
        // toloc = pickertext;
        //
        // return(fromloc,toloc);
        let temploc=this.state.selected1;
        this.setState({selected1: this.state.selected2, selected2:temploc});
    }

    // setFromLoc(){
    //     this.setState({selected1: ''});
    // }

    render() {

        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#0c71b7'/>
                </View>
                {/*<ScrollView >*/}
                <View style={[styles.headerview]}>
                    {/*<Card>*/}
                    {/*<Image source={require('../Images/smartranlogowhite.png')} style={{height: 100, width: 100, flex: 1,*/}
                    {/*marginLeft:125,justifyContent: "center"}}/>*/}
                    {/*</Card>*/}
                    {/*<Text note style={{fontSize:18,color:'#FFFFFF',fontWeight:'bold'}} > Plan your trip here !</Text>*/}
                    {/*<Header />*/}

                    {/*<Content>*/}

                    <Card styles={card}>

                        {/*<CardItem cardBody styles={cardItem}>*/}
                        <View style={{flexDirection:"row",marginTop:10}}>
                            {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                            {/*<Text note style={{fontSize:16,fontWeight:'bold',textAlign:'left'}} > From</Text>*/}
                            {/*<Text note style={{fontSize:16,fontWeight:'bold',textAlign:'left'}} > To</Text>*/}
                            {/*</View>*/}
                            {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                                {/*<View*/}
                                    {/*style={{*/}
                                        {/*borderLeftWidth: 1,*/}
                                        {/*borderLeftColor: '#000',*/}
                                    {/*}}*/}
                                {/*/>*/}
                            {/*</View>*/}
                            <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                {/*<Select*/}
                                {/*width={250}*/}
                                {/*ref="SELECT1"*/}
                                {/*optionListRef={this._getOptionList.bind(this)}*/}
                                {/*defaultValue="From ..."*/}
                                {/*onSelect={this._canada.bind(this)}>*/}
                                {/*<Option value = {{id : "Je"}}>Jedimetla</Option>*/}
                                {/*<Option>Gachibowli</Option>*/}
                                {/*<Option>Koti</Option>*/}
                                {/*<Option>JublieeHills</Option>*/}
                                {/*<Option>Mehdipatnam</Option>*/}
                                {/*<Option>Raheja IT Park</Option>*/}
                                {/*<Option>Miyapur</Option>*/}
                                {/*</Select>*/}

                                {/*<OptionList ref="OPTIONLIST"/>*/}

                                {/*<Select*/}
                                {/*width={250}*/}
                                {/*ref="SELECT1"*/}
                                {/*optionListRef={this._getOptionList.bind(this)}*/}
                                {/*defaultValue="From ..."*/}
                                {/*onSelect={this._canada.bind(this)}>*/}
                                {/*<Option value = {{id : "Me"}}>Mehdipatnam</Option>*/}
                                {/*<Option>Gachibowli</Option>*/}
                                {/*<Option>Koti</Option>*/}
                                {/*<Option>JublieeHills</Option>*/}
                                {/*<Option>Mehdipatnam</Option>*/}
                                {/*<Option>Raheja IT Park</Option>*/}
                                {/*<Option>Miyapur</Option>*/}
                                {/*</Select>*/}

                                {/*<OptionList ref="OPTIONLIST"/>*/}
                                {/*<View style={{*/}
                                {/*borderBottomColor: 'black',*/}
                                {/*borderBottomWidth: 1,*/}
                                {/*height: height - 20,}}>*/}
                                {/*</View>*/}
                                {/*<View style={{*/}
                                {/*flex: 1,*/}
                                {/*borderBottomColor: 'black',*/}
                                {/*borderBottomWidth: 1,*/}
                                {/*height: height - 420,}}>*/}
                                {/*</View>*/}
                                {/*<Select*/}
                                {/*name="university"*/}
                                {/*value="one"*/}
                                {/*options={options}*/}
                                {/*filterOptions={filterOptions}*/}
                                {/*onChange={val => console.log(val)}*/}
                                {/*/>*/}
                                <Picker
                                    placeholder="Select One"
                                    // prompt="From Location"
                                    mode="dropdown"
                                    style={{height:45,width:380,borderWidth:5, borderColor:'#2eacde',justifyContent:'flex-end'}}
                                    selectedValue={this.state.selected1}
                                    onValueChange={(itemValue) => this.setState({selected1: itemValue})}>
                                    {/*<View style={{flexDirection: 'row'}}>*/}
                                    {/*<Text note style={{fontSize:12,textAlign:'center',backgroundColor:'#2eacde',*/}
                                    {/*color:'#FFFFFF'}} >JED</Text>*/}
                                    {/*</View>*/}
                                    <Item label="From Location" value=" " />
                                    <Item label="Jedimetla" value="Je" />
                                    <Item label="Koti" value="Ko" />
                                    <Item label="Gachibowli" value="GA" />
                                    <Item label="JublieeHills" value="Jub" />
                                    <Item label="Mehdipatnam" value="Meh" />
                                    <Item label="Raheja IT Park" value="Ra" />
                                    <Item label="Miyapur" value="Mi" />
                                </Picker>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{
                                        flex: 1,
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                        width: width - 10,}}>
                                    </View>
                                    <TouchableOpacity onPress={this._SwapPickerText.bind(this)}>
                                        <Image source={require('../Images/change_position.png')} style={{height: 35, width: 35}}
                                        />
                                    </TouchableOpacity>
                                    <View style={{
                                        flex: 1,
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                        width: width - 10,}}>
                                    </View>
                                </View>
                                <Picker
                                    placeholder="Select One"
                                    mode="dropdown"
                                    style={{height:45,width:380,borderWidth:5, borderColor:'#2eacde'}}
                                    selectedValue={this.state.selected2}
                                    onValueChange={(itemValue) => this.setState({selected2: itemValue})}>

                                    <Item label="To Location" value=" " />
                                    <Item label="Mehdipatnam" value="Meh" />
                                    <Item label="Miyapur" value="Mi" />
                                    <Item label="JublieeHills" value="Jub" />
                                    <Item label="Vanastalipuram" value="Va" />
                                    <Item label="Raheja IT Park" value="Ra" />
                                    <Item label="Gachibowli" value="GA" />
                                </Picker>

                            </View>
                        </View>
                        <View style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: width - 10,}}>
                        </View>
                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}

                        {/*<View style={{flex:.5}}>*/}

                        {/*</View>*/}
                        {/*</View>*/}
                        {/*<View style={{flex:.1}}>*/}
                        {/*<Image source={require('../Images/arrow.png')} style = {{ width: 20, height: 20,alignItems:'center',marginTop:10 }}/>*/}
                        {/*</View>*/}

                        {/*<View style={{flex:.5}}>*/}
                        {/*<Picker*/}
                        {/*selectedValue='Meh'*/}
                        {/*style={{height:35,width:50}}*/}
                        {/*// label='To'*/}
                        {/*onValueChange={() => {this.handleChange}}*/}
                        {/*>*/}
                        {/*<Item label="Vanastalipuram" value="Va" />*/}
                        {/*<Item label="Miyapur" value="Mi" />*/}
                        {/*<Item label="JublieeHills" value="Jub" />*/}
                        {/*<Item label="Mehdipatnam" value="Meh" />*/}
                        {/*<Item label="Raheja IT Park" value="Ra" />*/}
                        {/*<Item label="Gachibowli" value="GA" />*/}
                        {/*</Picker>*/}
                        {/*</View>*/}
                        {/*</View>*/}

                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}

                        {/*<View style={{flex:.5}}>*/}

                        {/*</View>*/}
                        {/*</View>*/}
                        {/*<View style={{flex:.1}}>*/}
                        {/*<Image source={require('../Images/arrow.png')} style = {{ width: 20, height: 20,alignItems:'center',marginTop:10 }}/>*/}
                        {/*</View>*/}

                        {/*<View style={{flex:.5}}>*/}

                        {/*</View>*/}
                        {/*</View>*/}

                        {/*</CardItem>*/}

                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly',marginTop:10}}>*/}
                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                        {/*<Text note style={{fontSize:12,textAlign:'center'}} >Tap icon to change date/time</Text>*/}
                        {/*<TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>*/}
                        {/*<Image source={require('../Images/event.png')} style={{height: 30, width: 30}}*/}
                        {/*/>*/}
                        {/*</TouchableOpacity>*/}
                        {/*<DateTimePicker*/}
                        {/*isVisible={this.state.isDateTimePickerVisible}*/}
                        {/*mode={'datetime'}*/}
                        {/*onConfirm={this._handleDatePicked}*/}
                        {/*onCancel={this._hideDateTimePicker}*/}
                        {/*/>*/}

                        {/*</View>*/}
                        {/*<TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>*/}
                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}

                        {/*<Text note style={{fontSize:16,color:'#2eacde',textAlign:'center',fontWeight:'bold'}} > {*/}
                        {/*Moment(this.state.date).format('DD-MMM-YYYY')} </Text>*/}
                        {/*<Text note style={{fontSize:16,color:'#2eacde',textAlign:'center',fontWeight:'bold'}} > {*/}
                        {/*Moment(this.state.date).format('h:mm A')} </Text>*/}

                        {/*</View>*/}
                        {/*</TouchableOpacity>*/}
                        {/*</View>*/}
                        <View style={{flexDirection:"row",justifyContent:'flex-start',marginTop:10}}>

                            <TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>
                                <Image source={require('../Images/calendar_icon.png')} style={{height: 25, width: 25,marginLeft:18}}
                                />
                            </TouchableOpacity>
                            <Text note style={{fontSize:12,textAlign:'center'}} >  Journey Date</Text>
                        </View>
                        {/*<TouchableOpacity  style={{alignItems:'center'}}*/}
                        {/*onPress={()=>this.setState({showacimage:!this.state.showacimage})} >*/}
                        {/*{this.changeACLogo()}*/}
                        {/*</TouchableOpacity>*/}
                        {/*<TouchableOpacity  style={{alignItems:'center'}}*/}
                        {/*onPress={()=>this.setState({shownonacimage:!this.state.shownonacimage})}>*/}
                        {/*{this.changeNonACLogo()}*/}

                        {/*</TouchableOpacity>*/}
                        <View style={{flexDirection:"row",justifyContent:'flex-start'}}>
                            <TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    mode={'date'}
                                    minimumDate={Moment().toDate()}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimePicker}
                                />

                                {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}

                                {/*<Text note style={{fontSize:16,color:'#000',textAlign:'center'}} > {*/}
                                {/*Moment(this.state.date).format('DD MMM YYYY')} </Text>*/}
                                {/*/!*<Text note style={{fontSize:16,color:'#2eacde',textAlign:'center',fontWeight:'bold'}} > {*!/*/}
                                {/*/!*Moment(this.state.date).format('h:mm A')} </Text>*!/*/}
                                {/*<Text note style={{fontSize:16,color:'#000',textAlign:'right'}} > {*/}
                                {/*Moment(this.state.date).format('  ')} </Text>*/}
                                {/*</View>*/}
                            </TouchableOpacity>

                            {/*<TouchableOpacity onPress={() => Actions.searchScreen()} style={{alignItems:'flex-end'}}>*/}
                            {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                            {/*<Image source={require('../Images/magnifier.png')} style={{height: 35, width: 35}}*/}
                            {/*/>*/}
                            {/*</View>*/}
                            {/*</TouchableOpacity>*/}

                        </View>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}
                                  onPress={this._showDateTimePicker}>

                                <Text note style={{fontSize:25,color:'#000'}} onPress={this._showDateTimePicker}> {
                                    Moment(this.state.date).format('DD')} </Text>

                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}
                                      onPress={this._showDateTimePicker}>
                                    <Text note style={{fontSize:10,color:'#000'}}
                                          onPress={this._showDateTimePicker}> {
                                        Moment(this.state.date).format('ddd')} </Text>
                                    <Text note style={{fontSize:10,color:'#000'}}
                                          onPress={this._showDateTimePicker}> {
                                        Moment(this.state.date).format('MMMM')} </Text>
                                </View>
                                {/*<Text note style={{fontSize:16,color:'#2eacde',textAlign:'center',fontWeight:'bold'}} > {*/}
                                {/*Moment(this.state.date).format('h:mm A')} </Text>*/}
                                <Text note style={{fontSize:25,color:'#000',marginLeft:120,justifyContent: 'flex-end'}}
                                      onPress={this._showDateTimePicker}> {
                                    Moment(this.state.date).format('dddd')} </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            borderBottomColor: '#917cb7',
                            borderBottomWidth: 1,
                            marginTop:10,
                            width: width - 10,}}>
                        </View>
                        {/*<TouchableOpacity onPress={() => Actions.searchScreen()} style={{alignItems:'flex-end'}}>*/}
                        {/*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*/}
                        {/*<Image source={require('../Images/magnifier.png')} style={{height: 35, width: 35}}*/}
                        {/*/>*/}
                        {/*</View>*/}
                        {/*</TouchableOpacity>*/}

                        <Button style={{height:50,width:width-10,backgroundColor: '#2eacde',
                            marginTop:30,justifyContent:'space-evenly'}}
                                onPress={() => Actions.searchScreen()}>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <Image source={require('../Images/search_magnifie.png')} style = {{ width: 25,
                                    height: 25,alignItems:'center'}}/>
                                <Text style={{fontWeight: "bold",fontSize:14,color:'#FFFFFF'
                                    ,textAlign:'center',paddingLeft:10}}>Search</Text>
                            </View>
                        </Button>
                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}


                        {/*<Text note style={{fontSize:14,textAlign:'center'}} > Time</Text>*/}
                        {/*<Text note style={{fontSize:14,textAlign:'center'}} >A/C</Text>*/}
                        {/*<Text note style={{fontSize:14,textAlign:'center'}} >Non A/C</Text>*/}
                        {/*<Text note style={{fontSize:14,textAlign:'center'}} >  Date/Time</Text>*/}
                        {/*<Text note style={{fontSize:16,textAlign:'center',color:'#0c71b7',fontWeight:'bold'}} >  Search</Text>*/}



                        {/*</View>*/}

                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                        {/*/!*<Image source={require('../Images/smartranlogowhite.png')} style={{height: 200, width: null, flex: 1}}/>*!/*/}
                        {/*<Text note style={{fontSize:16,color:'#2eacde',textAlign:'center',fontWeight:'bold'}} > Selected Date Time: {*/}
                        {/*Moment(this.state.date).format('DD-MM-YYYY h:mm a')} </Text>*/}


                        {/*/!*<Text style={{paddingLeft:12,fontSize:18}} >My details</Text>*!/*/}
                        {/*</View>*/}


                    </Card>

                    {/*<Text note style={{fontSize:18,color:'#FFFFFF',fontWeight:'bold'}} > SmarTran-Your travel made easier ...</Text>*/}
                    {/*<Card>*/}
                    {/*<Swiper style={styles.wrapper} height={200} showsButtons={true} >*/}
                    {/*<View style={styles.slide1}>*/}
                    {/*<Image resizeMode='stretch' style={styles.image} source={require('../Images/sliderimage.jpg')}*/}
                    {/*/>*/}
                    {/*<Text style={styles.text} numberOfLines={1}>Waiting at bus stop is a thing of the past</Text>*/}
                    {/*</View>*/}
                    {/*<View style={styles.slide2}>*/}
                    {/*<Image resizeMode='stretch' style={styles.image} source={require('../Images/sliderimage1.jpg')}*/}
                    {/*/>*/}
                    {/*<Text style={styles.text} numberOfLines={1}>No more indefinite wait at bus stop</Text>*/}

                    {/*</View>*/}
                    {/*<View style={styles.slide3}>*/}
                    {/*<Image resizeMode='stretch' style={styles.image} source={require('../Images/imageslide2.jpg')}*/}
                    {/*/>*/}
                    {/*<Text style={styles.text} numberOfLines={1}>Happy commute is here !</Text>*/}
                    {/*</View>*/}
                    {/*</Swiper>*/}

                    {/*</Card>*/}

                    {/*<Text note style={{fontSize:18,color:'#FFFFFF',fontWeight:'bold'}} > Favourites</Text>*/}

                    {/*<TouchableOpacity onPress={() => Actions.searchScreen()}>*/}
                    {/*<Card  styles={{width: 100,height:300,borderWidth: 3,*/}
                    {/*borderColor: '#999999', alignItems: 'center',*/}
                    {/*borderRadius: 5,*/}
                    {/*overflow: 'hidden',*/}

                    {/*elevation: 1,*/}
                    {/*padding: 10}}>*/}

                    {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                    {/*/!*<Image source={require('../Images/smartranlogowhite.png')} style={{height: 200, width: null, flex: 1}}/>*!/*/}
                    {/*<Text note style={{fontSize:14,textAlign:'center',fontWeight:'bold'}} >Jedimetla.....</Text>*/}
                    {/*<Image source={require('../Images/arrow.png')} style = {{ width: 25, height: 25,alignItems:'center' }}/>*/}
                    {/*<Text note style={{fontSize:14,textAlign:'center',fontWeight:'bold'}} >Mehdipatna...</Text>*/}

                    {/*</View>*/}

                    {/*</Card>*/}

                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => Actions.searchScreen()}>*/}
                    {/*<Card  styles={{width: 100,height:300,borderWidth: 3,*/}
                    {/*borderColor: '#999999', alignItems: 'center',*/}
                    {/*borderRadius: 5,*/}
                    {/*overflow: 'hidden',*/}

                    {/*elevation: 1,*/}
                    {/*padding: 10}}>*/}

                    {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                    {/*<Text note style={{fontSize:14,textAlign:'center',fontWeight:'bold'}} >Kothaguda...</Text>*/}
                    {/*<Image source={require('../Images/arrow.png')} style = {{ width: 25, height: 25,alignItems:'center' }}/>*/}
                    {/*<Text note style={{fontSize:14,textAlign:'center',fontWeight:'bold'}} >Uppal Bus....</Text>*/}

                    {/*</View>*/}



                    {/*</Card>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => Actions.searchScreen()}>*/}
                    {/*<Card  styles={{width: 100,height:300,borderWidth: 3,*/}
                    {/*borderColor: '#999999', alignItems: 'center',*/}
                    {/*borderRadius: 5,*/}
                    {/*overflow: 'hidden',*/}

                    {/*elevation: 1,*/}
                    {/*padding: 10}}>*/}


                    {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                    {/*<Text note style={{fontSize:14,textAlign:'center',fontWeight:'bold'}} >Yousufguda...</Text>*/}
                    {/*<Image source={require('../Images/arrow.png')} style = {{ width: 25, height: 25,alignItems:'center' }}/>*/}
                    {/*<Text note style={{fontSize:14,textAlign:'center',fontWeight:'bold'}} >BHEL...........</Text>*/}
                    {/**/}
                    {/*</View>*/}

                    {/*</Card>*/}
                    {/*</TouchableOpacity>*/}

                </View>



                {/*</ScrollView>*/}



                <View style={[styles.footer]}>
                    <BottomNavigation active={'search'} hidden={false} >
                        <BottomNavigation.Action
                            key="search"
                            icon={<Image source={require('../Images/search_magnifier_black.png')} color="#669999" name="Search" style={{ width: 20, height: 20 }} />}
                            label="Search"
                            // iconColor:"#2CA8DB"
                            // onLoad={() => this.setState({ active: 'search' })}
                            onPress={() => this.setState({ active: 'search' })}
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
        backgroundColor: '#0c71b7',

    },
    headerview: {
        // height: 250,
        //borderRadius:25,
        // borderWidth:5,
        // borderColor:'#917cb7',
        position: 'absolute',
        backgroundColor: '#0c71b7',
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

        backgroundColor: '#0c71b7',
        // marginBottom: 10
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
    header: {
        backgroundColor: '#0c71b7',
        padding: 10,
        borderTopEndRadius:5,
        borderWidth:2,
        // borderColor:'#0C71B7',
        marginRight:5,
        marginLeft:5,
    },
    headerText: {
        // textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        // color:'#0C71B7',
    },
    content: {
        padding: 20,
        backgroundColor: '#0c71b7',
        // color:'#B7B152',
        marginRight:5,
        marginLeft:5,
    },



    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0c71b7',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0c71b7',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0c71b7',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14,
        fontStyle:'italic',
        fontWeight:'bold'
    },
    image: {
        width,
        flex: 1
    }
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