import React from "react";
import { Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

import TI from "../components/TI";

// IMPORT STYLES
import { styles } from "../styles/styles"

// Quando importamos o useNavigation ele nos retorna uma instância de navegação
// Isso nos prmite acessar todos os métodos referente a navegação ( navigate, goBack )
import { useNavigation } from '@react-navigation/native';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function Cadastro() {
  const navigation = useNavigation()
  return (
    <ImageBackground source={require("../images/ImagemFundo.jpg")} style={styles.container} blurRadius={1}>
      <Image source={require("../images/Livro.png")} style={{ position: 'absolute' }}></Image>

      <Text style={{ fontSize: 30, fontStyle: "italic" }}>Área de Registro</Text>

      <TI
        TextoDoPlaceholder={"Digite seu usuário"}
        ProtegerSenha={false}
      />
      <TI
        TextoDoPlaceholder={"Digite seu email"}
        ProtegerSenha={false}
      />
      <TI
        TextoDoPlaceholder={"Digite sua senha"}
        ProtegerSenha={true}
      />

      {/* {<Text style={{ color: "red" }}>ERRO! Usuário já cadastrado!</Text>} */}

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Registrar</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.gobackbtn} onPress={() => navigation.goBack()}><AntDesign name="back" size={24} color="black" /></TouchableOpacity>
    </ImageBackground>
  )
}
