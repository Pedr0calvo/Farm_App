import React from "react";
import {
  ViewPropTypes,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const ButtonFlot = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonLoc}
      onPress={() => navigation.navigate("MenuFlot")}
    >
      <View style={styles.fab}>
        <Icon name="plus" size={38} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "orange",
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLoc: {
    position: "absolute",
    right: 20,
    bottom: 80,
    borderColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});

export default ButtonFlot;
