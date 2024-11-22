import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet, Alert } from 'react-native';
import { RootStackScreenProps } from './types';

const initialMenuItems = [
  { id: '1', dishName: 'Spaghetti', course: 'Main', price: 12.99 },
  { id: '2', dishName: 'Salad', course: 'Starter', price: 6.99 },
  { id: '3', dishName: 'Brownie', course: 'Dessert', price: 4.99 },
];

export default function EditMenuScreen({ navigation }: RootStackScreenProps<'EditMenu'>) {
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const handleRemoveItem = (id: string) => {
    const updatedMenu = menuItems.filter((item) => item.id !== id);
    setMenuItems(updatedMenu);
    Alert.alert('Success', 'Item removed from the menu!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>
              {item.dishName} - ${item.price.toFixed(2)} ({item.course})
            </Text>
            <Button
              title="Remove"
              onPress={() => handleRemoveItem(item.id)}
              color="red"
            />
          </View>
        )}
      />
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('AddMenu')}
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});
