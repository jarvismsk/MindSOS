import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

const SingleDoctor = () => {
  const route = useRoute();
  const { doctor } = route.params;
  const clicked = () => {
    console.log("Clicked")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.qualifications}>{doctor.qualifications}</Text>
      <Text style={styles.description}>{doctor.description}</Text>
      <Image source={doctor.photo} style={styles.photo} />
      <Button onPress={clicked} title="Book Now"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  qualifications: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default SingleDoctor;
