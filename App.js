import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Test from './components/Test';
import Todo from './components/Todo';


export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      {/* <Test /> */}
      <Todo />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
