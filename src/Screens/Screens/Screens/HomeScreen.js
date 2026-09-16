import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Platform,
    Alert,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    
    const handleLogout = () => {
        if (Platform.OS === 'web') {
            if (window.confirm("Deseja mesmo sair?")) {
                if (navigation) navigation.replace("Login");
            }
        } else {
            Alert.alert(
                "Sair",
                "Deseja mesmo sair?",
                [
                    { text: "Cancelar", style: "cancel" },
                    { 
                        text: "Sair", 
                        style: "destructive", 
                        onPress: () => navigation && navigation.replace("Login") 
                    }
                ]
            );
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
            >
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.boasVindas}>Olá Admin</Text>
                        <Text style={styles.appName}>EletroGestão</Text>
                    </View>

                    <TouchableOpacity
                        onPress={handleLogout}
                        style={styles.sair}
                        activeOpacity={0.7}
                        accessibilityLabel="sair do sistema"
                    >
                        <MaterialIcons name="logout" size={20} color="#ba1a1a" />
                    </TouchableOpacity>
                </View>

                <View style={styles.header}
                ></View>

                {/* Cards Row */}
                <View style={styles.rowCards}>
                    <View style={styles.cards}>
                        <MaterialIcons name="inventory-2" size={22} color="#1d2b3e" />
                        <Text style={styles.metricaValue}>20</Text>
                        <Text style={styles.metricaLabel}>Total de produtos</Text>
                    </View>

                    <View style={styles.cards}>
                        <MaterialIcons name="warning" size={22} color="#ba1a1a" />
                        <Text style={styles.metricaValue}>2</Text>
                        <Text style={styles.metricaLabel}>Estoque Baixo</Text>
                    </View>

                </View>


            </ScrollView>
        </SafeAreaView>
    );
}

// Styles
const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        backgroundColor: '#f7f9fb',
    },
    scroll: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 36,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    boasVindas: {
        fontSize: 13,
        color: "#75777d",
        fontWeight: "500",
    },
    appName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#1500a1",
    },
    sair: {
        width: 40,
        height: 40,
        backgroundColor: '#ffdad6',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ffb4ab',
    },
    rowCards: {
        flexDirection: 'row',
        justify: 'space-between',
        marginBottom: 24,
        gap: 10,
    },
    cards: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e3e5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    metricaValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1d2b3e',
        marginTop: 4,
    },
    metricaLabel: {
        fontSize: 11,
        color: '#75777d',
        marginTop: 2,
        textAlign: 'center',
    },
});