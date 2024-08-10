import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


const Todoitem = ({item, pressHandler}) => {
    return (
        <View style={styles.item}>
             <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <AntDesign name="delete" size={24} color="black" />  
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        marginHorizontal: 10,
        borderColor: 'bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})

export default Todoitem;