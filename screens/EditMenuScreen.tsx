import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, MenuItem } from '../types';

type EditMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'EditMenu'>;

const EditMenuScreen: React.FC<EditMenuScreenProps> = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      dishName: 'Pasta',
      description: 'Delicious spaghetti with marinara sauce',
      course: 'Main',
      price: 12.99,
    },
    {
      id: '2',
      dishName: 'Salad',
      description: 'Fresh garden salad with vinaigrette',
      course: 'Starter',
      price: 5.99,
    },
  ]);

  const handleDeleteItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
    Alert.alert('Item Deleted', 'The menu item has been successfully removed.');
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Text style={styles.dishName}>{item.dishName}</Text>
      <Text>{item.description}</Text>
      <Text>Course: {item.course}</Text>
      <Text>Price: ${item.price.toFixed(2)}</Text>
      <Button title="Delete" onPress={() => handleDeleteItem(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default EditMenuScreen;
