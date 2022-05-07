import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItems = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <MaterialIcons name="delete" size={24} color="#333" onPress={() => pressHandler(item.key)} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
})
export default TodoItems;