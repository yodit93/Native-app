import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const AddTodo = ({updateTodo}) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        updateTodo(text);
        setText('');
    };
    return (
        <View>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder='new todo...'
            />
            <Button title={"Add Todo"} color='coral' onPress={handleSubmit}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
});

export default AddTodo;

