import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import JavaScreen from '../ScreenOfCourse/JavaScreen';
const HorizontalScrollList = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Python") }>
          <Image style={{width:45,height:45}} source= {require("../.././assets/python1.png")} />
          <Text style={styles.buttonText}>Python</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("java") }>
          <Image style={{width:45,height:45}} source= {require("../.././assets/j.png")} />
          <Text style={styles.buttonText}>Java Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("firebase") }>
          <Image style={{width:45,height:45}} source= {require("../.././assets/f.png")} />
          <Text style={styles.buttonText}>FireBase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("react") }>
          <Image style={{width:45,height:45}} source= {require("../.././assets/r.png")} />
          <Text style={styles.buttonText}>Learn React</Text>
        </TouchableOpacity>
        {/* Add more buttons here */}
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    flexDirection:"column",
    justifyContent:"center",
    alignContent:"center",
    width: 130,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
    color:"#6C95C6",
    paddingVertical:"7%"
  },
});

export default HorizontalScrollList;
