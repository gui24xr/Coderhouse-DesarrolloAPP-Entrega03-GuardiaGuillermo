import { StyleSheet, Text, View, Button } from "react-native";

import { useFonts } from "expo-font";

import fonts from "./src/global/fonts";

import { AddContactScr, Home, SearchScr, ConfigScr } from "./src/screen";

import {
  CardContactos,
  HeadBar,
  InputForm,
  ListaContactos,
  SearchInput,
  SubHeader,
} from "./src/components";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import  store  from "./src/store/store";



const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return (

  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          /* header: () => (
          <View style={{ flexDirection: 'row', marginTop: 50 }}>
            <Button onPress={() => navigation.goBack()} title="Go Back" />
            <Header title={route.name} />
          </View>
        ), */
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddContactScr" component={AddContactScr} />
        <Stack.Screen name="SearchScr" component={SearchScr} />
        <Stack.Screen name="ConfigScr" component={ConfigScr} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
