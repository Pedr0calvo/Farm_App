import React, { useState, useContext } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import FarmContext from "./FarmContext";

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const farms = useSelector((state) => state.allFarms);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const { modalfarm, handleModalFarm } = useContext(FarmContext);
  // const renderLabel = () => {
  //   if (value && isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: "blue" }]}>
  //         Dropdown label
  //       </Text>
  //     );
  //   }
  //   return null;
  // };
  
  return (
    <View
      style={[
        styles.container,
        { height: windowHeight - 80, width: windowWidth - 30, marginTop: 20 },
      ]}
    >
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={farms}
        search
        maxHeight={300}
        labelField="owner"
        valueField="id"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.id);
          setIsFocus(false);
          handleModalFarm(item.id);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />
      <View style={styles.types}>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            if (modalfarm) {
              navigation.navigate("AplicaForm");
            } else {
              Alert.alert("You must select a farm");
            }
          }}
        >
          <Text>Aplicación</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            if (modalfarm) {
              navigation.navigate("MonitoreoForm");
            } else {
              Alert.alert("You must select a farm");
            }
          }}
        >
          <Text>Monitoreo</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            if (modalfarm) {
              navigation.navigate("CosechaForm");
            } else {
              Alert.alert("You must select a farm");
            }
          }}
        >
          <Text>Cosecha</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.473)",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 10,
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
    fontSize: 16,
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
  types: {
    alignItems: "center",
    marginTop: 60,
  },
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "rgba(255, 255, 255, 0.473)",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    width: 150,
    height: 80,
  },
});
