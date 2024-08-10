import { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "../components/header";
import Todoitem from "../components/todoItem";
import AddTodo from "../components/addTodo";

export default function Index() {
  const [todos, setTodos] = useState([
    {text: 'Wash clothes', key: '1'},
    {text: 'clean house', key: '2'},
    {text: 'wash dishes', key: '3'},
    {text: 'cook', key: '4'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  };

  const updateTodo = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      });
    } else {
        Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
          {text: 'Understood', onPress: () => console.log('alert closed')}
        ]);
    } 
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo  updateTodo={updateTodo}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Todoitem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
    backgroundColor: '#ccc',
  },
  list: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ddd',
  }
});
