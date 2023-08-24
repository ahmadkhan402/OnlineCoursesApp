import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { db, storage } from '../../Firebase';


const EditProfile = () => {
  const [displayName, setDisplayName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);

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
    }
  };

  const saveDataToFirebase = async () => {
   
    // Upload image to Firebase Storage
    const imageRef = ref(storage, 'profile_images/' + Date.now() + '.jpg');
    await uploadString(imageRef, 'data_url').then((snapshot) => {
      console.log(snapshot.metadata)
      console.log('Uploaded a raw string!');
    });


    // Get download URL
    const imageUrl = await getDownloadURL(imageRef);
      console.log("this is image url",imageUrl)
    // Save user data to Firestore
    const userRef = doc(db, 'users', phoneNumber);
    await setDoc(userRef, {
      displayName,
      phoneNumber,
      imageUrl,
    });

    console.log('Data saved successfully');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} />
        ) : (
          <Text>Select a Profile Picture</Text>
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Display Name"
        value={displayName}
        onChangeText={text => setDisplayName(text)}
        style={{ marginVertical: 10, paddingHorizontal: 10, borderWidth: 1, width: 200 }}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        style={{ marginVertical: 10, paddingHorizontal: 10, borderWidth: 1, width: 200 }}
      />
      <Button title="Save Data" onPress={saveDataToFirebase} />
    </View>
  );
};

export default EditProfile;
