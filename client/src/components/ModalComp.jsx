import React, { useContext, useEffect } from "react";
import {
  ViewPropTypes,
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  Pressable,
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import ModalContext from "./Context";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/EvilIcons";
import { getAplications, getTasks, getYields, putFarms } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import FarmContext from "./FarmContext";
import { ScrollView } from "react-native";

const ModalComp = ({ props }) => {
  const { modal, handleModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const tasks = useSelector((state) => state.tasks);
  const aplications = useSelector((state) => state.aplications);
  const yields = useSelector((state) => state.yields);

  const handleDelete = () => {
    Alert.alert("Alerta", "Eliminar quinta", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          dispatch(putFarms(props?.id));
          handleModal();
        },
      },
    ]);
  };
  useEffect(() => {
    if (modal === true) {
      dispatch(getTasks(props?.id));
      dispatch(getAplications(props?.id));
      dispatch(getYields(props?.id));
    }
  }, [modal]);
  console.log(tasks, 'tasks');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modal}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            { width: windowWidth - 50, height: windowHeight - 80 },
          ]}
        >
          <Text style={styles.modalText}>Farm: {props?.owner}</Text>
          <Text style={styles.modalText}>Place: {props?.place}</Text>
          <Text style={styles.modalText}>Crops: {props?.crops}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={handleModal}
          >
            <Icon name="closecircle" size={30}></Icon>
          </Pressable>
          <Pressable
            onPress={() => handleDelete(props?.id)}
            style={styles.delete}
          >
            <Icon1 name="trash" title="Delete" size={40}></Icon1>
          </Pressable>
          <SafeAreaView
            style={[styles.container, { width: windowWidth - 120 }]}
          >
            <ScrollView style={{ height: 400 }}>
              <View style={[styles.bots, { width: windowWidth - 120 }]}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", marginTop: 8 }}
                >
                  Monitoring
                </Text>
                {tasks.length ? (
                  tasks.map((task) => (
                    <Pressable
                      onPress={() => console.log("Elimanaloo")}
                      key={task.id}
                    >
                      <View style={styles.info} key={task.id}>
                        <Text style={styles.text}>Pest type: {task.tipo}</Text>
                        <Text style={styles.text}>
                          Commentary: {task.comentario}
                        </Text>
                        <Text style={styles.text}>
                          Created: {task.createdAt.slice(0, 10)}
                        </Text>
                        <Image
                          key={task.image}
                          source={{ uri: task.image }}
                          style={{ width: 200, height: 200, borderRadius: 10 }}
                        />
                      </View>
                    </Pressable>
                  ))
                ) : (
                  <View style={styles.info}>
                    <Text style={styles.text}>You must add information!</Text>
                  </View>
                )}
              </View>
              <View style={[styles.bots, { width: windowWidth - 120 }]}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", marginTop: 8 }}
                >
                  Applications
                </Text>
                {aplications.length ? (
                  aplications.map((aplication) => (
                    <Pressable
                      onPress={() => console.log("Elimanaloo")}
                      key={aplication.id}
                    >
                      <View style={styles.info} key={aplication.id}>
                        <Text style={styles.text}>
                          Recipe: {aplication.productos}
                        </Text>
                        <Text style={styles.text}>
                          Dose: {aplication.dosis}
                        </Text>
                        <Text style={styles.text}>
                          Quantity: {aplication.cantidad}
                        </Text>
                        <Text style={styles.text}>
                          Commentary: {aplication.comentario}
                        </Text>
                        <Text style={styles.text}>
                          Created: {aplication.createdAt.slice(0, 10)}
                        </Text>
                      </View>
                    </Pressable>
                  ))
                ) : (
                  <View style={styles.info}>
                    <Text style={styles.text}>You must add information!</Text>
                  </View>
                )}
              </View>
              <View style={[styles.bots, { width: windowWidth - 120 }]}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", marginTop: 8 }}
                >
                  Harvest
                </Text>
                {yields.length ? (
                  yields.map((item) => (
                    <Pressable
                      onPress={() => console.log("Elimanaloo")}
                      key={item.id}
                    >
                      <View style={styles.info} key={item.id}>
                        <Text style={styles.text}>Rinde: {item.yield}</Text>
                        <Text style={styles.text}>
                          Quality: {item.harvest_quality}
                        </Text>
                        <Text style={styles.text}>
                          Commentary: {item.comentario}
                        </Text>
                        <Text style={styles.text}>
                          Created: {item.createdAt.slice(0, 10)}
                        </Text>
                      </View>
                    </Pressable>
                  ))
                ) : (
                  <View style={styles.info}>
                    <Text style={styles.text}>You must add information!</Text>
                  </View>
                )}
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 450,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
  },
  buttonClose: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    // textAlign: 'left',
    fontWeight: "bold",
    fontSize: 20,
  },
  delete: {
    position: "absolute",
    right: 4,
    bottom: 8,
  },
  bots: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    // width: 260,
  },
  info: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "grey",
    borderTopWidth: 0.5,
    borderTopColor: "grey",
    borderTopWidth: 0.5,
  },
  text: {
    margin: 4,
  },
  // image: {
  //   width: 100,
  //   height: 100
  // }
});

export default ModalComp;
