import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseSceenStyle from './CourseSceenStyle'

const FirebaseScreen = () => {
  return (
    <CourseSceenStyle
    ImageSource={{uri:"https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png"}}
    discription="
Firebase is a comprehensive and real-time mobile and web application development platform offered by Google, providing services like authentication, real-time database, cloud storage, hosting, and more, simplifying the development and scaling of applications."
    price="Rs: 1500"
    title="Learn FireBase"
  />
  )
}

export default FirebaseScreen

const styles = StyleSheet.create({})