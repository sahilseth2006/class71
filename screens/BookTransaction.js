
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";

export default class BookTransaction extends React.Component {

    constructor(){
        super()
        this.state={
            hasCamPermission:null,
            scanned:false,
            scannedData:"",
            buttonState:"normal"
        }
    }

    getCamPermission=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCamPermission:status==="granted",
            buttonState:"clicked"
        })
    }

    handleBarCodeScanned=async({type,data})=>{
        this.setState({
           scanned:true,
           scannedData:data,
           buttonState:"normal"
        })
    }
    render(){
    if(this.state.buttonState==="clicked" && this.state.hasCamPermission===true){
        return(
            <BarCodeScanner

                onBarCodeScanned={this.state.scanned?undefined:this.handleBarCodeScanned}

            />


        )
    }
    else if(this.state.buttonState==="normal"){
        return(

            <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center"}}>

                <TextInput placeholder="Book Id"/>

                <TouchableOpacity style={{backgroundColor:"lightblue",margin:30}}>
                    <Text >
                        Scan
                    </Text>
                </TouchableOpacity>

                <TextInput placeholder="Student Id"/>

                <TouchableOpacity style={{backgroundColor:"lightblue",margin:30}}>
                    <Text>
                        Scan
                    </Text>
                </TouchableOpacity>

            </View>


        )

    }
       

    }
  
}
