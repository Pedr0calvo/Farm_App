import React, { createRef, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Image } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";
import Constants from "expo-constants";

const MenuSelect = ({ props }) => {
  //   const [selected, setSelected] = useState();
  //   const data = [
  //     { key: 1, value: "Edit" },
  //     { key: 2, value: "Eliminar" },
  //   ];

  const [visible, setVisible] = useState(false);
  const options = [
    {
      title: "Edit",
      icon: "edit",
      action: () => {
        alert("Edit");
        setVisible(false);
      },
    },
    {
      title: "Delete",
      icon: "trash",
      action: () => {
        alert("Delete");
        setVisible(false);
      },
    },
  ];
  {
    /* <SelectList
    onSelect={() => alert(selected)}
    setSelected={setSelected}
    data={data}
    search={false}
  >
  </SelectList> */
  }

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Icon name="dots-three-vertical" size={26} color={"#212121"} />
      </TouchableOpacity>
      <Modal transparent visible={visible}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.popup}>
            {options?.map((op, i) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  { borderBottomWidth: i === options.length - 1 ? 0 : 1 },
                ]}
                key={i}
                onPress={op.action}
              >
                <Text>{op.title}</Text>
                <Icon
                  name={op.icon}
                  size={26}
                  color={"#212121"}
                  style={{ marginLeft: 10 }}
                ></Icon>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: { position: "absolute", top: 4, right: 4 },
  popup: {
    borderRadius: 8,
    borderColor: "#333",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    borderBottomColor: "#ccc",
  },
});

export default MenuSelect;
