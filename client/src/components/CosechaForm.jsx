import React, { useContext } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { postYield } from "../actions";
import FarmContext from "./FarmContext";

const CosechaForm = ({ route }) => {
  const dispatch = useDispatch();
  const { modalfarm, handleModalFarm } = useContext(FarmContext);
  const [harvest, setHarvest] = React.useState({
    yield: "",
    harvest_quality: "",
    comentario: "",
  });
  const changeYield = (e) => {
    setHarvest(() => {
      return {
        ...harvest,
        yield: e,
      };
    });
  };
  const changeQuality = (e) => {
    setHarvest(() => {
      return {
        ...harvest,
        harvest_quality: e,
      };
    });
  };
  const changeComentario = (e) => {
    setHarvest(() => {
      return {
        ...harvest,
        comentario: e,
      };
    });
  };
  const onPress = (e) => {
    if (harvest.yield && harvest.harvest_quality && harvest.comentario) {
      e.preventDefault();
      dispatch(postYield(harvest, modalfarm));
      setHarvest({
        yield: "",
        harvest_quality: "",
        comentario: "",
      });
    }
  };

  return (
    <View style={styles.cocontainer}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={changeYield}
          value={harvest.yield}
          placeholder="Yield"
        />
        <TextInput
          style={styles.input}
          onChangeText={changeQuality}
          value={harvest.harvest_quality}
          placeholder="Quality"
        />
        <TextInput
          style={styles.inputNote}
          onChangeText={changeComentario}
          value={harvest.comentario}
          placeholder="Commentary"
        />
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

export default CosechaForm;
