import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RootStackScreenProps } from './types';
 
// Sample menu items for demonstration
const menuItems = [
  { dishName: 'Spaghetti', course: 'Main', price: 12.99 },
  { dishName: 'Salad', course: 'Starter', price: 6.99 },
  { dishName: 'Brownie', course: 'Dessert', price: 4.99 },
  { dishName: 'Steak', course: 'Main', price: 19.99 },
];

// Calculate average price by course
const calculateAveragePrices = (items: typeof menuItems) => {
  const courseGroups: { [key: string]: number[] } = {};

  items.forEach((item) => {
    if (!courseGroups[item.course]) {
      courseGroups[item.course] = [];
    }
    courseGroups[item.course].push(item.price);
  });

  const averages = Object.entries(courseGroups).map(([course, prices]) => {
    const average = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    return { course, average: average.toFixed(2) };
  });

  return averages;
};

export default function HomeScreen() {
  const averagePrices = calculateAveragePrices(menuItems);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Average Prices by Course:</Text>
      <FlatList
        data={averagePrices}
        keyExtractor={(item) => item.course}
        renderItem={({ item }) => (
          <Text style={styles.text}>
            {item.course}: ${item.average}
          </Text>
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
