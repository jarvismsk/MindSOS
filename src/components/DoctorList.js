import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import SingleDoctor from '../screens/SingleDoctor/SingleDoctor';
import doctors from '../components/DoctorsData';
import { useNavigation } from '@react-navigation/native';



const DoctorList = () => {
  const navigation = useNavigation();

  const handleDoctorPress = (doctor) => {
    navigation.navigate('SingleDoctor', { doctor });
  };

  return (
    <View style={styles.container}>
      {doctors.map((doctor) => (
        <TouchableOpacity key={doctor.id} style={styles.card} onPress={() => handleDoctorPress(doctor)}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.qualifications}>{doctor.qualifications}</Text>
          <Text style={styles.description}>{doctor.description}</Text>
          <Image source={doctor.photo} style={styles.photo} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderColor: 'black',
    borderWidth: 3,
  },
  card: {
    marginBottom: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 3,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qualifications: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default DoctorList;
