import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const CourseSceenStyle = ({title,ImageSource,discription,price}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image style={styles.ImageSource} source={ImageSource} />
      <TouchableOpacity style={{padding:"4%"}} onPress={()=> navigation.goBack()}>
      <Ionicons name="arrow-back" size={34} color="#e8f2fd" />
        {/* <AntDesign name="back" size={34} color="#e8f2fd" /> */}
      </TouchableOpacity>
      <View style={styles.Content}>
        <View style={{ flexDirection: "row" , justifyContent:"space-between"}}>
          <Text style={styles.Title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Text style={styles.discription}>{discription}</Text>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={()=>navigation.navigate("payrol")}
        >
          <Text style={{ color: "#49688D", fontSize: 20 }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CourseSceenStyle

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column"
    },
    Title:{
        color:"#49688D",
    fontSize: 27,
    fontWeight: 'bold',
  
    },
    loginBtn: {
        
        alignSelf:"center",
        marginTop: "5%",
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e8f2fd",
        elevation:15,
        paddingHorizontal:"5%" 
      },
    Content:{
       
        flex:1,
        backgroundColor:"#e8f2fd",
        borderTopWidth:1,
        borderWidth:1,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        padding:20,
        marginTop:"74%"
    },
    discription:{
        paddingVertical:"5%",
        fontSize:20,
        color:"#6C95C6",
        textAlign:"justify"

    },
    ImageSource:{
       position:"absolute",
       height:"70%",
        width:"100%",
        resizeMode:"stretch"
    },
    price:{
        color:"#49688D",
        fontSize: 15,
        fontWeight: '400',
    elevation:15,
    borderRadius:20
    }
})