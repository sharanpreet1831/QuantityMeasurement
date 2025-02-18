import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'

const Temperature = () => {
    const [unitFrom, setUnitFrom] = useState('C')
    const [unitTo, setUnitTo] = useState('C')
    const [inputvalue , setInputValue ] = useState()
    const [convertedValue , setConvertedValue] = useState()

    useEffect ( () =>{
        TempConverstion()
    } , [unitFrom , unitTo , inputvalue])

    const TempConverstion = () =>{
        
        let value = parseFloat(inputvalue);
        if (isNaN(value) ){
            console.warn('Value is not corrected')
            return;
        }

        let ValueInFahrenheit ;
        switch (unitFrom) {
            case 'C' : ValueInFahrenheit = ((value *9/5) +32); break ; 
            case 'F' : ValueInFahrenheit = value ; break ;
            case 'K' : ValueInFahrenheit =(value-273.15) * 9/5 +32 ; break ;
            default :return;
        }

        let finalValue ;

        switch (unitTo) {
            case 'C': finalValue = ((ValueInFahrenheit - 32 ) * 5/9) ; break  ;
            case 'F' : finalValue =  ValueInFahrenheit ; break ;
            case 'K' : finalValue =  ((ValueInFahrenheit - 32 ) * 5/9) + 273.15 ; break ;
            
            default : return ;
        }
        setConvertedValue (finalValue)

        
    }
    const ResetValues = () =>{
        setInputValue()
        setConvertedValue()
    }

    return (
        <View>
            <View style={styles.mainContainer}>
                <Text style={styles.textStyle}>Temperature</Text>
                <View style={styles.PickerWraper}>
                    <View style={styles.Box1}>
                        <Text style={styles.subText} >From </Text>
                        <Picker
                            selectedValue={unitFrom}
                            style={styles.PickerStyle}
                            onValueChange={(item) => setUnitFrom(item)}
                        >
                            <Picker.Item label='Celsius ' value='C' />
                            <Picker.Item label='Fahrenheit' value='F' />
                            <Picker.Item label='Kelvin' value='K' />
                        </Picker>
                    </View>
                    <View style={styles.Box2}>
                        <Text style={styles.subText}>To</Text>
                        <Picker
                            selectedValue={unitTo}
                            style={styles.PickerStyle}
                            onValueChange={(item) => setUnitTo(item)}
                        >
                            <Picker.Item label='Celsius ' value='C' />
                            <Picker.Item label='Fahrenheit' value='F' />
                            <Picker.Item label='Kelvin' value='K' />
                        </Picker>
                    </View>
                </View>
                <View>
                    <TextInput placeholder='      Enter Value ' 
                    style={styles.inputField} 
                    keyboardType='numeric'
                    value={inputvalue}
                    onChangeText={(item) => setInputValue(item)}
                    
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.Buttonwraper}  onPress={TempConverstion} >
                        <Text style={styles.ButtonText} >Convert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttonwraper}  onPress={ResetValues} >
                        <Text style={styles.ButtonText} >Reset</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.inputField, { justifyContent: 'center', alignItems: 'center' }]} >
                    <Text > Result : {convertedValue} </Text>
                </View>

            </View>
        </View>
    )
}

export default Temperature

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        backgroundColor : '#CADCFC',
        height:'100%'

    },
    textStyle: {
        marginTop: 75,
        fontSize: 30
    },
    PickerWraper: {
        flexDirection: 'row',
        marginTop: 20
    },
    Box1: {
        flex: 1,

    },
    Box2: {
        flex: 1,

    },
    subText: {
        marginLeft: '40%',
        fontSize: 20,

    },
    PickerStyle: {


    },
    inputField: {

        backgroundColor: '#F0F0F0',
        width: 300,
        height: 50,
        borderRadius: 25,
        marginTop: 30
    },
    Buttonwraper: {
        width: 200,
        height: 40,
        
       
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 20,
        backgroundColor :'#00246B',
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'

    }
})