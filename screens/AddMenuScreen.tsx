import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { RootStackScreenProps } from './types';

export default function AddMenuScreen({ navigation }: RootStackScreenProps<'AddMenu'>) {
  const [dishName, setDishName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const handleAddItem = () => {
    if (!dishName || !price || !course) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    if (isNaN(parseFloat(price))) {
      Alert.alert('Error', 'Price must be a valid number!');
      return;
    }

    Alert.alert('Success', `Added ${dishName} to the menu!`);
    setDishName('');
    setPrice('');
    setCourse('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Course (e.g., Starter, Main, Dessert)"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
