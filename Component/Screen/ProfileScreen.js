import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { color, colorbg } from "../../DataBase";
import { Ionicons } from "@expo/vector-icons";
import { auth, db, storage } from "../../Firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { updateEmail } from "@firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useImage } from "../Context/ImageProvider";

// Use the useRoute hook to get access to the route prop

const ProfileScreen = () => {
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const { imageUrl } = useImage();
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [mostRecentItem, setMostRecentItem] = useState(null);

  // Function to retrieve most recent data from Firestore
  const getMostRecentData = async () => {
    try {
      const docRef = doc(db, "Names", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getMostRecentData();
      setEmail(auth.currentUser.email);
    }, []) // Empty dependency array means this will run when the screen gains focus
  );
  console.log(image);
  return (
    <ImageBackground
      style={styles.container}
      source={require("./../../assets/Profilebg.jpg")}
    >
      <TouchableOpacity
        style={{ padding: "4%" }}
        onPress={() => navigation.goBack()}
      >
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
          {data.displayName}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#fff", fontSize: 17, fontWeight: "300" }}>
            {email}
          </Text>
          {/* <TouchableOpacity style={styles.editbtnEmail} onPress={handleEmailupdate}>
          <Text style={{color:"white"}}>Edit Email</Text>
        </TouchableOpacity> */}
        </View>
        <TouchableOpacity
          style={styles.editbtn}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={{ color: "#fff", fontSize: 15 }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: "50%", marginVertical: "1%" }}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        ) : (
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
            }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        )}
      </View>

      <View style={styles.TextContent}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="user" size={50} color={colorbg.bgdarkpro} />
          <View style={{ paddingLeft: "5%" }}>
            <Text style={{ paddingTop: 5, color: "black" }}> NickName</Text>
            <Text
              style={{
                paddingTop: 2,
                color: "black",
                fontSize: 18,
                fontWeight: "300",
              }}
            >
              {data.displayName}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", paddingTop: "5%" }}>
          <AntDesign name="phone" size={50} color={colorbg.bgdarkpro} />
          <View style={{ paddingLeft: "5%" }}>
            <Text style={{ paddingTop: 5, color: "black" }}> Ph: number</Text>
            <Text
              style={{
                paddingTop: 2,
                color: "black",
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              {data.phoneNumber}
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
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 100,
  },
  TextContent: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginVertical: "8%",
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
  editbtnEmail: {
    width: 75,
    borderRadius: 31,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 12,
    marginLeft: 10,
  },
});

export default ProfileScreen;
