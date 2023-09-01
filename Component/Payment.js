import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import JazzCashConfig from "../JazzCashConfig"; // Adjust the path accordingly
import { auth, db, storage } from "../Firebase";
import * as ImagePicker from "expo-image-picker";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
/* Icons */
import { Ionicons, Entypo } from "@expo/vector-icons";
import { colorbg } from "../DataBase";
import { ScrollView } from "react-native";
import { Alert } from "react-native";
export default function Payment({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [txId, setTxId] = useState("");
  const [ZipCode, setZipCode] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setimageUrl] = useState(null);
  const [Blob, setblob] = useState(null);
  const [result, setResult] = useState("");
  const [blobData, setBlobData] = useState(null);
  const [DisableButton, setDisableButton] = useState(true);

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
       setBlobData(blob)
    }
  
  };
  const getTxID = () => {
    let x = "TX" + Date.now();
    setTxId(x);
    console.log(x);
  };
  const SaveDataToFirestore = async () => {
     

const metadata = {
  contentType: 'image/jpeg'
};
console.log("this is blob image", blobData)
// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'Course_Pay_images/' + Date.now());
const uploadTask = uploadBytesResumable(storageRef, blobData, metadata);

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
      setimageUrl(downloadURL)
    });
  }
);
    const userRef = doc(db, "User_Paid", fullName);
    await setDoc(userRef, {
      fullName,
      phoneNumber,
      ZipCode,
      txId,
    });
    Alert.alert("Data Successfully Store in Firebase/Firestore");
    navigation.navigate("selectLecture")
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Content of Payment Screen */}
      <View style={[styles.section__container, { paddingHorizontal: "2%" }]}>
        {/* Back button */}
        <Ionicons
          onPress={() => navigation.pop()}
          name="arrow-back"
          size={34}
          color="#e8f2fd"
        />

        {/* Screen Heading */}
        <Text style={styles.section__heading}>Payment gateway</Text>
      </View>
      <ScrollView>
        {/* Card Container */}
        <View style={styles.card__container}>
          {/* Paypal Card */}
          <Image
            style={{ width: 50, height: 40 }}
            source={{
              uri: "https://banner2.cleanpng.com/20180327/zdw/kisspng-television-jazz-download-android-cash-5ab9f04459d645.926325111522135108368.jpg",
            }}
          ></Image>

          {/* MasterCard */}
          <Image
            style={{ width: 50, height: 40, marginHorizontal: 9 }}
            source={{
              uri: "https://banner2.cleanpng.com/20180824/rho/kisspng-telenor-pakistan-mobile-phones-bank-telenor-sales-easypaisa-empowers-dairy-farmers-with-smart-milk-p-5b8001c128ec82.9655885215351157131676.jpg",
            }}
          ></Image>

          {/* Visa Card */}
          <Image
            style={{ width: 50, height: 40 }}
            source={{
              uri: "https://w7.pngwing.com/pngs/305/373/png-transparent-logo-mastercard-font-solar-home-text-orange-logo.png",
            }}
          ></Image>
        </View>
        {/* Horizontal Row */}
        <Text style={styles.hr}></Text>

        {/* Payment Form */}
        <View style={styles.form}>
          <View
            style={{
              backgroundColor: colorbg.bgdarkpro,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                marginBottom: 6,
                fontWeight: "700",
                fontSize: 17,
              }}
            >
              Course amount
            </Text>
          </View>
          <Text style={{ marginVertical: 8, fontWeight: "900", fontSize: 17 }}>
            Rs 5000
          </Text>

          {/* Card Name */}
          <Text style={{ marginTop: 9, marginBottom: 6, fontWeight: "700" }}>
            Full Name
          </Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />

          {/* Card Number */}
          <Text style={{ marginTop: 9, marginBottom: 6, fontWeight: "700" }}>
            PhoneNumber
          </Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />

          {/* ExpiryDate and SecurityCode */}

          {/* Postal Code */}
          <Text style={{ marginTop: 9, marginBottom: 6, fontWeight: "700" }}>
            ZIP/Postal code
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setZipCode(e)}
          ></TextInput>
          <Text style={{ color: "black", fontWeight: "700" }}>Tx ID</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 9,
              justifyContent: "space-between",
            }}
          >
            <TextInput
              aria-disabled={true}
              style={styles.input1}
              value={txId}
            ></TextInput>
            <TouchableOpacity onPress={getTxID} style={styles.getBtn}>
              <Text style={{ color: "#fff", fontSize: 12 }}>getTxID</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignContent: "center" }}>
            <Text
              style={{ color: "grey", fontSize: 16, textAlign: "center" }}
            ></Text>
          </View>
          <TouchableOpacity onPress={pickImage}
            style={[
              styles.UpBtn,
              { flexDirection: "row", justifyContent: "center" },
            ]}
          >
            <Entypo
              name="upload"
              size={25}
              color="#fff"
              style={{ paddingRight: "3%" }}
            />
            <Text style={styles.imageButtonText}>Upload Recipt</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.image} />}

          {/* Payment Button */}

          <TouchableOpacity
            onPress={SaveDataToFirestore}
            style={styles.loginBtn}
          >
            <Text style={styles.btn__text}>Pay</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: imageUrl }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: "3%",
    alignItems: "center",
    alignSelf: "center",
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 15,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "grey",
  },

  amount: {
    color: "#e36e04",
    fontSize: 17,
  },

  imageButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },

  icon: {
    margin: 20,
    marginBottom: 0,
    width: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#fff",
  },

  section__container: {
    backgroundColor: "#e36e04",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  hr: {
    alignSelf: "center",
    height: 2,
    width: "50%",
    backgroundColor: "#e36e04",
  },

  section__heading: {
    textAlign: "center",
    color: "#fff",
    padding: 15,
    paddingHorizontal: "10%",
    fontSize: 20,
    fontWeight: "bold",
  },

  card__container: {
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: 19,
  },

  form: {
    paddingHorizontal: 30,
  },
  input1: {
    width: "75%",
    borderWidth: 1,
    padding: 4,
    marginBottom: 6,
    borderRadius: 7,
    borderColor: "#e36e04",
    color: "#000",
  },

  input: {
    borderWidth: 1,
    padding: 4,
    marginBottom: 6,
    borderRadius: 7,
    borderColor: "#e36e04",
    color: "#000",
    paddingLeft: 11,
  },

  expityDate__securityCode: {
    flexDirection: "row",
    width: "100%",
  },

  special: {
    width: 140,
  },

  loginBtn: {
    marginTop: "10%",
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
    paddingHorizontal: "10%",
  },
  getBtn: {
    paddingHorizontal: "4%",
    MarginLeft: "2%",
    width: "22%",
    borderRadius: 10,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
  },
  UpBtn: {
    marginTop: "10%",
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
  },
  btn__text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 19,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

/* Custom Alert Box */
/* const customAlert = () => {
    Alert.alert('Confirmation', 'Are u Sure', [
      {
        text: 'cancel',
        onPress: () => navigation.navigate('dashboard'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => navigation.navigate('profile'),
      },
    ]);
  }; */

// const handlePayment = async () => {
//   try {
//     const paymentData = {
//       orderId: 'ORDER_ID', // Replace with a unique order ID
//       amount: '100.00',   // Replace with the desired amount
//       mobileNumber: '03411071617', // Replace with user's mobile number
//       email: auth.currentUser.email, // Replace with user's email
//     };

//     const response = await fetch('https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         ...paymentData,
//         ...JazzCashConfig,
//       }),
//     });

//     const data = await response.json();
//     console.log('Payment response:', data);
//     // Handle the payment response accordingly
//     if (data.Status === 'Success') {
//       // Payment successful, navigate to PaymentSuccessScreen
//       navigation.navigate('PaymentSuccess');
//     } else {
//       // Handle payment failure scenario
//       // ... (display error message, etc.)
//     }

//   } catch (error) {
//     console.error('Payment error:', error);
//   }
// };
// //
//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All, // We can  specify whether we need only Images or Videos
//       allowsEditing: true,
//       aspect: [1,1],
//       quality: 1,   // 0 means compress for small size, 1 means  compress for maximum quality
//     });
//     setResult(result)
//     console.log(result.assets[0].uri);

//     if (!result.canceled) {
//       const url = result.assets[0].uri
//       setImage(result.assets[0].uri);

//     }
//   };

// console.log(Blob)

// const SaveImageToFirebase = async()=>{
//   console.log("ejcvejvnjenvjenvk",image)
//   try {
//     const response = await fetch(image); // Replace with your image URL
//     const blob = await response.blob();

//     const storageRef = ref(storage, 'images/' + new Date().getTime() + '.jpg');
//     await uploadString(storageRef, blob, 'data_url');

//     const downloadURL = await getDownloadURL(storageRef);
//     setImageURI(downloadURL);
//   } catch (error) {
//     console.error('Error uploading image:', error);
//   }
//   try {
//     const response = await fetch(image); // Replace with your image URL

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const blob = await response.blob();

//     const storageRef = ref(storage, 'images/' + new Date().getTime() + '.jpg');
//     await uploadString(storageRef, blob, 'data_url');

//     const downloadURL = await getDownloadURL(storageRef);
//     setImageURI(downloadURL);
//   } catch (error) {
//     console.error('Error uploading image:', error);
//   }

// // Create the file metadata
// /** @type {any} */
// const metadata = {
//   contentType: 'image/jpeg'
// };

// // Upload file and metadata to the object 'images/mountains.jpg'
// const storageRef = ref(storage, 'Ahmadcreation/' + Date.now());
// const uploadTask = uploadBytesResumable(storageRef, blobData, metadata);

// // Listen for state changes, errors, and completion of the upload.
// uploadTask.on('state_changed',
//   (snapshot) => {
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   },
//   (error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     switch (error.code) {
//       case 'storage/unauthorized':
//         // User doesn't have permission to access the object
//         break;
//       case 'storage/canceled':
//         // User canceled the upload
//         break;

//       // ...

//       case 'storage/unknown':
//         // Unknown error occurred, inspect error.serverResponse
//         break;
//     }
//   },
//   () => {
//     // Upload completed successfully, now we can get the download URL
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//       setimageUrl(downloadURL)
//     });
//   }
// );
//}
