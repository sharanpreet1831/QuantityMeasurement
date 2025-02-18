import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Length = () => {
    const [unitFrom, setUnitFrom] = useState('m')
    const [unitTo, setUnitTo] = useState('m')
    const [inputValue, setInputValue] = useState('')
    const [convertedValue, setConvertedValue] = useState(0)
    
    useEffect(() => {
        convertedWeight();
    }, [unitFrom, unitTo, inputValue]); // Runs whenever inputValue, unitFrom, or unitTo changes

    const convertedWeight = () => {
       
        let value = parseFloat(inputValue);
        if (isNaN(value)){
            
            return
        };


        let ValueInCentimeter = value;
        switch (unitFrom) {
            case 'Cm': ValueInCentimeter = value ; break;
            case 'm': ValueInCentimeter = value *100 ; break;
            case 'Km': ValueInCentimeter = value *  100000; break;
            default: return;
        }
        let finalValue;
        switch (unitTo) {
            case 'Cm': finalValue = ValueInCentimeter ; break;
            case 'm': finalValue = ValueInCentimeter / 100; break;
            case 'Km': finalValue = ValueInCentimeter / 100000; break;
            default: return;
        }
        setConvertedValue(finalValue);
        

    }
    const resetButton =() =>{
        setUnitFrom('m')
        setUnitTo('m')
        setInputValue()
        setConvertedValue(0)
    }

   

    return (
        <View>
            <View style={styles.mainContainer}>
                <Text style={styles.textStyle}>Weight</Text>
                <View style={styles.PickerWraper}>
                    <View style={styles.Box1}>
                        <Text style={styles.subText} >From </Text>
                        <Picker
                            selectedValue={unitFrom}
                            style={styles.PickerStyle}
                            onValueChange={(item) => setUnitFrom(item)}
                        >
                            <Picker.Item label='Centimeter' value='Cm' />
                            <Picker.Item label='Meter' value='m' />
                            <Picker.Item label='Killometer' value='Km' />
                        </Picker>
                    </View>
                    <View style={styles.Box2}>
                        <Text style={styles.subText}>To</Text>
                        <Picker
                            selectedValue={unitTo}
                            style={styles.PickerStyle}
                            onValueChange={(item) => setUnitTo(item)}
                        >
                            <Picker.Item label='Centimeter' value='Cm' />
                            <Picker.Item label='Meter' value='m' />
                            <Picker.Item label='Killometer' value='Km' />
                        </Picker>
                    </View>
                </View>
                <View>
                    <TextInput
                        placeholder='Enter Value '
                        style={styles.inputField}
                        keyboardType='numeric'
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.Buttonwraper} onPress={convertedWeight} >
                        <Text style={styles.ButtonText} >Convert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttonwraper} onPress={resetButton}  >
                        <Text style={styles.ButtonText} >Reset</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.inputField, { justifyContent: 'center', alignItems: 'center' }]} >
                    <Text > Result : {convertedValue}   </Text>
                </View>

            </View>
        </View>
    );
};

export default Length;

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
        marginTop: 30,
        paddingLeft : 30
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
        color: '#fff',
        

    }

});