import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./src/Redux/store";
import { TabScreen } from "./src/components/index.jsx";
import { DetailMovie } from "./src/components/DatailMovie/index.jsx";

const Stack = createStackNavigator();

export const API_KEY = "062d754adf75dcb0d56b41ea5caf3519";
export const BASE_URL_API = "https://api.themoviedb.org/3";
export const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TabScreen">
          <Stack.Screen
            name="TabScreen"
            component={TabScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailMovie"
            component={DetailMovie}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    margin: 0,
    zIndex: 1,
  },
  tabBarStyle: {
    flex: 1,
    width: "90%",
    marginLeft: 20,
    backgroundColor: "rgba(196, 196, 196, 0.6)",
    overflow: "hidden",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 0,
    margin: 0,
  },
});
