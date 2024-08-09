import {StyleSheet, View, Text} from 'react-native';


const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My Todos</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Header;