import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { useContext, useState } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import navigation from "../navigation";
import { GlobalContext } from "../App";

export default function ModalScreen({ navigation }: any) {
  const state = useContext(GlobalContext);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#1E1E1E",
      }}
    >
      <Image
        source={{ uri: "https://mblabs.com.br/Images/logo.png" }}
        style={{
          width: "50%",
          height: 140,
          resizeMode: "stretch",
          zIndex: 1,
        }}
      />
      <View
        style={{
          padding: 50,
          paddingLeft: 25,
          paddingRight: 25,
          alignItems: "center",
          backgroundColor: "1E1E1E",
          borderColor: "#66519E",
          borderWidth: 1,
          borderRadius: 5,
          zIndex: 2,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#66519E",
          }}
        >
          Login
        </Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#66519E"
          style={{
            marginTop: 40,
            marginBottom: 20,
            fontSize: 18,
            paddingLeft: 10,
            height: 40,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#66519E",
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#66519E"
          onFocus={() => setIsFocused(false)}
          onBlur={() => setIsFocused(true)}
          style={{
            fontSize: 18,
            paddingLeft: 10,
            height: 40,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#66519E",
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
      <TouchableOpacity
        style={{
          marginTop: 40,
          marginBottom: 20,
          paddingLeft: 10,
          height: 40,
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#7802F5",
          borderWidth: 1,
          borderRadius: 5,
        }}
        onPress={() => {
          state.setUser(true);
          navigation.goBack();
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
