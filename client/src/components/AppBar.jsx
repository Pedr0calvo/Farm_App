import React from "react";
import { ViewPropTypes, StyleSheet, View, Text, Button } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const AppBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>AppBar</Text>
      <Button
        title="Useless"
        onPress={() => navigation.navigate("Useless", { name: "Pet" })}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "black",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default AppBar;
