import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function homenav() {
  const navigation = useNavigation();

  const handlePressBot = () => {
    navigation.navigate('Bot');
  };

  const handlePressDoctor = () => {
    navigation.navigate('ListDoctor');
  };

  const handlePressComm = () => {
    console.log("Community Support");
  };

  const handlePressReso = () => {
    console.log("Resources");
  };

  return (
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
  touchable: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});
