
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, ScrollView, PanResponder } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import metroGraph from '../utils/MetroData';

const MetroFareCalculator = ({ navigation }) => {
    const [startStation, setStartStation] = useState('');
    const [endStation, setEndStation] = useState('');
    const [journeyType, setJourneyType] = useState('oneWay');
    const [fare, setFare] = useState('');
    const [time, setTime] = useState('');
    const [distance, setDistance] = useState('');
    const [stationOptions, setStationOptions] = useState([]);
    const stationPickerRef = useRef(null);

    useEffect(() => {
        populateDropdownOptions();
    }, []);

    const populateDropdownOptions = () => {
        const stationNames = ['PCMC',
            'Sant Tukaram Nagar',
            'Bhosari',
            'kasarwadi',
            'Phugewadi',
            'Dapodi',
            'Bopodi',
            'Khadki',
            'Range Hills',
            'Shivaji nagar',
            'Civil court'];

        setStartStation(stationNames[0]);
        setEndStation(stationNames[1]);

        setStationOptions(
            stationNames.map((station, index) => ({
                label: station,
                value: station,
                key: `${station}-${index}`,
            }))
        );
    };

    // const calculateFare = () => {
    //     const result = metroGraph.dijkstra(startStation, endStation, journeyType);

    //     const calculatedFare = journeyType === 'return' ? result.fare * 2 : result.fare;

    //     setFare(`Fare from ${startStation} to ${endStation} (${journeyType}): Rs. ${calculatedFare}`);
    //     setTime(`Time: ${result.time.toFixed(2)} minutes`);
    //     setDistance(`Distance: ${result.distance.toFixed(2)} Km`);
    // };

    const calculateFare = () => {
        const result = metroGraph.dijkstra(startStation, endStation, journeyType);

        const calculatedFare = journeyType === 'return' ? result.fare  * 1 : result.fare;

        setFare(`Fare from ${startStation} to ${endStation} (${journeyType}): Rs. ${calculatedFare}`);
        setTime(`Time: ${result.time.toFixed(2)} minutes`);
        const formattedDistance = journeyType === 'return' ? result.distance * 2 : result.distance.toFixed(2);
        setDistance(`Distance: ${formattedDistance} Km`);
    };

    const handlePickerOpen = () => {
        if (stationPickerRef.current) {
            if (stationPickerRef.current.scrollTo) {
                stationPickerRef.current.scrollTo({ y: 30 * stationOptions.findIndex((option) => option.value === startStation) });
            }
        }
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (stationPickerRef.current) {
                    const offsetY = gestureState.dy;
                    const currentPosition = 30 * stationOptions.findIndex((option) => option.value === startStation);
                    const newPosition = Math.min(
                        Math.max(0, currentPosition - offsetY / 2), // Adjust the sensitivity by changing the divisor
                        30 * stationOptions.length - Dimensions.get('window').height + 100 // Adjust the 100 based on your layout
                    );

                    if (stationPickerRef.current.scrollTo) {
                        stationPickerRef.current.scrollTo({ y: newPosition });
                    }
                }
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Fare Enquiry</Text>
            <ScrollView style={styles.stationList} showsVerticalScrollIndicator={false} {...panResponder.panHandlers}>
                <Picker
                    ref={stationPickerRef}
                    style={styles.picker}
                    selectedValue={startStation}
                    onValueChange={(itemValue) => setStartStation(itemValue)}
                    onOpen={handlePickerOpen}
                >
                    {stationOptions.map((option) => (
                        <Picker.Item key={option.key} label={option.label} value={option.value} />
                    ))}
                </Picker>
            </ScrollView>

            <Picker
                style={styles.picker}
                selectedValue={endStation}
                onValueChange={(itemValue) => setEndStation(itemValue)}
            >
                {stationOptions.map((option) => (
                    <Picker.Item key={option.key} label={option.label} value={option.value} />
                ))}
            </Picker>

            <Picker
                style={styles.picker}
                selectedValue={journeyType}
                onValueChange={(itemValue) => setJourneyType(itemValue)}
            >
                <Picker.Item label="One Way" value="oneWay" />
                <Picker.Item label="Return" value="return" />
            </Picker>

            <Button title="Get Fare" onPress={calculateFare} color="#841584" />
            <Text style={styles.fareText}>{fare}</Text>
            <Text style={styles.resultText}>{time}</Text>
            <Text style={styles.resultText}>{distance}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    header: {
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    picker: {
        width: Dimensions.get('window').width - 32,
        marginBottom: 16,
        fontSize: 16,
        backgroundColor: 'white',
    },
    stationList: {
        maxHeight: 80,
    },
    fareText: {
        marginTop: 16,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
    resultText: {
        marginTop: 8,
        fontSize: 16,
        color: '#333',
        fontStyle: 'italic',
    },
});

export default MetroFareCalculator;



