// screens/HomeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [menuItems, setMenuItems] = useState<{ dishName: string; description: string; course: string; price: number }[]>([]);
  
  // Calculate average price
  const averagePrice = menuItems.length > 0 
    ? menuItems.reduce((sum, item) => sum + item.price, 0) / menuItems.length 
    : 0;

  // Handle removal of a menu item
  const removeItem = (index: number) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => setMenuItems(menuItems.filter((_, i) => i !== index)) }
      ]
    );
  };

  // Check if newItem exists in route.params and add it to the menu
  useEffect(() => {
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem as { dishName: string; description: string; course: string; price: number }]);
    }
  }, [route.params?.newItem]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>
      <Button title="Add Menu" onPress={() => navigation.navigate('AddMenu')} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('FilterMenu', { menuItems })} />
      
      <Text style={styles.totalItems}>Total Items: {menuItems.length}</Text>
      <Text style={styles.averagePrice}>Average Price: ${averagePrice.toFixed(2)}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName} - {item.course}</Text>
            <Text>{item.description}</Text>
            <Text>${item.price.toFixed(2)}</Text>
            <Button title="Remove" color="red" onPress={() => removeItem(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  totalItems: {
    fontSize: 18,
    marginTop: 10,
  },
  averagePrice: {
    fontSize: 18,
    marginBottom: 20,
  },
  menuItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: '100%',
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
