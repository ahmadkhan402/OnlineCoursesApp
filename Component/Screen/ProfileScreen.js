import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { color, colorbg } from "../../DataBase";
import { Ionicons } from '@expo/vector-icons';
import { auth, storage } from "../../Firebase";
import {  ref, getDownloadURL } from "firebase/storage";
import { updateEmail } from "@firebase/auth";
import { useRoute } from '@react-navigation/native';


// Use the useRoute hook to get access to the route prop




const ProfileScreen = () => {
  const route = useRoute(); 
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
 

 const handleEmailupdate =()=>{
updateEmail(auth.currentUser, "pukhtoon403@gmail.com").then(() => {
  // Email updated!
  Alert.alert("Email updated!")
  // ...
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  Alert.alert(errorMessage)
});
 }

 const navigation = useNavigation()
 useEffect(() => {
  setEmail(auth.currentUser.email)
 const starsRef = ref(storage, 'profile_images/' + Date.now() + '.jpg');
 
 // Get the download URL
 getDownloadURL(starsRef)
   .then((url) => {
     setImage(url)
   })
   .catch((error) => {
     // A full list of error codes is available at
     // https://firebase.google.com/docs/storage/web/handle-errors
     switch (error.code) {
       case 'storage/object-not-found':
         // File doesn't exist
         break;
       case 'storage/unauthorized':
         // User doesn't have permission to access the object
         break;
       case 'storage/canceled':
         // User canceled the upload
         break;
 
       // ...
 
       case 'storage/unknown':
         // Unknown error occurred, inspect the server response
         break;
     }
   });
  
},[]);

console.log(image)
  return (
    <ImageBackground
      style={styles.container}
      source={require("./../../assets/Profilebg.jpg")}
    >
    <TouchableOpacity style={{padding:"4%"}} onPress={()=> navigation.goBack()}>
      <Ionicons name="arrow-back" size={34} color="#e8f2fd" />
        {/* <AntDesign name="back" size={34} color="#e8f2fd" /> */}
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          marginHorizontal: "9%",
        }}
      >
        
        <Text style={{ color: "#fff", fontSize: 35, fontWeight: "bold" }}>
          Ahmad safiullah
        </Text>
        <View style={{flexDirection:"row"}}> 
        <Text style={{ color: "#fff", fontSize: 17, fontWeight: "300" }}>
          {email}
        </Text>
        <TouchableOpacity style={styles.editbtnEmail} onPress={handleEmailupdate}>
          <Text style={{color:"white"}}>Edit Email</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.editbtn} onPress={()=>navigation.navigate("EditProfile")} >
            <Text style={{ color: "#fff", fontSize: 15 }}>Edit Profile</Text>
          </TouchableOpacity>
      </View>
      <View style={{ marginLeft: "50%",marginVertical:"19%"}}>
     
        {/* <Image
          source={uri={image}}
          style={styles.image}
        /> */}
      </View>

      <View style={styles.TextContent}>
      <View style={{flexDirection:"row"}}>
      <AntDesign name="user" size={50} color={colorbg.bgdarkpro} />
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
          <AntDesign name="phone" size={50} color={colorbg.bgdarkpro} />
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
    backgroundColor: colorbg.bgdarkpro,
    elevation: 12,
  },
  editbtnEmail:{
    width: 75,
    borderRadius: 31,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 12,
    marginLeft:10

  }
});

export default ProfileScreen;
