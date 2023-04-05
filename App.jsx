import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/components/Home/indext";
import IconF from "react-native-vector-icons/Foundation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#1F1C2C",
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: ".",
            tabBarIcon: ({ color, focused }) => (
              <IconF
                name="home"
                size={focused ? 20 + 10 : 20}
                color={color}
                style={styles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    margin: 0
  },
  tabBarStyle: {
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
  }
});
