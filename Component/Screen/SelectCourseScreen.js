import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { colorbg } from '../../DataBase'


const SelectCourseScreen = () => {
    const naviagtion = useNavigation()
  return (
    <ImageBackground style={{flex:1,justifyContent:"center"}} source={require("../../assets/bg1.png")}>
    <View style={{paddingHorizontal:16}}>
    <Text style={styles.heroText} >Select The Course</Text>
        <TouchableOpacity style={styles.ButtonStyle} onPress={()=>{naviagtion.navigate("LecJava")}}>
            <Text style={{color:"#fff",fontSize:18}}>Java Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonStyle} onPress={()=>{naviagtion.navigate("LecPython")}}>
            <Text style={{color:"#fff",fontSize:18}}>Python Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonStyle} onPress={()=>{naviagtion.navigate("LecJavaScript")}}>
            <Text style={{color:"#fff",fontSize:18}}>JavaScript Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonStyle} onPress={()=>{naviagtion.navigate("LecReact")}}>
            <Text style={{color:"#fff",fontSize:18}}>React Course</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

export default SelectCourseScreen

const styles = StyleSheet.create({
  heroText: {
    color: colorbg.bgdarkpro,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignSelf: "center",
  },
  
  ButtonStyle: {
    alignSelf:"center",
    marginTop: 17,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
  },
})