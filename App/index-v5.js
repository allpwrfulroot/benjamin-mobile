import { registerRootComponent } from "expo";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ApplicationProvider,
  Icon,
  IconRegistry,
  Layout,
  Text
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PersonIcon = style => <Icon {...style} name="person-outline" />;

const EmailIcon = style => {
  console.log("style? ", style);
  return <Icon {...style} color={style.tintColor} name="email-outline" />;
};

function HomeScreenOne() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen One</Text>
    </View>
  );
}

function HomeScreenTwo() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen Two</Text>
    </View>
  );
}

function HomeScreenThree() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen Three</Text>
    </View>
  );
}

function HomeScreenFour() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen Four</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: "#373E54",
        activeTintColor: "#68C4EF",
        inactiveBackgroundColor: "#F4F5F7",
        activeBackgroundColor: "#F4F5F7"
      }}
      tabStyle={{ backgroundColor: "#68C4EF" }}
    >
      <Tab.Screen
        name="Transactions"
        component={HomeScreenOne}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="swap-outline" width={size} height={size} fill={color} />
          ),
          tabBarButton: props => (
            <TouchableWithoutFeedback
              style={{ border: "1px solid red" }}
              {...props}
            />
          )
        }}
      />
      <Tab.Screen
        name="Cards"
        component={HomeScreenTwo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="credit-card-outline"
              width={size}
              height={size}
              fill={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Activity"
        component={HomeScreenThree}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="trending-up-outline"
              width={size}
              height={size}
              fill={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Messages"
        component={HomeScreenFour}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="email-outline"
              width={size}
              height={size}
              fill={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

registerRootComponent(App);
