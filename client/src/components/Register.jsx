import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Button,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { KJUR } from "jsrsasign";
import { APP_NAME } from "@env";
import { createUser, postUser } from "../actions";

const Register = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ user: "", nohashedPassword: "" });

  const changeUser = (e) => {
    setUser(() => {
      return {
        ...user,
        user: e.trim(),
      };
    });
  };

  const changePwd = (e) => {
    setUser(() => {
      return {
        ...user,
        nohashedPassword: e.trim(),
      };
    });
  };

  // Header
  var oHeader = { alg: "HS256", typ: "JWT" };
  // Payload
  var oPayload = {};
  var tNow = KJUR.jws.IntDate.get("now");
  var tEnd = KJUR.jws.IntDate.get("now + 1hour");
  oPayload.nbf = tNow;
  oPayload.iat = tNow;
  oPayload.exp = tEnd;
  oPayload.jti = { user };
  // Sign JWT
  var sHeader = JSON.stringify(oHeader);
  var sPayload = JSON.stringify(oPayload);
  var sJWT = KJUR.jws.JWS.sign(
    "HS256",
    sHeader,
    sPayload,
    "PEDRO123456pedro%&789456PEDRO%&123456pedro789456ACSOJA"
  );

  const sendUser = (e) => {
    if (user.user && user.nohashedPassword && sJWT) {
      e.preventDefault();
      dispatch(createUser(sJWT));
      setUser({ user: "", nohashedPassword: "" });
    }
  };

  return (
    <View style={styles.cocontainer}>
      <Text style={styles.welcome}>Sign up!</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={changeUser}
          value={user.user}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={changePwd}
          value={user.nohashedPassword}
          placeholder="Password"
        />
      </SafeAreaView>
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={sendUser}>
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cocontainer: {
    paddingTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 50,
    fontStyle: "oblique",
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
});

export default Register;
