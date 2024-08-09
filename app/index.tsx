import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/header";
import Todoitem from "../components/todoItem";

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
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
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
    padding: 40,
    backgroundColor: '#ccc',
  },
  list: {
    marginTop: 20,
    backgroundColor: '#ddd',
  }
});
