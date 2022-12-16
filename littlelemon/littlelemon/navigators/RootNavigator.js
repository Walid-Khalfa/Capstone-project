import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerStyle: {
            textAlign: 'center'
        }
        }}
        />
      <Stack.Screen
        name="Subscribe"
        component={SubscribeScreen} 
        options={{ 
          headerStyle: {
            textAlign: 'center'
        }
        }}
        />
        <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerStyle: {
            textAlign: 'center'
        }
        }}
        />
    </Stack.Navigator>
  );
};

export default RootNavigator;
