import { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import Screens
import Home from "../Home";
import Cadastro from "../Cadastro";
import Login from '../Login'
import Carrossel from '../Carrossel'

import { getItem } from "../Components/AsyncStorage";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState(null)

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, [])

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem("onboarded")

    if (onboarded === "1") {
      setShowOnboarding(false)
    } else {
      setShowOnboarding(true)
    }
  }

  if (showOnboarding === null) {
    return null
  }

  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Cadastro' component={Cadastro} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Carrossel' component={Carrossel} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Carrossel" screenOptions={{ headerShown: false, }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Cadastro' component={Cadastro} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Carrossel' component={Carrossel} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}
