import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Example from "./screens/Example";

const Tab = createBottomTabNavigator();

// const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="example" component={Example} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarStyle: { display: "none" }, animationEnabled: true}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const getRouteName = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
};


// https://youtu.be/vPpOZW6preY?si=g-2gHkuFmXxJMFXM

// sliding screen 
// https://youtu.be/A2b85RkuuB4?si=yXoRfTQ-yAwodo-H
// https://youtu.be/Opu3nfusnMo?si=DaLZeKe_xxA7az49

// https://youtu.be/XiutL0uLICg?si=NqTyOBuQcv_r-peV