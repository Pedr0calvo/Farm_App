import Icon from "react-native-vector-icons/Entypo";
import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import Constants from "expo-constants";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import Icon2 from "react-native-vector-icons/Entypo";

const LogOut = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = [{ item: "Log Out", index: 1 }];

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={100}
        labelField="item"
        valueField="index"
        value={value}
        placeholder={<Icon2 name="dots-three-vertical" size={20} />}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item);
          
          setIsFocus(false);
        }}
        // renderItem={() => <Icon2 name="dots-three-vertical" size={23} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 100
  },
  label: {
    backgroundColor: "white",
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 1,
  },
  selectedTextStyle: {
    fontSize: 0,
  },
  iconStyle: {
    height: 20,
    width: 10
  },
  placeholderStyle: {
  }
});

export default LogOut;
