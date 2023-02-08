import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { useDispatch } from "react-redux";
import { postFarms } from "../actions";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useContext } from "react";
import UserContext from "./UserContext";

const UselessTextInput = ({ route }) => {
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const { userMod, handleuserMod } = useContext(UserContext);
  const [text, setText] = React.useState({
    owner: "",
    place: "",
    crops: "",
  });
  const changeOwner = (e) => {
    setText(() => {
      return {
        ...text,
        owner: e,
      };
    });
  };
  const changePlace = (e) => {
    setText(() => {
      return {
        ...text,
        place: e,
      };
    });
  };
  const onPress = (e) => {
    if (text.owner && text.place && text.crops) {
      e.preventDefault();
      dispatch(postFarms(text, userMod));
      setText({
        owner: "",
        place: "",
        crops: "",
      });
    }
  };

  const data = [
    { item: "Corn", index: 1 },
    { item: "Soy", index: 2 },
    { item: "Tomato", index: 3 },
    { item: "Lettuce", index: 4 },
    { item: "Rice", index: 5 },
    { item: "Hemp", index: 6 },
    { item: "Pepper", index: 7 },
    { item: "Eggplant", index: 8 },
  ];

  return (
    <View style={styles.cocontainer}>
      <Text style={styles.welcome}>Create a farm!</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={changeOwner}
          value={text.owner}
          placeholder="Owner"
        />
        <TextInput
          style={styles.input}
          onChangeText={changePlace}
          value={text.place}
          placeholder="Place"
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="item"
          valueField="index"
          placeholder={!isFocus ? "Select item" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item);
            setText(() => {
              return {
                ...text,
                crops: item.item,
              };
            });
            setIsFocus(false);
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
      </SafeAreaView>
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={onPress}>
          <Text style={styles.textButton}>Send</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 40,
    fontStyle: "oblique",
    paddingBottom: 10,
  },
  cocontainer: {
    paddingTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#696969",
    width: 250,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20,
    backgroundColor: "green",
    marginTop: 10,
  },
  buttonSelect: {
    backgroundColor: "green",
    paddingTop: 15,
    paddingBottom: 15,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    width: 250,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    marginBottom: 20,
    marginTop: 20,
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
});

export default UselessTextInput;
