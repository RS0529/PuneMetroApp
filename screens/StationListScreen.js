
import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
const StationListScreen = () => {
  const data = [
    'PCMC',
    'Sant Tukaram Nagar',
    'Bhosari',
    'Kasarwadi',
    'Phugewadi',
    'Dapodi',
    'Bopodi',
    'Khadki',
    'Range Hills',
    'Shivaji Nagar',
    'Civil Court',
  ];

  const renderItem = ({ item, index }) => (
    <View style={[styles.item, index % 2 === 0 ? styles.evenItem : styles.oddItem]}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  listContainer: {
    paddingVertical: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  evenItem: {
    backgroundColor: '#e6f7ff', // Light blue background for even items
  },
  oddItem: {
    backgroundColor: '#fff', // White background for odd items
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default StationListScreen;
