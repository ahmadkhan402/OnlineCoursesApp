import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseSceenStyle from './CourseSceenStyle'

const JavaScreen = () => {
  return (
    <CourseSceenStyle
    ImageSource={require("./../../assets/j.png")}
    discription="Java is a robust and platform-independent programming language commonly used for building enterprise-level applications, mobile apps, and server-side software, favored for its strong object-oriented capabilities and portability."
    price="Rs: 1500"
    title="Learn Java"
  />
  )
}

export default JavaScreen

const styles = StyleSheet.create({})