import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'FilterMenu'>;

const sampleMenuItems = [
  { dishName: 'Salad', description: 'Fresh salad', course: 'Starters', price: 5.99 },
  { dishName: 'Steak', description: 'Grilled steak', course: 'Mains', price: 19.99 },
  { dishName: 'Cake', description: 'Chocolate cake', course: 'Desserts', price: 7.99 },
  { dishName: 'Soup', description: 'Tomato soup', course: 'Starters', price: 4.99 },
];

const courses = ['All', 'Starters', 'Mains', 'Desserts'];

export default function FilterMenuScreen({ navigation }: FilterMenuScreenProps) {
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [price, setPrice] = useState('');
  const [filteredMenu, setFilteredMenu] = useState(sampleMenuItems);

  const handleFilter = () => {
    let filtered = sampleMenuItems;

    if (selectedCourse !== 'All') {
      filtered = filtered.filter(item => item.course === selectedCourse);
    }

    if (price) {
      const priceValue = parseFloat(price);
      filtered = filtered.filter(item => item.price <= priceValue);
    }

    setFilteredMenu(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>

      <Text style={styles.label}>Select Course:</Text>
      <Picker selectedValue={selectedCourse} onValueChange={setSelectedCourse} style={styles.picker}>
        {courses.map(course => (
          <Picker.Item key={course} label={course} value={course} />
        ))}
      </Picker>

      <Text style={styles.label}>Enter Maximum Price:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        placeholder="e.g. 10.00"
        keyboardType="numeric"
      />

      <Button title="Apply Filter" onPress={handleFilter} />

      <FlatList
        data={filteredMenu}
        keyExtractor={item => item.dishName}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noResult}>No items found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
  picker: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  noResult: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: 'gray',
  },
});
