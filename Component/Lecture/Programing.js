import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { ScrollView } from 'react-native';
import { colorbg } from '../../DataBase';

const Programing = () => {
    return (
        <>
        <ScrollView>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
              Programming Lecture: Introduction to JavaScript
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>
              This programming lecture provides an introduction to JavaScript, one of the most popular programming languages for web development.
            </Text>
    
            {/* Placeholder for lecture content */}
            <Text style={{ fontSize: 20, marginBottom: 10 ,fontWeight:"800" }}>Agenda:</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>- What is JavaScript?</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>- Basic syntax and data types</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}> - Variables and operators</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>- Control flow (if statements, loops)</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>- Functions and objects</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>- Introduction to the Document Object Model (DOM)</Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>- JavaScript in the browser</Text>
            {/* Add more lecture content here */}
          
       
        <Text style={{color:"blue",marginTop:"20%"}}>Want To learn Programing Deeply, Click the link below </Text>
        <TouchableOpacity style={styles.ButtonStyle} onPress={()=> Linking.openURL("https://learnprogramming.online/")}>
          <Text style={{color:"#fff",fontSize:28,alignSelf:"center"}}>Click the Link</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </>
      )
    };


export default Programing

const styles = StyleSheet.create({
    ButtonStyle:{
        marginTop: 17,
        backgroundColor: colorbg.bgLiteDark,
        borderRadius: 10,
        marginHorizontal: 8,
        height:40,
        alignItems:"center"
      },
})