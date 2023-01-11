import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.touchable}
        onPress={Keyboard.dismiss}
      >
        <View style={{ marginTop: 20 }}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            testID="login_input_email"
          />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            testID="login_input_password"
          />
          <TouchableOpacity
            testID="login_cta_submit"
            onPress={() => {}}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    paddingVertical: 80,
    paddingHorizontal: 20,
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "space-between",
  },
  touchable: {
    borderColor: "yellow",
    borderWidth: 1,
  },
  keyboardAvoidingView: {
    borderColor: "blue",
    borderWidth: 1,
    flex: 1,
  },
  btn: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    height: 60,
    width: "100%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#545454",
    borderColor: "#888",
    borderWidth: 1,
  },
  btnText: {
    color: "#ddd",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    color: "#000",
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 12,
  },
});
