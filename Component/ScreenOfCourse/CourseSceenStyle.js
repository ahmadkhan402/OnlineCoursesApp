import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colorbg } from '../../DataBase'

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
          onPress={()=>navigation.navigate("pay")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Register</Text>
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
        color:"black",
    fontSize: 18,
    fontWeight: 'bold',
  
    },
    loginBtn: {
        
        alignSelf:"center",
        marginTop: "5%",
        width: "40%",
        borderRadius: 25,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colorbg.bgdarkpro,
        elevation:15,
        paddingHorizontal:"5%" 
      },
    Content:{
       
        flex:1,
        backgroundColor:colorbg.bgLiteDark,
        borderTopWidth:1,
        borderWidth:1,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        padding:20,
        marginTop:"65%"
    },
    discription:{
        paddingVertical:"4%",
        fontSize:20,
        color:"#49688D",
        fontWeight:"100",
        textAlign:"left"

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