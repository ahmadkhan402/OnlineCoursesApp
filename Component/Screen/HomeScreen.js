import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SliderBox } from "react-native-image-slider-box";
import Card from "./Card";
import { ImageBackground } from "react-native";
import SearchbarScreen from "./SearchbarScreen";
import HorizontalScrollList from "./HorizontalScrollList";
import { colorbg } from "../../DataBase";
import { Linking} from 'react-native'
import { useImage } from "../Context/ImageProvider";
import AdminAbout from "./AdminAbout";
const HomeScreen = ({ navigation }) => {
  const [linkValid, setLinkValid] = useState(true);
  const [lectureDuration, setLectureDuration] = useState(0);

 const {imageUrl} = useImage()
  const images = [
    require("../../assets/p1.jpg"),
    require("../../assets/web.webp"),
    require("../../assets/p1.jpg"),
    require("../../assets/python.webp"),
  ];

  const url = "https://youtu.be/91V_KQ_GRg4";

  // const OpenURLButton = ({ url ,children}) => {
  //   const handlePress = useCallback(async () => {
  //     // Checking if the link is supported for links with custom URL scheme.
  //     const supported = await Linking.canOpenURL(url);

  //     if (supported) {
  //       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
  //       // by some browser in the mobile
  //       await Linking.openURL(url);
  //     } else {
  //       Alert.alert(`Don't know how to open this URL: ${url}`);
  //     }
  //   }, [url]);
  //   return <Button title={children} onPress={handlePress} />;
  // };

  useEffect(() => {
    if (linkValid) {
      const timer = setTimeout(() => {
        setLinkValid(false);
      }, 3600000);
      return () => clearTimeout(timer);
    }
  }, [linkValid]);

 
  return (
    <ImageBackground source={require("../../assets/bckg2.jpg")}>
      {/* Header */}
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Ionicons name="ios-menu" size={30} color="black" />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          {imageUrl ? (
            <Image
              source={{ uri: imageUrl }}
              style={{ width: 55, height: 55 , borderRadius:50}}
            />
          ) : (
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/svg.png")}
            />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* Hero Section */}

        <SliderBox
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={"resize"}
          resizeMode={"cover"}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)",
          }}
          ImageComponentStyle={{ borderRadius: 15, width: "97%", marginTop: 5 }}
          imageLoadingColor="#2196F3"
        />
        <Text style={styles.heroText}>Learn Computer Science Online</Text>

        {/*Search bar*/}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "3%",
          }}
        >
          <SearchbarScreen />
        </View>

        {/* HorizontalScrollList */}
        <View style={{ marginTop: "3%" }}>
          <Text
            style={{
              color: "#49688D",
              paddingHorizontal: 16,
              fontSize: 15,
              fontWeight: "700",
            }}
          >
            Recomended Courses
          </Text>
          <HorizontalScrollList />
        </View>
        {/* Course Highlights */}

        <View style={styles.courseHighlights}>
          <Text style={{ color: "#49688D", fontSize: 15, fontWeight: "700" }}>
            Featured Courses
          </Text>
          <ScrollView>
            <Card
              title="Introduction to Programming"
              description="Learn the basics of programming with this comprehensive course."
              imageSource={require("../../assets/web.webp")}
            />
            <Card
              title="Web Development"
              description="Master the essentials of web development & create dynamic websites."
              imageSource={require("../../assets/p1.jpg")}
            />
            <Card
              title="Learn python"
              description="learn Python with the best tutor we offer."
              imageSource={require("../../assets/python1.png")}
            />
            <Card
              title="Java Course"
              description="Meta Offer Java Course from Zero to hero"
              imageSource={require("../../assets/j.png")}
            />
            {/* Add more cards here */}
          </ScrollView>

          {/* <TouchableOpacity
            style={styles.enrollButton}
            onPress={() => navigation.navigate("pay")}
          >
            <Text style={styles.enrollButtonText}>Enroll Now</Text>
          </TouchableOpacity>
           */}
        </View>

        <Text style={styles.heroText}>Get Online Lecture</Text>
        <View style={styles.LectCard}>
          <View>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/vlogo.png")}
            />
          </View>
          <View style={{ paddingHorizontal: 18 }}>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Lecture Screen
            </Text>
            <Text
              style={{
                color: "#49688D",
                fontSize: 15,
                fontWeight: "400",
                paddingVertical: 10,
              }}
            >
              Link will disabled in 1 hours
            </Text>
          </View>
        </View>
        {linkValid ? (
          <TouchableOpacity
            style={styles.WatchBtn}
            onPress={() => Linking.openURL(url)}
          >
            <Text>Watch lecture </Text>
          </TouchableOpacity>
        ) : (
          <Text style={{ color: "red" }}> The link is expired</Text>
        )}

        {/* About the Institute */}
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>About Us</Text>
          <AdminAbout/>
        </View>

 
        <View style={styles.testimonials}>
         
        </View>

      
        <View style={styles.footer}>
         
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: colorbg.bgLiteDark,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  WatchBtn: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorbg.bgdarkpro,
    elevation: 40,
    paddingHorizontal:"30%" 
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  LectCard:{
    paddingHorizontal: 16, flexDirection:"row" , marginTop:7,
    backgroundColor:colorbg.bgLiteDark,
    marginHorizontal:16,
    padding:10,
    marginBottom:5,
    borderTopLeftRadius:16,
    borderTopRightRadius:16

  },
  heroText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  courseHighlights: {
    marginVertical: 16,
    paddingHorizontal: 16,
    fontSize: 25,
    fontWeight: "bold",
  },
  enrollButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  enrollButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  about: {
    paddingHorizontal: 16,
    marginTop: 18,
    marginBottom:18
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  testimonials: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
