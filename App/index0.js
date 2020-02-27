import React from "react";
import { SafeAreaView, TouchableWithoutFeedback, View } from "react-native";
import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";

function Transactions() {
  return (
    <Layout>
      <Text>Demo Form</Text>
      <Input label="Email" placeholder="john.doe@example.com" />
      <Button>Continue</Button>
    </Layout>
  );
}

export default Transactions;
