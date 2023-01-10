import { StatusBar } from "expo-status-bar";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ marginTop: 20 }}>
              <TextInput
                autoFocus
                placeholder="Email"
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                testID="login_input_email"
              />
              <View style={{ marginBottom: 20, height: 40 }}>
                <TextInput
                  secureTextEntry
                  style={styles.input}
                  autoComplete="password"
                  textContentType="password"
                  placeholder={"Password"}
                  testID="login_input_password"
                />
              </View>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ marginBottom: 2 }}>
              <Button
                testID="login_cta_submit"
                title={"Submit"}
                onPress={() => {}}
              />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#545454",
    padding: 20,
  },
  input: {
    color: "#000",
    height: 60,
    padding: 20,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 12,
  },
});
