/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text } from 'react-native'
import React from 'react'
import Weight from './Src/Screen/Weight '
import Temperature from './Src/Screen/Temperature'
import Signup from './Src/Screen/Signup'
import Loginpage from './Src/Screen/Loginpage'
import Login from './Src/Screen/Login'
import Length from './Src/Screen/Length'
import Home from './Src/Screen/Home'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator() 
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Loginpage' screenOptions={{headerShown :false}}  >
        <Stack.Screen name='Loginpage' component={Loginpage} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Length' component={Length} />
        <Stack.Screen name='Weight' component={Weight} />
        <Stack.Screen name='Temperature' component={Temperature} />
       
      </Stack.Navigator>
    </NavigationContainer>

    // <>
    //   < Loginpage />
    // </>
  )
}

export default App