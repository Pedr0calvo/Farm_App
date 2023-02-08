import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  componentWillUnmount,
  getFarms,
  getUsers,
  setUserFalse,
} from "../actions";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Pressable,
  Dimensions,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import AppBar from "./AppBar";
import MenuSelect from "./MenuSelect";
import "react-native-gesture-handler";
import ModalContext from "./Context";
import ModalComp from "./ModalComp";
import ButtonFlot from "./ButtonFlot";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Entypo";
import UserContext from "./UserContext";
import LogOut from "./LogOut";
import Icon5 from "react-native-vector-icons/Ionicons";
import FarmContext from "./FarmContext";

const Main = ({ navigation }) => {
  const { modalfarm, handleModalFarm } = useContext(FarmContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFarms(userMod));
    dispatch(getUsers());
    handleModalFarm();
  }, []);

  const farms = useSelector((state) => state.allFarms);
  const { modal, handleModal } = useContext(ModalContext);
  const { userMod, handleuserMod } = useContext(UserContext);
  const [selected, setSelected] = useState();
  const windowHeight = Dimensions.get("window").height;
  const isActive = useSelector((state) => state.isActive);
  const handleTry = (farm) => {
    setSelected(() => {
      return farm;
    });
    setTimeout(() => handleModal(), 5);
  };
  // const [refresh, setRefresh] = useState(false);
  // const pullMe = () => {
  //   setRefresh(true);
  //   setTimeout(() => {
  //     setRefresh(false);
  //   }, 4000);
  // };
  const refreshList = () => {
    dispatch(getFarms(userMod.toLowerCase()));
  };

  return (
    <View style={{ height: windowHeight }}>
      {isActive == true ? (
        <View style={{ height: windowHeight }}>
          {!farms.length ? (
            <View style={styles.container}>
              <Text style={styles.text}>Add a farm!</Text>
            </View>
          ) : (
            <FlatList
              style={styles.flatList}
              data={farms}
              // refreshcontrol={
              //   <RefreshControl
              //     refreshing={refresh}
              //     onRefresh={pullMe}
              //   ></RefreshControl>
              // }
              renderItem={({ item: farm }) => (
                <Pressable
                  key={farm.id}
                  style={styles.container}
                  onPress={() => handleTry(farm)}
                >
                  <View style={styles.conter}>
                    <Icon
                      name="list"
                      size={30}
                      style={{ marginRight: 50 }}
                    ></Icon>
                    <View style={styles.textCont}>
                      <Text style={styles.text}>{farm.owner}</Text>
                      <Text style={styles.text}>{farm.place}</Text>
                    </View>
                    <View style={styles.icon}>
                      <Icon1 name="sprout-outline" size={30}></Icon1>
                    </View>
                  </View>
                </Pressable>
              )}
            ></FlatList>
          )}
          <TouchableOpacity style={styles.buttonLoc} onPress={refreshList}>
            <View style={styles.fab}>
              <Icon5 name="reload" size={38} color="black" />
            </View>
          </TouchableOpacity>
          {/* <ButtonFlot></ButtonFlot> */}
          <ModalComp props={selected} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>No access</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "orange",
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLoc: {
    position: "absolute",
    left: 20,
    bottom: 90,
    borderColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  container: {
    backgroundColor: "rgb(255, 255, 255)",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#20232a",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    backgroundColor: "rgba(255, 255, 255, 0.473)",
    flexDirection: "column",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
    marginTop: 8,
  },
  conter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textCont: {
    marginRight: 120,
  },
});

export default Main;
