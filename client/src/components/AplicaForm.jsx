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
} from "react-native";
import Constants from "expo-constants";
import { useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { postAplications } from "../actions";
import { useNavigation } from "@react-navigation/native";
import FarmContext from "./FarmContext";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

const AplicaForm = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { modalfarm, handleModalFarm } = useContext(FarmContext);
  const [aplica, setAplica] = React.useState({
    productos: "",
    dosis: "",
    cantidad: "",
    comentario: "",
  });
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const changeProductos = (e) => {
    setAplica(() => {
      return {
        ...aplica,
        productos: e,
      };
    });
  };
  const changeDosis = (e) => {
    setAplica(() => {
      return {
        ...aplica,
        dosis: e,
      };
    });
  };
  const changeCantidad = (e) => {
    setAplica(() => {
      return {
        ...aplica,
        cantidad: e,
      };
    });
  };
  const changeComentario = (e) => {
    setAplica(() => {
      return {
        ...aplica,
        comentario: e,
      };
    });
  };

  const data = [
    { item: " kg/ha", index: " kg/ha" },
    { item: " l/ha", index: " l/ha" },
  ];

  const onPress = (e) => {
    if (
      aplica.productos &&
      aplica.dosis &&
      aplica.cantidad &&
      aplica.comentario
    ) {
      e.preventDefault();
      aplica.dosis = aplica.dosis + value.item;
      dispatch(postAplications(aplica, modalfarm));
      setAplica({
        productos: "",
        dosis: "",
        cantidad: "",
        comentario: "",
      });
    }
  };

  return (
    <View style={styles.cocontainer}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={changeProductos}
          value={aplica.productos}
          placeholder="Recipe"
        />
        <TextInput
          style={styles.input}
          onChangeText={changeDosis}
          value={aplica.dosis}
          placeholder="Dose"
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
        <TextInput
          style={styles.input}
          onChangeText={changeCantidad}
          value={aplica.cantidad}
          placeholder="Quantity"
        />
        <TextInput
          style={styles.inputNote}
          onChangeText={changeComentario}
          value={aplica.comentario}
          placeholder="Commentary"
        />
      </SafeAreaView>
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>Send</Text>
      </TouchableHighlight>
      {/* <Button
        title="MenuSelect"
        onPress={() => navigation.navigate("MenuSelect")}
        style={styles.buttonSelect}
      /> */}
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
    // margin: 25,
    borderRadius: 20,
  },
  inputNote: {
    height: 70,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    // margin: 25,
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

export default AplicaForm;
