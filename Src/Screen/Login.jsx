import { Button, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Home from './Home'
import Signup from './Signup'




const Login = ({setShowModal, navigation}) => {
    
    
    return (
        <View>
            <View style={styles.main}>
                <View style={styles.box1}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold' }}> Login</Text>
                </View>
                <View style={styles.box2}>
                    <View style={styles.smallBox}>
                        <Text style = {{fontSize : 40, marginLeft :30, marginTop : 20}}>Welcome Back </Text>
                        <Text style = {{fontWeight : '300'}}>Login to your Account </Text>
                        <TextInput placeholder='    E-mail' style={styles.inputstyle} />
                        <TextInput placeholder='   Password ' style={styles.inputstyle} />
                        <TouchableOpacity style={styles.ButtonWrapper} 
                         onPress={() => {
                            setShowModal(false);
                            navigation.navigate('Home')
                            setTimeout (() => navigation.navigate('Home'), 1000)
                         }}
                         >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <Text>Don't Have an account ?</Text>
                        <Button title='Signup'  onPress={() => navigation.navigate('Signup') }></Button>
                        <Button title='close' onPress={() => setShowModal(false)} ></Button>
                       

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#CADCFC',


        alignItems: 'center',
        height: '100%'
    },
    box1: {
        marginTop: 90,
        marginBottom: 20

    },
    box2: {
        width: '100%',
        height: '60%',
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
        marginTop: 30
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
        marginBottom :50
        
    
    },
    buttonText :{
        fontSize : 25,
        color : '#fff'
 
    },
})