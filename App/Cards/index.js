import React from "react";
import { SafeAreaView, TouchableWithoutFeedback, View } from "react-native";
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text
} from "@ui-kitten/components";

function Cards(props) {
  const toSettings = (): void => {
    props.navigation.navigate("Settings");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen Two</Text>
      <Button onPress={toSettings}>Go to Settings</Button>
    </View>
  );
}

export default Cards;
