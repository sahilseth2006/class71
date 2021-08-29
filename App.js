import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import BookTransaction from './screens/BookTransaction';
import SearchScreen from './screens/SearchScreen';


export default function App() {
  return (

    <AppContainer/>


  );
}

const Tab=createBottomTabNavigator({
  Transaction:{screen:BookTransaction},
  Search:{screen:SearchScreen},
},{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const route=navigation.state.routeName;
      if(route==="Transaction"){
        return(<Image source={require("./assets/assets/book.png")} style={{width:40,height:40}}/>)
      }else if(route==="Search"){
        return(<Image source={require("./assets/assets/searchingbook.png")} style={{width:40,height:40}}/>)
    }
  }
  })

  
})

const AppContainer=createAppContainer(Tab)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
