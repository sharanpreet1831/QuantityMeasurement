import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import Login from './Login'
import Home from './Home'
import Signup from './Signup'




const Loginpage = (props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={styles.imagestyle} source={require('../assest/main2.jpg')} >

        <Text style={[styles.textStyle, {}]}> Welcome </Text>
        <Text style={[styles.textStyle, { marginBottom: 40 }]}> Login / Signup</Text>
        <Modal
          transparent={true}
          visible={showModal}
          animationType='slide'
         
        >
           <Login  setShowModal={setShowModal} navigation={props.navigation} />
           
        </Modal>
        <TouchableOpacity style={styles.ButtonWrapper} onPress={() => setShowModal(true)} >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ButtonWrapper, { marginTop: 40 }]} 
        onPress={() => props.navigation.navigate('Signup')}  
        >
          <Text style={styles.buttonText} >
            Sign up
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Loginpage

const styles = StyleSheet.create({
  imagestyle: {
    width: '100%',
    height: '100%',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  ButtonWrapper: {


    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 25,
    shadowColor: '#ccc',
    backgroundColor: 'skyblue'


  },
  buttonText: {
    fontSize: 25,



  },
  textStyle: {
    fontSize: 35,

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
ButtonWrapper2 : {
        
        
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
buttonText2 :{
  fontSize : 25,
  color : '#fff'

},

})