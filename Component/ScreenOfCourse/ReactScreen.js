import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CourseSceenStyle from "./CourseSceenStyle";


const ReactScreen = () => {
  return (
    
      <CourseSceenStyle
        ImageSource={require("./../../assets/appdev.jpg")}
        discription="React is a popular JavaScript library for building interactive user interfaces, known for its component-based architecture and efficient rendering, widely used in web development."
        title="Learn Python"
        price={"Rs 2500"}
      />
    
  );
};

export default ReactScreen;

const styles = StyleSheet.create({});
