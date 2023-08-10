import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SliderBox } from "react-native-image-slider-box";
import Card from "./Card";
import { ImageBackground } from "react-native";

const HomeScreen = () => {
  const images = [
    require("../../assets/p1.jpg"),
    require("../../assets/web.webp"),
    require("../../assets/p1.jpg"),
    require("../../assets/python.webp"),
   ]
  return (
    <View style={styles.container}>
    <ImageBackground source={require("../../assets/bg2.png")}>
      {/* Header */}
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Ionicons name="ios-menu" size={30} color="black" />
      </View>

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
      {/* Course Highlights */}
      <View style={styles.courseHighlights}>
       <Text style={{fontSize:15, fontWeight:"700"}}>Featured Courses</Text> 
       <ScrollView>
       
        <Card
          title="Introduction to Programming"
          description="Learn the basics of programming with this comprehensive course."
          imageSource={require('../../assets/web.webp')}
        />
        <Card
          title="Web Development Fundamentals"
          description="Master the essentials of web development and create dynamic websites."
          imageSource={require('../../assets/p1.jpg')}
        />
        {/* Add more cards here */}
        
      </ScrollView>
    
        <TouchableOpacity style={styles.enrollButton}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>

      {/* About the Institute */}
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>About Us</Text>
        {/* Add institute description and instructor info */}
      </View>

      {/* Testimonials and Reviews */}
      <View style={styles.testimonials}>{/* Add student testimonials */}</View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Contact Information */}
        {/* Social Media Links */}
        {/* Quick Links */}
      </View>
      </ImageBackground>
    </View>
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
    marginTop: "1%",
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
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
  heroText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  courseHighlights: {
    marginVertical: 16,
    paddingHorizontal: 16,
    fontSize:25,
    fontWeight:"bold"
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
    marginTop: 24,
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
