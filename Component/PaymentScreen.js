import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { auth } from "../Firebase";
import * as ImagePicker from 'expo-image-picker';
const PaymentScreen = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [txId, setTxId] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Initialize Firebase
    // Request permission for image picker
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
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
      console.log("this is image link", result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  const handletxid = () => {
    const user = auth.currentUser;
    if (user !== null) console.log("Tx" + Date.now() + user.email);
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
    <View style={styles.container}>
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <TouchableOpacity onPress={handletxid}>
        <Text style={styles.label}>getTx</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
        <Text style={styles.imageButtonText}>Upload Image</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <Button title="Submit" onPress={() => console.log("Form submitted")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  imageButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  imageButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 15,
  },
});

export default PaymentScreen;

// // PaymentScreen.js

// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import JazzCashConfig from '../JazzCashConfig'; // Adjust the path accordingly
// import { auth } from '../Firebase';

// const PaymentScreen = () => {
//   const handlePayment = async () => {
//     try {
//       const paymentData = {
//         orderId: 'ORDER_ID', // Replace with a unique order ID
//         amount: '100.00',   // Replace with the desired amount
//         mobileNumber: '03411071617', // Replace with user's mobile number
//         email: auth.currentUser.email, // Replace with user's email
//       };

//       const response = await fetch('https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...paymentData,
//           ...JazzCashConfig,
//         }),
//       });

//       const data = await response.json();
//       console.log('Payment response:', data);
//       // Handle the payment response accordingly
//     } catch (error) {
//       console.error('Payment error:', error);
//     }
//   };

//   return (
//     <View>
//       <Text>Click the button to make a payment:</Text>
//       <Button title="Enroll" onPress={handlePayment} />
//     </View>
//   );
// };

// export default PaymentScreen;
