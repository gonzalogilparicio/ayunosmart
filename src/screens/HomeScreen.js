import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido a Ayuno Smart</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sugerir comida con IA</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;