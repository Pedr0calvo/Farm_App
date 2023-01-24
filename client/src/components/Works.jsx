import React, { useState } from "react";
import {
  ViewPropTypes,
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import DropdownComponent from "./DropdownComponent";

const Works = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginTop: 30 }}>Choose a farm...</Text>
      <DropdownComponent></DropdownComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  agregar: {
    marginTop: 10,
  },
  container: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.473)",
  },
});

export default Works;
