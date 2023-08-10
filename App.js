import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import LoginScreen from './Component/Screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './Component/Screen/SignupScreen';
import HomeScreen from './Component/Screen/HomeScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

  
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Create" component={SignupScreen}  options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>

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
