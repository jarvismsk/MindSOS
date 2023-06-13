import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';


export default function dj(){
    const handlePressBot = () =>{
        console.log("MindSOS BOT")
    }
    const handlePressDoctor =() =>{
        console.log("Certified Doctor")
    }

    const handlePressComm =() =>{
        console.log("Community Support")
    }
    const handlePressReso =() =>{
        console.log("Resources")
    }

return(
    <View>
        <TouchableOpacity style={styles.touchable} onPress={handlePressBot}>
            <Text style={styles.text}>MindSOS BOT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={handlePressDoctor}>
            <Text style={styles.text}>Certified Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={handlePressComm}>
            <Text style={styles.text}>Community Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={handlePressReso}>
            <Text style={styles.text}>Resources</Text>
        </TouchableOpacity>

        </View>
    );
}



const styles = StyleSheet.create({
    touchable:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
    },
    text:{
        fontSize:16,
    },
});