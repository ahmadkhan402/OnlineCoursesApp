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

import {updatePassword,  getASecureRandomPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { colorbg } from "../../DataBase";

export default function LoginScreen({ navigation }) {
  //Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleForgetPassword =()=>{

sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    Alert.alert("Password Reset Link is Send Successfully")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 }

const handleLogin = ()=>{
 
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if(user){
        navigation.navigate("Home")
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(errorMessage)
    });
  }
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/bckg1.jpg")}
    >
      <View style={styles.miniContainer}>
        <StatusBar style="auto" />
        <View
          style={{
           display:"flex",
            justifyContent: "center",
            marginTop:"40%"
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
            Wellcome!
          </Text>
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

          <TouchableOpacity
            style={styles.loginBtn} onPress ={handleLogin}
          >
            <Text style={{ color: "#49688D", fontSize: 20 }}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: "4%" }}
            onPress={handleForgetPassword}
          >
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Create}
            onPress={() => navigation.navigate("Create")}
          >
            <Text style={{ color: "#49688D", fontSize: 20}}>Create</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: "4%" }}
            onPress={() => handleForgetPassword()}
          >
            <Text style={styles.forgot_button}>Don't have an account?</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  miniContainer: {
    justifyContent: "center",
    marginVertical:"10%"
  },

  inputView: {
    marginTop: "10%",
    backgroundColor: "transparent",
    borderColor: "#49688D",
    borderBottomWidth: 1,
    textAlign: "center",
    borderStyle: "solid",
    width: "100%",
    height: "10%",
    textAlign: "left",
  },
  TextInput: {
    fontSize: 17,
    width: "100%",
    padding: 2,
  },
  forgot_button: {
    textAlign: "center",
    color: "#49688D",
  },
  loginBtn: {
    marginTop: "30%",
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
    paddingHorizontal:"30%" 
  },
  Create: {
   marginTop:"10%",
    width: "70%",
    borderRadius: 25,
    height: 50,
    textAlign:"center",
    alignItems: "center",
    marginHorizontal:"15%",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
  },

});
