import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [menuItems, setMenuItems] = useState<Array<{ dishName: string, description: string, course: string, price: number }>>([]);

  useEffect(() => {
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem!]); // Add the non-null assertion (!)
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
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuCount: {
    fontSize: 18,
    marginVertical: 10,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 20,
  },
}); 
