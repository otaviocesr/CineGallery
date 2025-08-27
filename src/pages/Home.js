import React from "react";
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles"

// Quando importamos o useNavigation ele nos retorna uma instância de navegação
// Isso nos prmite acessar todos os métodos referente a navegação ( navigate, goBack )
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()
  return (
    <ImageBackground source={require("../images/ImagemFundo.jpg")} style={styles.container} blurRadius={1}>
      <Image style={{ height: 200, width: 200 }} source={require("../images/flor.png")}></Image>
      <Text style={styles.welcome}>MineMovies</Text>
      <Text style={styles.meditation}>Bem-vindo ao melhor aplicativo de filmes do nosso mundo quadrado.</Text>
      <TouchableOpacity style={styles.loginbtn} onPress={() => navigation.navigate("Login")}><Text style={styles.textloginbtn}>Login</Text></TouchableOpacity>
      <View style={styles.viewSignUp}>
        <Text style={{ color: 'white' }}>Não tem uma conta? </Text>
        <TouchableOpacity style={{ fontWeight: 600, }} onPress={() => navigation.navigate("Cadastro")}><Text style={styles.btnsign}>Cadastre-se</Text></TouchableOpacity>

      </View>
    </ImageBackground >
  )
}
