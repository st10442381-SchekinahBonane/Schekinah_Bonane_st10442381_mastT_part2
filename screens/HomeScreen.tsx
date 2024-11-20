import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [menuItems, setMenuItems] = useState<Array<{ dishName: string, description: string, course: string, price: number }>>([]);

  useEffect(() => {
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem!]);
    }
  }, [route.params?.newItem]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel’s Menu</Text>

      {/* Total number of menu items */}
      <Text style={styles.menuCount}>Total Menu Items: {menuItems.length}</Text>

      {/* Display the menu list */}
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            {item && (
              <Text style={styles.itemText}>
                {item.dishName} - {item.course} - ${item.price.toFixed(2)}
              </Text>
            )}
          </View>
        )}
      />

      {/* Button to navigate to Add Dish screen */}
      <View style={styles.buttonContainer}>
        <Button
          title="Add New Dish"
          onPress={() => navigation.navigate('AddMenu')}
          color="#2980b9"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7', // Subtle background color for better UI
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: 20,
  },
  menuCount: {
    fontSize: 18,
    color: '#7f8c8d',
    marginVertical: 10,
    textAlign: 'center',
  },
  menuItem: {
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    color: '#34495e',
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
});

