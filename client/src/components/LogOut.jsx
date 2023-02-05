import Icon from "react-native-vector-icons/Entypo";
import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import Constants from "expo-constants";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const LogOut = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = [{ item: "Logout", index: 1 }];

  return (
    <View>
      {/* <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={100}
        labelField="item"
        valueField="index"
        value={value}
        onChange={(item) => {
          console.log("holaaaaaaaaaaaaaaaaaaaaa");
        }}
        renderRightIcon={() => (
          )}
      /> */}
          <Icon name="dots-three-vertical" size={20}></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    paddingHorizontal: 8,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default LogOut;
