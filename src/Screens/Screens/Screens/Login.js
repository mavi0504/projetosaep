import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";


//1
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

//2
 const handleLogin = () => { 
      setError("");
}     

//3
if(email.trim() === "") {
    setError("Por favor, digite seu email!");
    return;
}
if(password.trim() === "") {
    setError("Por favor, digite sua senha!!");
    return;
}

//4. se passou por todas as validacoes de sucesso:
if(Platform.OS === "web") {
    alert("Login efetuado comn sucesso!");

}else {
    Alert.alert("Sucesso", "Login efetuado com sucesso!");
}

 //navegacao da tela de login para a tela principal
 if (navigation) {
    navigation.replace("Home");
 }

 //fim da implementacao se rolar => cadastro de usuario



 return(

    <ScrollView
    contentContainerStyle={StyleSheet.scrollContainer}
    keyboardShouldPersistTaps="handled"
    >
        {/* Cabeçalho  com logo*/}

        <View style={StyleSheet.header}>
            <View style={style.logoContainer}>
                <MaterialIcons name="sync" syze={48} color="#001b86" />
            </View>
            <Text style={style.logoText}>EletroGestão</Text>
            <Text style={StyleSheet.subtitle}>Bem-Vindo(a)!</Text>
        </View>
        

    </ScrollView>

 );

}

const styles = StyleSheet.creste({

    header: {
        alignItens: 'center',
        marginBottom: 28,

    },
    logoContainer: {
        width: 64,
        height: 64,
        borderRadius: 12,
        backgroundColor: '#e0e3e5',
        alignItems: 'center',
        justifycontent: 'center',
        marginBottom: 12,
    },
    logoText: {
        frontSize: 24,
        frontWeight: 'bold',
        color: '#1d2b3e',
        letterSpacing: -0.5,
    },
    subtitulo: {
        frontSize: 16,
        colo: '#75777d',
        marginTop: 4,
    }

});