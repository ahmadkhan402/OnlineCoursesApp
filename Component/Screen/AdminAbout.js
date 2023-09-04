import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { colorbg } from "../../DataBase";

const AdminAbout = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={[{flexDirection: "row", justifyContent:"space-between"} ,styles.Card] }>
        <View style={{ flexDirection: "column", alignItems:"center", paddingHorizontal:16}}>
          <Text style={styles.Title}>Developer</Text>
          
          <Image
            style={{ width: 150, height: 200 ,resizeMode:"cover", borderRadius:20}}
            source={require("../../assets/founder_pic.jpg")}
          />
          <Text style={styles.discription}>Ahmad Saffiullah</Text>
        </View>
        <View style={{ flexDirection: "column" , alignItems:"center", paddingHorizontal:16}}>
          <Text style={styles.Title}> Sponsored by</Text>
         
          <Image
            style={{ width: 150, height: 200 ,resizeMode:"cover", borderRadius:20}}
            source={require("../../assets/sir.jpeg")}
          />
           <Text style={styles.discription}> Sir ShafaUllah khan</Text>
        </View>
      </View>
    </View>
  );
};

export default AdminAbout;

const styles = StyleSheet.create({
    discription:{
        fontSize:20,
        color:"#49688D",
        fontWeight:"200",
        textAlign:"left",
        marginVertical:10,
    },
    Title:{
        marginVertical:10,
        color: "#49688D",
    fontSize: 20,
    fontWeight: '400',
  
    },
    Card:{
        marginTop:7,
        backgroundColor:colorbg.bgLiteDark,
     
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
       borderBottomEndRadius:16,
    
      },
});
