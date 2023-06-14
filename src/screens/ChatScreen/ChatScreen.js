import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native';

const Bot2 = () => {
    const [text, onChangeText] = React.useState('');


return (
    <SafeAreaView>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder='Type-your message'
        value={text}/>
    <button>Submit</button>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 650,
      borderWidth: 1,
      padding: 10,
      alignContent: "space-around"
    },
  });

export default Bot2;