import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import LoginScreen from './Component/Screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './Component/Screen/SignupScreen';
import HomeScreen from './Component/Screen/HomeScreen';
import FrontPage from './Component/Screen/FrontPage';
import JavaScreen from './Component/ScreenOfCourse/JavaScreen';
import PythonScreen from './Component/ScreenOfCourse/PythonScreen';
import ReactScreen from './Component/ScreenOfCourse/ReactScreen';
import ProfileScreen from './Component/Screen/ProfileScreen';
import EditProfile from './Component/Screen/EditProfile';
import Payment from './Component/Payment';
import JavaLectureSceen from './Component/LectureScreen/JavaLectureSceen';
import PythonLectureScreen from './Component/LectureScreen/PythonLectureScreen';
import JavaScriptLectureScreen from './Component/LectureScreen/JavaScriptLectureScreen';
import ReactNativeLectureScreen from './Component/LectureScreen/ReactNativeLectureScreen';
import SelectCourseScreen from './Component/Screen/SelectCourseScreen';
import CertificatePaySCreen from './Component/LectureScreen/CertificatePaySCreen';
import CertificateScreen from './Component/LectureScreen/CertificateScreen';
import Programing from './Component/Lecture/Programing';
import { ImageProvider } from './Component/Context/ImageProvider';
import FirebaseScreen from './Component/ScreenOfCourse/FirebaseScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ImageProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='FrontPage'>
   <Stack.Screen name="ProgramLec" component={Programing} options={{headerShown:false}}/>
    <Stack.Screen name="CertificateScreen" component={CertificateScreen} options={{headerShown:false}}/>
    <Stack.Screen name="PayCertificate" component={CertificatePaySCreen} options={{headerShown:false}}/>
    <Stack.Screen name="selectLecture" component={SelectCourseScreen} options={{headerShown:false}}/>
    <Stack.Screen name="LecReact" component={ReactNativeLectureScreen} options={{headerShown:false}}/>
    <Stack.Screen name="LecPython" component={PythonLectureScreen} options={{headerShown:false}}/>
    <Stack.Screen name="LecJava" component={JavaLectureSceen} options={{headerShown:false}}/>
    <Stack.Screen name="LecJavaScript" component={JavaScriptLectureScreen} options={{headerShown:false}}/>
   <Stack.Screen name="pay" component={Payment} options={{headerShown:false}}/>
     <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
    <Stack.Screen name="java" component={JavaScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Python" component={PythonScreen}  options={{headerShown:false}}/>
    <Stack.Screen name="react" component={ReactScreen} options={{headerShown:false}}/>
    <Stack.Screen name="FrontPage" component={FrontPage} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Create" component={SignupScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="firebase" component={FirebaseScreen}  options={{headerShown:false}}/>
      
    </Stack.Navigator>
  </NavigationContainer>
</ImageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
{/*       
      <ScrollView>
        <Text style={{fontSize:40}}>Afghani</Text>
         <Text style={{fontSize:40}}>Pakistan</Text>
          <Text style={{fontSize:40}}>India</Text>
           <Text style={{fontSize:40}}>New zeland</Text>
           <Text style={{fontSize:40}}>Afghani</Text>
         <Text style={{fontSize:40}}>Pakistan</Text>
          <Text style={{fontSize:40}}>India</Text>
           <Text style={{fontSize:40}}>New zeland</Text>
           <Text style={{fontSize:40}}>Afghani</Text>
         <Text style={{fontSize:40}}>Pakistan</Text>
          <Text style={{fontSize:40}}>India</Text>
           <Text style={{fontSize:40}}>New zeland</Text><Text style={{fontSize:40}}>Afghani</Text>
         <Text style={{fontSize:40}}>Pakistan</Text>
          <Text style={{fontSize:40}}>India</Text>
           <Text style={{fontSize:40}}>New zeland</Text>
           </ScrollView> */}
