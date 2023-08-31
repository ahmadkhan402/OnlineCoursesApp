import React, { useState, useEffect } from 'react';
import { View,StyleSheet, Text, Button, TextInput, Image, TouchableOpacity,ImageBackground, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { db, storage } from '../../Firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AntDesign } from '@expo/vector-icons';
import { colorbg } from '../../DataBase';


const EditProfile = ({navigation}) => {
  const [displayName, setDisplayName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState("");
  const [BlobImage, setBlobImage] = useState('');
  const [ImageUrl, setImageUrl] = useState('');

 

  useEffect(() => {
    // Initialize Firebase
    // Request permission for image picker
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("this is image link",result.assets[0].uri)
      setImage(result.assets[0].uri);
      const url = result.assets[0].uri
      
      
      function urlToBlob(url) {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.addEventListener('error', reject);
          xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
              resolve(xhr.response);
            }
          });
          xhr.open('GET', url);
          xhr.responseType = 'blob'; // convert type
          xhr.send();
        });
      }
      const blob = await urlToBlob(url);
       setBlobImage(blob)
    }
  
  };

  const saveDataToFirebase = async () => {
   

const metadata = {
  contentType: 'image/jpeg'
};


  console.log("this is blob image", BlobImage)
// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'Profile_images/' + Date.now());
const uploadTask = uploadBytesResumable(storageRef, BlobImage, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      setImageUrl(downloadURL)
    });
  }
);
    // // Upload image to Firebase Storage
    // const imageRef = ref(storage, 'profile_images/' + Date.now() + '.jpg');
    // await uploadString(imageRef, 'data_url').then((snapshot) => {
    //   console.log(snapshot.metadata)
    //   console.log('Uploaded a raw string!');
    // });


    // // Get download URL
    // const imageUrl = await getDownloadURL(imageRef);
    //   console.log("this is image url",imageUrl)
    // Save user data to Firestore
    const userRef = doc(db, 'users', displayName);
    await setDoc(userRef, {
      displayName,
      phoneNumber,
      ImageUrl,
    });

    Alert.alert('Data saved successfully');
    navigation.navigate("Profile")
  };

  return (
    <ImageBackground source={require("../../assets/bg2.png")} style={{ flex: 1 , justifyContent:"center", alignItems:"center"}}>
      <View>
      <View>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} />
        ) : (
          <View>
          <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" }} style={{ width: 200, height: 200, borderRadius: 100 }} />
          <TouchableOpacity  onPress={pickImage} style={{flexDirection:"row",justifyContent:"space-between"}}>
             <Text style={styles.CardText}> Select Image</Text> 
             <AntDesign name="pluscircle" size={40} color= {colorbg.bgdark} />
          </TouchableOpacity>
          </View>
        )}
        
      </View>
      </View>
      <View style={styles.inputView}>
      <TextInput
        placeholder="Display Name"
        value={displayName}
        onChangeText={text => setDisplayName(text)}
        style={styles.TextInput}  />
        </View>
        <View style={styles.inputView}>
      <TextInput
        placeholder="Phone Number"
        style={styles.TextInput}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
         />
         </View>
         <TouchableOpacity style={styles.loginBtn} onPress ={saveDataToFirebase}>
            <Text style={{ color: "#fff", fontSize: 20 }}>Log in</Text>
          </TouchableOpacity>
      
      
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  CardText: {
    paddingVertical:12,
        color: "#49688D",
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: "700",
  },
  TextInput: {
    fontSize: 17,
    width: "100%",
    padding: 2,
  },
  inputView: {
    marginTop: "10%",
    backgroundColor: "transparent",
    borderColor: "#49688D",
    borderBottomWidth: 1,
    textAlign: "center",
    borderStyle: "solid",
    width: "70%",
    height: "6%",
    textAlign: "left",
  },
  loginBtn: {
    marginTop: "15%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
    paddingHorizontal:"30%" 
  },
})

export default EditProfile;
