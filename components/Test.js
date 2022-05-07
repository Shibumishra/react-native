import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';


const Test = () => {
  // const [name, setName] = useState('Shibu');
  // const [age, setAge] = useState('23');
  const [person, setPerson] = useState([
    { name: "Shanu", id: '1' },
    { name: "Yoshi", id: '2' },
    { name: "Mario", id: '3' },
    { name: "Luigi", id: '4' },
    { name: "Peach", id: '5' },
    { name: "Toad", id: '6' },
    { name: "Bowser", id: '7' },
    { name: "Jay KR.", id: '8' },
    { name: "PK Patil", id: '9' },
  ])

  // const clickHandler = () =>{
  //   setName('SK Mishra');
  //   setPerson({name: 'Devesh', age: '40'});
  // }

  const pressHandler = (id) => {
    console.log(id);
    setPerson((prevPerson) => {
      return prevPerson.filter(person => person.id != id);
    })
  }

  return (
    <View>

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
        idboardType='numeric'
        style={styles.input}
        placeholder="e.g. 99"
        onChangeText={(val) => setAge(val)}
      />
      <Text>name: {name}, Age: {age}</Text> */}
      {/* <ScrollView>
        {person.map(item => (
          <View id={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={person}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}


const styles = StyleSheet.create({
 
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
    marginHorizontal: 10,
    marginTop: 24,
  }
});


export default Test;