import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Text, Alert } from 'react-native';
import AddTodo from './AddTodo';
import TodoItems from './TodoItems';

const Todo = () => {
    const [todo, setTodo] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' },
    ]);

    const pressHandler = (key) => {
        setTodo((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
        })
    };

    const submitHandler = (text) => {
        if(text.length > 3){
            setTodo((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos
                ]
            })
        }else{
            Alert.alert('OOPS!', 'Todos must be overs 3 chars long', [
                {text: 'Understood', onPress: () => console.log('alert CLosed')}
            ]);
        }
    };

    return (
        <View style={styles.content}>
            {/* to form */}
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
                <FlatList
                    data={todo}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <TodoItems item={item} pressHandler={pressHandler} />
                    )}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        padding: 40,

    },
    list: {
        marginTop: 20,
    }
})
export default Todo;