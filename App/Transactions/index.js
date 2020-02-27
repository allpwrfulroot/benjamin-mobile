import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  View
} from "react-native";
import {
  Autocomplete,
  Button,
  Icon,
  Input,
  Layout,
  Radio,
  RadioGroup,
  Select,
  Text,
  Toggle
} from "@ui-kitten/components";

const data = [{ text: "Option 1" }, { text: "Option 2" }, { text: "Option 3" }];
const autoData = [
  {
    id: 1,
    title: "Star Wars",
    releaseYear: 1977
  },
  {
    id: 2,
    title: "Back to the Future",
    releaseYear: 1985
  },
  {
    id: 3,
    title: "The Matrix",
    releaseYear: 1999
  },
  {
    id: 4,
    title: "Inception",
    releaseYear: 2010
  },
  {
    id: 5,
    title: "Interstellar",
    releaseYear: 2014
  }
];

function Transactions() {
  return (
    <Layout level="2">
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        <Text>Demo Form</Text>
        <Input
          label="Email"
          placeholder="john.doe@example.com"
          style={styles.formItemLayout}
        />
        <Select label="Option" data={data} style={styles.formItemLayout} />
        <Autocomplete
          placeholder="Place your Text"
          data={autoData}
          label="Autocomplete"
          style={styles.formItemLayout}
        />
        <Text category="label" style={styles.formItemLayout}>
          Radio
        </Text>
        <RadioGroup selectedIndex={2} label="Foo">
          <Radio style={styles.radio} text="Option 1" />
          <Radio style={styles.radio} text="Option 2" />
          <Radio style={styles.radio} text="Option 3" />
        </RadioGroup>
        <Toggle
          text={`Receive email updates:`}
          checked={true}
          status="info"
          textStyle={styles.toggleText}
          style={styles.toggle}
        />
        <Button appearance="outline">Continue</Button>
        <View style={styles.scrollPadding} />
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 18
  },
  formItemLayout: {
    marginTop: 24
  },
  radio: {
    marginVertical: 8
  },
  toggle: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingVertical: 18
  },
  toggleText: {
    marginHorizontal: 0
  }
});

export default Transactions;
