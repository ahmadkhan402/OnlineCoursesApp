import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseSceenStyle from './CourseSceenStyle'

const PythonScreen = () => {
  return (
    <CourseSceenStyle
    ImageSource={require("./../../assets/python.webp")}
    discription="Python is a versatile and user-friendly programming language known for its simplicity and readability. It is widely used for web development, data analysis, artificial intelligence, and automation."
    price="Rs: 1500"
    title="Learn Python"
  />
  )
}

export default PythonScreen

const styles = StyleSheet.create({})