import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const Signup = () => {
  return (
    <View>
            <View style={styles.main}>
                <View style={styles.box1}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold' }}> Register</Text>
                </View>
                <View style={styles.box2}>
                    <View style={styles.smallBox}>
     
                        <Text style = {{fontWeight : '500' , marginTop : 30 }}> Create a new account  </Text>
                        <TextInput placeholder='  First Name' style={styles.inputstyle} />
                        <TextInput placeholder='   Last Name ' style={styles.inputstyle} />
                        <TextInput placeholder='   Contact Number ' style={styles.inputstyle} />
                        <TextInput placeholder='   E-mail ' style={styles.inputstyle} />
                        <TextInput placeholder='   Password ' style={styles.inputstyle} />
                        <TextInput placeholder='   Confirm Password ' style={styles.inputstyle} />
                        <TouchableOpacity style={styles.ButtonWrapper} >
                            <Text style={styles.buttonText}>Signup</Text>
                        </TouchableOpacity>
                        <Text>Already Have an account ?</Text>
                        <Button title='Login' ></Button>

                    </View>
                </View>
            </View>
        </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#CADCFC',


        alignItems: 'center',
        height: '100%'
    },
    box1: {
        marginTop: 60,
        marginBottom: 20

    },
    box2: {
        width: '100%',
        height: '75%',
        alignItems: 'center'
    },
    smallBox: {


        width: "80%",
        height: '100%',
        marginTop: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,

        shadowColor: 'grey',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.9,
        alignItems: 'center'
    },
    inputstyle: {
        backgroundColor: '#F0F0F0',
        width: 300,
        height: 50,
        borderRadius: 25,
        marginTop: 20
    },
    ButtonWrapper : {
        
        
        width : 170,
        alignItems : 'center',
        justifyContent : 'center',
        height : 40,
        borderRadius : 25,
        shadowColor : '#ccc',
        backgroundColor :'#00246B',
        marginTop : 50,
        marginBottom :40
        
    
    },
    buttonText :{
        fontSize : 25,
        color : '#fff'
 
    },
})