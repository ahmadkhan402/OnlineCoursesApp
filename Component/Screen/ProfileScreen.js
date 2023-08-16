import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

 
 const navigation = useNavigation()

  return (
    <ImageBackground
      style={styles.container}
      source={require("./../../assets/Profilebg.jpg")}
    >
      <View
        style={{
          justifyContent: "center",
          marginHorizontal: "9%",
          marginTop: "20%",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 35, fontWeight: "bold" }}>
          Ahmad safiullah
        </Text>
        <Text style={{ color: "#fff", fontSize: 17, fontWeight: "300" }}>
          ahmadsafiullah@gmail.com
        </Text>
        <TouchableOpacity style={styles.editbtn} onPress={()=>navigation.navigate("EditProfile")} >
            <Text style={{ color: "#49688D", fontSize: 15 }}>Edit Profile</Text>
          </TouchableOpacity>
      </View>
      <View style={{ marginLeft: "50%",marginVertical:"19%"}}>
        <Image
          source={require("../../assets/svg.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.TextContent}>
      <View style={{flexDirection:"row"}}>
      <AntDesign name="user" size={50} color="#B7D0F1" />
          <View style={{paddingLeft:"5%"}}>
            <Text style={{ paddingTop: 5, color: "black" }}> NickName</Text>
            <Text
              style={{
                paddingTop: 2,
                color: "black",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
          Pukhtoon
        </Text>
          </View>
        </View>
      

        <View style={{flexDirection:"row", paddingTop:"5%"}}>
          <AntDesign name="phone" size={50} color="#B7D0F1" />
          <View style={{paddingLeft:"5%"}}>
            <Text style={{ paddingTop: 5, color: "black" }}> Ph: number</Text>
            <Text
              style={{
                paddingTop: 2,
                color: "black",
                fontSize: 15,
                fontWeight: "700",
              }}
            >
             
              +92 3411071618
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 60,
  },
  TextContent:{
    justifyContent:"center",
    alignContent:"center",
    alignSelf:"center",
    marginVertical:"8%"
  },

editbtn: {
    marginTop: 30,
    width: "35%",
    borderRadius: 31,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 40,
  },
});

export default ProfileScreen;
