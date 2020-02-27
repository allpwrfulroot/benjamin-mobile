import { registerRootComponent } from "expo";
import * as Font from "expo-font";
import React, { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconRegistry,
  Layout,
  Spinner
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping as evaMapping, light as evaLight } from "@eva-design/eva";
const customLight = require("./light.json");
const customMapping = require("./mapping.json");

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TransactionIcon = style => <Icon {...style} name="swap-outline" />;
const CardIcon = style => <Icon {...style} name="credit-card-outline" />;
const ActivityIcon = style => <Icon {...style} name="trending-up-outline" />;
const MessageIcon = style => <Icon {...style} name="email-outline" />;

import Transactions from "./Transactions";
import Cards from "./Cards";
import Activity from "./Activity";
import Messages from "./Messages";
import Settings from "./Settings";

const BottomTabBar = ({ navigation, state }) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
      <BottomNavigationTab title="Transactions" icon={TransactionIcon} />
      <BottomNavigationTab title="Cards" icon={CardIcon} />
      <BottomNavigationTab title="Activity" icon={ActivityIcon} />
      <BottomNavigationTab title="Messages" icon={MessageIcon} />
    </BottomNavigation>
  );
};

function CardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "proxima-light": require("../assets/fonts/SourceSansPro-Light.ttf"),
      "proxima-regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
      "proxima-medium": require("../assets/fonts/SourceSansPro-SemiBold.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Text>Loading...</Text>;
    } else {
      return (
        <>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider
            mapping={evaMapping}
            customMapping={customMapping}
            theme={{ ...evaLight, ...customLight }}
          >
            <NavigationContainer>
              <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
                <Tab.Screen name="Transactions" component={Transactions} />
                <Tab.Screen name="CardsStack" component={CardStack} />
                <Tab.Screen name="Activity" component={Activity} />
                <Tab.Screen name="Messages" component={Messages} />
              </Tab.Navigator>
            </NavigationContainer>
          </ApplicationProvider>
        </>
      );
    }
  }
}

registerRootComponent(App);
