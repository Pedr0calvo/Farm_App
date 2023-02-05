import React from "react";
import {
  ViewPropTypes,
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";

const MenuFlot = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cocontainer}>
      <View style={styles.agregar}>
        <Text style={{ fontSize: 20 }}>Añadir...</Text>
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Useless")}
        >
          <Icon1 name="sprout" size={60}></Icon1>
          <Text>Farms</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Works")}
        >
          <Icon2 name="tractor-variant" size={60}></Icon2>
          <Text>Works</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Icon name="text-box-multiple" size={60}></Icon>
          <Text>Notes</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.toMain}
        onPress={() => navigation.navigate("Main")}
      >
        <Text>Go to farms</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cocontainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  agregar: {
    marginTop: 18,
    height: 80,
  },
  container: {
    color: "black",
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,
    backgroundColor: "orange",
    margin: 20,
    borderRadius: 10,
  },
  toMain: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 80,
    backgroundColor: "#556b2f",
    borderRadius: 25
    // borderWidth: 1,
  },
});

export default MenuFlot;
