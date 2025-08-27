import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

// Import do 'removeItem' para tirar o login do usuário
import { removeItem } from './Components/AsyncStorage';

// IMPORT DOS ÍCONES
import AntDesign from '@expo/vector-icons/AntDesign';

// IMPORT STYLES
import { styles } from "../styles/styles"

import { useNavigation } from '@react-navigation/native';

// Import reanimated
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate
} from 'react-native-reanimated';

// Import axios
import axios from 'axios';

const { width } = Dimensions.get("screen");
const imageWidth = width * 0.7;
const imageHeight = imageWidth * 1.76;
const spacing = 12;

function Photo({ item, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollX.value, [index - 1, index, index + 1], [1.6, 1, 1.6])
        },
        {
          rotate: `${interpolate(scrollX.value, [index - 1, index, index + 1], [15, 1, -15])}deg`
        }
      ]
    }
  })
  return (
    <View style={{ width: imageWidth, height: imageHeight, overflow: 'hidden', borderRadius: 20 }}>
      <Animated.Image source={{ uri: item.Poster }} style={[{ flex: 1 }, stylez]} />
    </View>
  )
}

function BackdropPhoto({ photo, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollX.value, [index - 1, index, index + 1], [0, 1, 0])
    }
  })

  return (
    <Animated.Image source={{ uri: photo.Poster }} style={[StyleSheet.absoluteFillObject, stylez]} blurRadius={10} />
  )
}

export default function Carrossel() {
  const [data, setData] = useState([]);
  const navigation = useNavigation()

  const handleReset = async () => {
    await removeItem("onboarded")
    navigation.navigate("Home")
  }

  // useSharedValue => Reativo as animações, quando o nosso scrollX.value for alterado
  // todas as animações serão alteradas.
  const scrollX = useSharedValue(0);

  // useAnimatedScrollHandler => Hook de reanimated, que serve para "escutar" o evento de
  // rolagem (onScroll) da nossa lista
  const onScroll = useAnimatedScrollHandler((e) => {
    // e.contentOffset.x => Distância em pixels que a lista já foi rolada na horizontal
    scrollX.value = e.contentOffset.x / (imageWidth + spacing)
  })

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=movie&page=2&&apikey=161029c2`,
      );
      setData(res.data.Search.slice(0, 10));
    } catch (error) {
      console.log("Erro ao buscar as imagens: ", error)
    }
  }

  if (data.Poster === 0) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* position: absolute, bottom: 0, top: 0, left: 0, right: 0 */}
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((photo, index) => (
          <BackdropPhoto key={photo.imdbID} photo={photo} index={index} scrollX={scrollX} />
        ))}
      </View>

      <Animated.FlatList
        data={data}
        keyExtractor={(item) => String(item.imdbID)}
        horizontal
        // style={{ flexGrow: 0 }}
        snapToInterval={imageWidth + spacing}
        // Faz com que a rolagem pare exatamente a cada intervalo especificado
        // neste caso, o tamanho da imagem, mais o gap (spacing)
        decelerationRate={"fast"}
        // decelerationRate => Controla a velocidade da desaceleração da nossa rolagem
        contentContainerStyle={{
          gap: spacing,
          paddingHorizontal: (width - imageWidth) / 2,
          alignItems: "center"
        }}
        // contentContainerStyle => Aplicar estilo no conteúdo interno do nosso Flatlist
        renderItem={({ item, index }) => <Photo item={item} index={index} scrollX={scrollX} />}
        onScroll={onScroll}
        // onScroll => Função chamada enquanto "rolamos" nossa lista
        scrollEventThrottle={16}
        // scrollEventThrottle => Define a frequência que o evento onScroll é chamado (60FPS)
        showsHorizontalScrollIndicator={false}
      // showsHorizontalScrollIndicator => Oculta a barrinha horizontal da nossa rolagem
      />

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
