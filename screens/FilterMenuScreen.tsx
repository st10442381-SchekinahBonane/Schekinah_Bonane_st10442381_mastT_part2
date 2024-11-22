import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { RootStackScreenProps } from './types';

const sampleMenuItems = [
  { dishName: 'Spaghetti', course: 'Main', price: 12.99 },
  { dishName: 'Salad', course: 'Starter', price: 6.99 },
  { dishName: 'Brownie', course: 'Dessert', price: 4.99 },
];

export default function FilterMenuScreen({ route }: RootStackScreenProps<'FilterMenu'>) {
  const [filter, setFilter] = useState('');
  const { menuItems = sampleMenuItems } = route.params || {};

  const filteredItems = menuItems.filter((item) =>
    item.course.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter course to filter (e.g., Main)"
        value={filter}
        onChangeText={setFilter}
        style={styles.input}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.dishName}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            {item.dishName} - ${item.price.toFixed(2)}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
