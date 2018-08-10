import React, { Component } from 'react';

import { Platform, StyleSheet,Dimensions, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
// import Registration from "./Registration"; // 4.0.0-beta.31

export default class SplashScreen extends Component<{}>
{
    // static navigationOptions ={
    //     // title : 'Home Screen',
    // }
    // constructor(props){
    //     super(props);
    //     navigate = props.navigation,
    //         this.state=true;
    //     // {isVisible:true};
    //
    // }

  constructor(){

    super();

    this.state={

      isVisible : true,

    }
    this.buttonAnimated = new Image.Value(0);
    this.growAnimated = new Image.Value(0);
    this._onPress = this._onPress.bind(this);
  }

  Hide_Splash_Screen=()=>{

    this.setState({ 
      isVisible : false 

    });

  }

  componentDidMount(){

    var that = this;

    setTimeout(function(){
    Actions.homeScreen();
        // this.props.navigation.navigate('Registration')
      this.setState({isLoading: false});
      that.Hide_Splash_Screen();

    }, 5000);



  }

    render()
    {
        // const {navigate} = this.props.navigation;
        let Splash_Screen = (

            <View style={styles.SplashScreen_RootView}>

                <View style={styles.SplashScreen_ChildView}>

                    {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}

                   <Image source={require('../Images/smartranlogo.png')}
                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} />
                </View>


                <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style={styles.TouchableOpacity_Style}
                  onPress={this.Hide_Splash_Screen} >

                 

                </TouchableOpacity>


            </View> )

        return(

            <View style = { styles.MainContainer }>

                {
                  (this.state.isVisible === true) ? Splash_Screen : null
                }


            </View>

        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create(
{
   
 MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
        // paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },

    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',

    },

    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flex:1,
        margin:0,
    },

    TouchableOpacity_Style:{

        width:25, 
        height: 25, 
        top:9, 
        right:9, 
        position: 'absolute'

    }
  

      
     

});