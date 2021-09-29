import { Link } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useContext } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { nativeViewProps } from "react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler";
import { color } from "react-native-reanimated";
import { IEventCard } from "../../types";
import { GlobalContext } from "../../App";

interface EventCardProps {
  event: IEventCard;
  nav: any;
  subed?: any;
}

const EventCard: React.FunctionComponent<EventCardProps> = ({
  event,
  nav,
  subed,
}) => {
  const state = useContext(GlobalContext);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#f9f9f9",

        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10,

        borderLeftColor: "#d3d3d3",
        borderBottomColor: "#d3d3d3",
        borderLeftWidth: 0.5,
        borderBottomWidth: 0.5,

        borderRadius: 5,
        width: 280,
        height: 460,
        padding: 10,
      }}
      onPress={() => console.log(state)}
    >
      <Image
        style={{
          width: 260,
          height: 200,
          resizeMode: "stretch",
          borderRadius: 5,
        }}
        source={{
          uri: "https://community.devexpress.com/blogs/news/Conferences/2020/FEDL%20Amsterdam/Frontend-Developer-Love.png",
        }}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {event.name}
        </Text>
        <Text style={{ color: "#000", textAlign: "center" }}>
          {event.description}
        </Text>
        <View
          style={{
            position: "relative",
            top: 20,
            borderColor: "#000",
            opacity: 0.2,
            borderWidth: 1,
            width: "110%",
            height: 0,
            alignItems: "center",
          }}
        />
        <View
          style={{
            width: "60%",
            backgroundColor: "#ffffff",
          }}
        >
          <Text style={{ color: "#000", textAlign: "center" }}>
            {event.date.toDateString()}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            opacity: !subed ? 1 : 0.4,
            backgroundColor: "#7802F5",
            borderRadius: 5,
            padding: 5,
            minWidth: 140,
            alignItems: "center",

            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 4,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
          }}
          onPress={() => {
            if (!subed)
              state.user ? console.log("inscrever") : nav.navigate("Modal");
          }}
        >
          <Text style={{ color: "#ffffff", textAlign: "center" }}>
            {!subed ? "Subscribe" : "Already Subscribed"}
          </Text>
        </TouchableOpacity>
        <Text
          style={{ color: "#000", textDecorationLine: "underline" }}
          onPress={() => {
            state.user ? console.log("Details") : nav.navigate("Modal");
          }}
        >
          Event Details
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
