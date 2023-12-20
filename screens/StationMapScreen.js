import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const StationMapScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/metro-map.jpeg')} // Replace with the path to your map image
                style={styles.mapImage}
                resizeMode="contain" // Adjust the resizeMode as needed
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
});

export default StationMapScreen;
