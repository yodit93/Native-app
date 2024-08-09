import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/header";

export default function Index() {
  const [todos, setTodos] = useState([
    {text: 'Wash clothes', key: '1'},
    {text: 'clean house', key: '2'},
    {text: 'wash dishes', key: '3'},
    {text: 'cook', key: '4'}
  ])
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Text>{item.text}</Text>
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
