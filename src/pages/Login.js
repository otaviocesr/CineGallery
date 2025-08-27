import React from "react";
import { useState } from "react";
import { Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles"

// Quando importamos o useNavigation ele nos retorna uma instância de navegação
// Isso nos prmite acessar todos os métodos referente a navegação ( navigate, goBack )
import { useNavigation } from '@react-navigation/native';

// IMPORT DOS ÍCONES
import AntDesign from '@expo/vector-icons/AntDesign';

// Import do 'setItem' para manter o usuário logado
import { setItem } from './Components/AsyncStorage';

export default function Cadastro() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation()

  function verificarLogin() {
    let ConfirmUser = "otavio"
    let ConfirmPassword = "teste123"

    if (ConfirmUser == user && ConfirmPassword == password) {
      navigation.navigate("Carrossel")
      setItem("onboarded", "1")
    } else {
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 2000);
    }
  }
  return (
    <ImageBackground source={require("../images/ImagemFundo.jpg")} style={styles.container} blurRadius={1}>

      <Image source={require("../images/PlacaMine.png")} style={{ position: 'absolute', width: "90%", height: 200 }}></Image>
      <Text style={{ fontSize: 30, fontStyle: "italic", color: "rgb(66, 67, 66)" }}>Área de Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        onChangeText={(user) => setUser(user)}
        value={user}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        onChangeText={(senha) => setPassword(senha)}
        value={password}
        secureTextEntry={true}
      />

      {visible && <Text style={{ color: "red" }}>ERRO! Email ou senha inválidos</Text>}

      <TouchableOpacity onPress={verificarLogin}>
        <Text style={styles.btnText}>Ver Galeria de Filmes</Text>
      </TouchableOpacity>



      <TouchableOpacity style={styles.gobackbtn} onPress={() => navigation.goBack()}><AntDesign name="back" size={24} color="black" /></TouchableOpacity>
    </ImageBackground>
  )
}
