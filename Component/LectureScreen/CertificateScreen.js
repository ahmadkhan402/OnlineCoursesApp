import React, { useEffect, useState } from 'react';
import { View, Image, Button, PermissionsAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { colorbg } from '../../DataBase';
import { Text } from 'react-native';
import { Alert } from 'react-native';

const CertificateScreen = () => {

    const [ progresn , setProgress] = useState("")
  const imageUri = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/abstract-certificate-design-premium-design-template-3438cb19c491ebfda50d5b13c516eb9f_screen.jpg'
  // Replace with the actual URL of the image

  const downloadImage = async () => {
    const callback = downloadProgress => {
        const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
        setProgress({
          downloadProgress: progress,
        });
      };
      
      var downloadResumable = FileSystem.createDownloadResumable(
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/abstract-certificate-design-premium-design-template-3438cb19c491ebfda50d5b13c516eb9f_screen.jpg',
        FileSystem.documentDirectory + 'Certificate.jpg',
        {},
        callback
      );
      
      try {
        const { uri } = await downloadResumable.downloadAsync();
        console.log('Finished downloading to ', uri);
        Alert.alert('Finished downloading to ', uri);
      } catch (e) {
        console.error(e);
      }
      
   
     
      
      
      
     
      
  };

  return (
    <View style={{flex:1, paddingHorizontal:16, justifyContent:"center",alignItems:"center"}}>
    <Text style={styles.heroText}>Contact to Meta SH </Text>
    <Text style={styles.heroTextOr}>Or </Text>
    <Text style={styles.heroTextDis}>Click To download Certificate</Text>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 ,marginVertical:16}} />
      <TouchableOpacity   onPress={downloadImage}  style={styles.loginBtn}>
        <Text style={{color:"#fff", fontSize:20}}> Download</Text>
      </TouchableOpacity> 
    </View>
  );
};

export default CertificateScreen;
const styles = StyleSheet.create({
    loginBtn: {
        marginTop: 10,
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colorbg.bgdarkpro,
        elevation: 40,
      },
      heroText: {
        color: colorbg.bgdark,
        fontSize: 27,
        fontWeight: "bold",
        marginTop: 20,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignSelf: "center",
      },
      heroTextOr: {
        color: colorbg.bgdarkpro,
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 2,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignSelf: "center",
      },
      heroTextDis: {
        color: "#49688D",
        fontSize: 15,
        marginTop: 2,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignSelf: "center",
      },
})