import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default function mindbot(){
    return(
        <View style={styles.bot}>
            <Text>Bot Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bot: {
        backgroundColor: 'blue',
    }

})
