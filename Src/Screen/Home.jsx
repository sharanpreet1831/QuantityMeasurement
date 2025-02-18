import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Length from './Length'
import Temperature from './Temperature'
import Weight from './Weight '




const Home = (props) => {
  return (
    <View>
      <View style = {styles.main}>
        <TouchableOpacity style = {styles.buttonWrapper } onPress={() => props.navigation.navigate('Length')}>
            <Text style = {styles.buttonText} >Length</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonWrapper} onPress={ () => props.navigation.navigate('Temperature')}>
            <Text style = {styles.buttonText} >Temperature</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonWrapper} onPress={() => props.navigation.navigate('Weight')}>
            <Text style = {styles.buttonText} >Weight</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    main : {
        backgroundColor : '#CADCFC',
     
        height : '100%',
        width : '100%',
        justifyContent :'center',
       alignItems : 'center'
    },
    buttonWrapper :{
        borderWidth : 2,
        width: 250,
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 20,
        backgroundColor : '#00246B',
        margin : 20,
        shadowColor :'grey',
        shadowOffset : {height : 10},
        shadowOpacity : 0.9

    },
    buttonText :{
        fontSize : 25,
        color : 'white'
    }
})