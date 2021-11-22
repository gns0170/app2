import React, {useContext} from "react";

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

import App2 from '~/Screens/App2';


const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <App2 />
        </NavigationContainer>
    );
};