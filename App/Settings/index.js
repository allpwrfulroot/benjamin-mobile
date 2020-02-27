import React from "react";
import { SafeAreaView, TouchableWithoutFeedback, View } from "react-native";
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconRegistry,
  Layout,
  Text
} from "@ui-kitten/components";

function Settings() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default Settings;
