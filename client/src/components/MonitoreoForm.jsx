import React, { useContext, useState } from "react";
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
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { useDispatch } from "react-redux";
import { postTasks } from "../actions";
import FarmContext from "./FarmContext";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

const MonitoreoForm = ({ route }) => {
  const dispatch = useDispatch();
  const { modalfarm, handleModalFarm } = useContext(FarmContext);
  const [text, setText] = React.useState({
    type: "",
    note: "",
    image: null,
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      setText(() => {
        return {
          ...text,
          image: result.assets[0].uri,
        };
      });
    }
  };

  const changeOwner = (e) => {
    setText(() => {
      return {
        ...text,
        type: e,
      };
    });
  };
  const changePlace = (e) => {
    setText(() => {
      return {
        ...text,
        note: e,
      };
    });
  };
  const onPress = (e) => {
    if (text.type && text.note) {
      e.preventDefault();
      dispatch(postTasks(text, modalfarm));
      setText({
        type: "",
        note: "",
        image: null,
      });
    }
  };

  return (
    <View style={styles.cocontainer}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={changeOwner}
          value={text.type}
          placeholder="Pest type"
        />
        <TextInput
          style={styles.inputNote}
          onChangeText={changePlace}
          value={text.note}
          placeholder="Note"
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
          {text.image ? null : (
            <Pressable onPress={pickImage}>
              <Icon name="add-photo-alternate" size={80}></Icon>
            </Pressable>
          )}
          {text.image && (
            <Image
              source={{ uri: text.image }}
              style={{ width: 200, height: 200, margin: 8, borderRadius: 20 }}
            />
          )}
        </View>
      </SafeAreaView>
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>Send</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  cocontainer: {
    paddingTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    margin: 25,
    borderRadius: 20,
  },
  inputNote: {
    height: 90,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    margin: 25,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#696969",
    width: 250,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20,
    backgroundColor: "green",
    height: 60,
    marginTop: 30,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    width: 250,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 25,
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

export default MonitoreoForm;
