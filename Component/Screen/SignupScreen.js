import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FontAwesome } from "@expo/vector-icons";
import {  auth, db} from "../../Firebase";
import { colorbg } from "../../DataBase"; 
import { updateDoc, serverTimestamp, doc, setDoc, documentId } from "firebase/firestore";

export default function SignupScreen({ navigation }) {
  //Hooks
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [displayName, setName] = useState("");
  const [RepeatPass, setRPassword] = useState("");
  const [CheckPass, SetCheck] = useState(false);

 
  // const handleGoogleLogin = (response)=>{
  //     // Build Firebase credential with the Google ID token.
  //     const idToken = response.credential;
  //     const credential = GoogleAuthProvider.credential(idToken);
    
  //     // Sign in with credential from the Google user.
  //     signInWithCredential(auth, credential).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = errormessage;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The credential that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
    
  // }

async function  DaTaStore(){

const docRef = doc(db, 'Names/',auth.currentUser.uid);
await setDoc(docRef, {
  displayName,
 
});
// Update the timestamp field with the value from the server
console.log("DAta is saved to fireStore")
}
const  handleSignUp =()=>{
  if(Password === RepeatPass){
    // SetCheck(true)
    
createUserWithEmailAndPassword(auth, Email, Password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  if(user){
    navigation.navigate("Login")
  }
  DaTaStore()
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  Alert.alert(errorMessage)
  // ..
});
  }else{
    Alert.alert("Password not Same")
  }

}
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/bckg1.jpg")}
    >
      <View style={styles.miniContainer}>
        <StatusBar style="auto" />
        <View
          style={{ marginTop:"50%",
           
          }}
        >
          <Text
            style={{
              color: "#49688D",
              fontWeight: "bold",
              fontSize: 28,
              fontFamily: "serif",
              textAlign: "center",
            }}
          >
            Create account
          </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              color="#49688D"
              placeholderTextColor="#49688D"
              onChangeText={(email) => setName(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              color="#49688D"
              placeholderTextColor="#49688D"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              color="#49688D"
              placeholderTextColor="#49688D"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Repeat Pasword"
              color="#49688D"
              placeholderTextColor="#49688D"
              onChangeText={(email) => setRPassword(email)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: "10%",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={{ paddingLeft: "8%" }} >
              <Image
                style={{ width: 31, height: 31 }}
                source={require("../../assets/google.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingLeft: "8%" }}>
              <Image
                style={{ width: 31, height: 31 }}
                source={require("../../assets/twiter.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingLeft: "8%" }}>
              <Image
                style={{ width: 31, height: 31 }}
                source={require("../../assets/github.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.SignUpBtn}  onPress={handleSignUp}>
            <Text style={{ color: "#49688D", fontSize: 20 }}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: "4%" }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.forgot_button}>already Register??</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorbg.bgdarkpro,
    justifyContent:"center",
  },
  miniContainer: {
    
  paddingHorizontal:"10%",
  },

  inputView: {
    marginTop: "9%",
    backgroundColor: "transparent",
    borderColor: "#49688D",
    borderBottomWidth: 1,
    borderStyle: "solid",
    width: "100%",
    height: "7%",
    textAlign: "left",
  },
  TextInput: {
    fontSize: 17,
    padding: 2,
   
  },
  forgot_button: {
    textAlign: "center",
    color: "#49688D",
  },
  SignUpBtn: {
    marginTop: "17%",
    width: "100%",
    borderRadius: 31,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
    paddingHorizontal: "10%",
  },
});
