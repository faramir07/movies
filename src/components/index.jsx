import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconF from "react-native-vector-icons/Foundation";
import IconI from "react-native-vector-icons/Ionicons";
import IconS from "react-native-vector-icons/SimpleLineIcons";
import { Home } from "./Home/index.jsx";
import { Search } from "./Search/index.jsx";
import { Profile } from "./Profile/index.jsx";

const Tab = createBottomTabNavigator();

export const TabScreen = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#1F1C2C",
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
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
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            tabBarLabel: ".",
            tabBarIcon: ({ color, focused }) => (
              <IconI
                name="search"
                size={focused ? 20 + 10 : 20}
                color={color}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabel: ".",
            tabBarIcon: ({ color, focused }) => (
              <IconS
                name="user"
                size={focused ? 20 + 10 : 20}
                color={color}
                style={styles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </>
  );
};

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
    backgroundColor: "rgba(196, 196, 196, 0.7)",
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
