import { SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'

const Weight = () => {
    const [unitFrom, setUnitFrom] = useState('Kg')
    const [unitTo, setUnitTo] = useState('Kg')
    const [inputValue, setInputValue] = useState('')
    const [convertedValue, setConvertedValue] = useState()
    
    useEffect(() => {
        convertedWeight();
    }, [unitFrom, unitTo, inputValue]); // Runs whenever inputValue, unitFrom, or unitTo changes

    const convertedWeight = () => {
       
        let value = parseFloat(inputValue);
        if (isNaN(value)) return;


        let ValueInGrams = value;
        switch (unitFrom) {
            case 'Kg': ValueInGrams = value * 1000; break;
            case 'g': ValueInGrams = value; break;
            case 'Mg': ValueInGrams = value / 1000; break;
            default: return;
        }
        let finalValue;
        switch (unitTo) {
            case 'Kg': finalValue = ValueInGrams / 1000; break;
            case 'g': finalValue = ValueInGrams; break;
            case 'Mg': finalValue = ValueInGrams * 1000; break;
            default: return;
        }
        setConvertedValue(finalValue);
        

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
                            <Picker.Item label='killogram' value='Kg' />
                            <Picker.Item label='gram' value='g' />
                            <Picker.Item label='Milligram' value='Mg' />
                        </Picker>
                    </View>
                    <View style={styles.Box2}>
                        <Text style={styles.subText}>To</Text>
                        <Picker
                            selectedValue={unitTo}
                            style={styles.PickerStyle}
                            onValueChange={(item) => setUnitTo(item)}
                        >
                            <Picker.Item label='killogram' value='Kg' />
                            <Picker.Item label='gram' value='g' />
                            <Picker.Item label='Milligram' value='Mg' />
                        </Picker>
                    
                    </View>
                </View>
                <View>
                    <TextInput
                        placeholder='     Enter Value '
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
                    <TouchableOpacity style={styles.Buttonwraper}  >
                        <Text style={styles.ButtonText} >Reset</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.inputField, { justifyContent: 'center', alignItems: 'center' }]} >
                    <Text > Result : {convertedValue}   </Text>
                </View>

            </View>
        </View>
    )
}

export default Weight

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