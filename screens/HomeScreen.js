
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

// const HomeScreen = ({ navigation }) => {
//     const navigation = useNavigation();

//     const data = [
//         { id: '1', title: 'Fare Enquiry', icon: 'money' },
//         { id: '2', title: 'Station Map', icon: 'map' },
//         { id: '3', title: 'Station List', icon: 'list' },
//     ];

//     const renderItem = ({ item }) => (
//         <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate(item.title.replace(/\s+/g, ''))}
//             activeOpacity={0.7}
//         >
//             <Icon name={item.icon} size={24} color="#333" style={styles.icon} />
//             <Text style={styles.cardText}>{item.title}</Text>
//         </TouchableOpacity>
//     );

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Welcome to Pune Metro</Text>
//             <FlatList
//                 data={data}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 16,
//         backgroundColor: '#F5F5F5', 
//     },

//     header: {
//         marginTop: 50,
//         fontSize: 30,
//         marginBottom: 16,
//         fontWeight: 'bold', 
//         color: '#333', // Set your desired text color
//     },
//     card: {
//         backgroundColor: '#ffffff',
//         borderRadius: 10,
//         padding: 20,
//         marginVertical: 10,
//         elevation: 5,
//         shadowColor: '#333',
//         shadowOffset: { width: 2, height: 2 },
//         shadowOpacity: 0.5,
//         shadowRadius: 3,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         marginRight: 16,
//         fontSize: 28,
//         color: '#3498db', // Set your desired icon color
//     },
//     cardText: {
//         fontSize: 18,
//     },
// });

// export default HomeScreen;




import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const data = [
        { id: '1', title: 'Fare Enquiry', icon: 'money' },
        { id: '2', title: 'Station Map', icon: 'map' },
        { id: '3', title: 'Station List', icon: 'list' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(item.title.replace(/\s+/g, ''))}
            activeOpacity={0.7}
        >
            <Icon name={item.icon} size={24} color="#333" style={styles.icon} />
            <Text style={styles.cardText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to Pune Metro</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F5F5F5',
    },

    header: {
        marginTop: 50,
        fontSize: 30,
        marginBottom: 16,
        fontWeight: 'bold',
        color: '#333', // Set your desired text color
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        elevation: 5,
        shadowColor: '#333',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 16,
        fontSize: 28,
        color: '#3498db', // Set your desired icon color
    },
    cardText: {
        fontSize: 18,
    },
});

export default HomeScreen;

