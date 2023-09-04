import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {  TouchableRipple } from 'react-native-paper';
import { ImageBackground } from 'react-native'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { Image } from 'react-native';
import { colorbg } from '../../DataBase';
const FrontPage = () => {
  const navigation = useNavigation()
  return (
    <ImageBackground style={styles.container} 
    
    source={require("./../../assets/bckg2.jpg")}>
    <StatusBar style="auto" />
    <View style={styles.textfield}>
   <Image style={{width:160,height:160}} source={require("./../../assets/logo.png")} />
        {/* <Text style={{fontSize:40, fontWeight:500,color:"#e38c10"}}>Meta <Text style={{color:"#c7514a",fontSize:10}}>System</Text></Text>
         */}
        <Text style={{fontSize:32, fontWeight:"400",color:colorbg.bgdarkpro ,textAlign:"center",}}>Find the Perfect Online Course for You</Text>
        <Text style={{fontSize:12, fontWeight:"100",color:"#6C95C6",textAlign:"center",}}> Our online tutoring program uses a flexible approach to developed skill based on individual talents</Text>
    </View>
    <View style={{paddingVertical:"1%"}}>
    <LottieView style={{width:210,height:210, }} source={require('../../assets/l2.json')} autoPlay loop />
    </View>
    <View >
    <TouchableOpacity
    onPress={() => navigation.navigate("Login")}
   
style={styles.Btn}
   
  >
    <Text style={{ fontWeight:"200",fontSize:30, color:"#fff"}}>Get Started</Text>
  </TouchableOpacity>
    </View>
      
    </ImageBackground>
  )
}

export default FrontPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textfield: {
    marginVertical:"9%",
    marginHorizontal: "6%",
    justifyContent: "center",
    alignItems: "center",
    textAlign:"justify"
  },
  Btn:{
    width: "80%",
    marginTop:60,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
    paddingHorizontal:"15%" 
  }
});