import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/components/Main.jsx";
import UselessTextInput from "./src/components/UselessTextInput";
import MenuSelect from "./src/components/MenuSelect";
import { ModalProvider } from "./src/components/Context";
import MenuFlot from "./src/components/MenuFlot";
import Works from "./src/components/Works";
import MonitoreoForm from "./src/components/MonitoreoForm";
import AplicaForm from "./src/components/AplicaForm";
import CosechaForm from "./src/components/CosechaForm";
import { FarmProvider } from "./src/components/FarmContext";
import Login from "./src/components/Login";
import { UserProvider } from "./src/components/UserContext";
import Register from "./src/components/Register";
import LogOut from "./src/components/LogOut";
import Icon from "react-native-vector-icons/Entypo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <FarmProvider>
          <UserProvider>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: "#556b2f",
                  },
                }}
              >
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ title: "" }}
                />
                <Stack.Screen
                  name="MenuFlot"
                  component={MenuFlot}
                  options={{
                    title: "",
                    headerTitle: null,
                    headerLeft: null,
                    headerBackTitleVisible: false,
                    // headerTintColor: "#273469",
                    headerLeft: () => <Icon onPress={() => navigate(null)} />,
                  }}
                />
                <Stack.Screen
                  name="Main"
                  component={Main}
                  options={{ title: "" }}
                />
                <Stack.Screen
                  name="Useless"
                  component={UselessTextInput}
                  options={{ title: "" }}
                />
                <Stack.Screen
                  name="MenuSelect"
                  component={MenuSelect}
                  options={{ title: "" }}
                />
                <Stack.Screen
                  name="Works"
                  component={Works}
                  options={{ title: "" }}
                />
                <Stack.Screen
                  name="MonitoreoForm"
                  component={MonitoreoForm}
                  options={{ title: "" }}
                />
                <Stack.Screen
                  name="AplicaForm"
                  component={AplicaForm}
                  options={{ title: "" }}
                />
                <Stack.Screen
                  name="CosechaForm"
                  component={CosechaForm}
                  options={{ title: "" }}
                />
                <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{ title: "" }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </UserProvider>
        </FarmProvider>
      </ModalProvider>
    </Provider>
  );
}
