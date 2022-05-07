import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';


export default function App() {
  // const [name, setName] = useState('Shibu');
  // const [age, setAge] = useState('23');
  const [person, setPerson] = useState([
    { name: "Shanu", key: '1' },
    { name: "Yoshi", key: '2' },
    { name: "Mario", key: '3' },
    { name: "Luigi", key: '4' },
    { name: "Peach", key: '5' },
    { name: "Toad", key: '6' },
    { name: "Bowser", key: '7' },
    { name: "Jay KR.", key: '8' },
    { name: "PK Patil", key: '9' },
  ])

  // const clickHandler = () =>{
  //   setName('SK Mishra');
  //   setPerson({name: 'Devesh', age: '40'});
  // }

  return (
    <View style={styles.container}>

      {/* <Text style={styles.boldText}>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View> */}

      {/* <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder="e.g. 99"
        onChangeText={(val) => setAge(val)}
      />
      <Text>name: {name}, Age: {age}</Text> */}
      <ScrollView>
        {person.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // buttonContainer: {
  //   marginTop: 20
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 300,
  // }
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    textAlign: "center",
    fontSize: 24,

  }
});
