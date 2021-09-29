import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useContext, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import EventCard from "../../components/EventCard";
import { GlobalContext } from "../../App";
import { IEventCard } from "../../types";

const Events = ({ navigation }: any) => {
  const state = useContext(GlobalContext);

  return state.eventDummy?.length > 0 && state.user ? (
    <ScrollView
      style={{
        padding: 20,
        paddingRight: 0,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        <Text
          style={{
            alignSelf: "flex-start",
            fontSize: 20,
            fontWeight: "bold",
            margin: 20,
            marginTop: 0,
          }}
        >
          Your Free Events:
        </Text>
        <FlatList
          renderItem={({ item }) => (
            <EventCard nav={navigation} subed event={item as IEventCard} />
          )}
          data={state.eventDummy?.filter((item) => !item.prize && item)}
          keyExtractor={(item) => item.name}
          horizontal
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: "100%",
                width: 40,
              }}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          left: -10,
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "#d4d4d4",
        }}
      />
      <View>
        <Text
          style={{
            alignSelf: "flex-start",
            fontSize: 20,
            fontWeight: "bold",
            margin: 20,
          }}
        >
          Your Paid Events:
        </Text>
        <FlatList
          data={state.eventDummy?.filter((item) => item.prize && item)}
          renderItem={({ item }) => (
            <EventCard nav={navigation} subed event={item as IEventCard} />
          )}
          keyExtractor={(item) => item.name}
          horizontal
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: "100%",
                width: 40,
              }}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  ) : (
    <View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#000000",
          height: "250%",
          width: "100%",
          opacity: 0.2,
          zIndex: 2,
        }}
      />
      <Image
        source={{ uri: "https://mblabs.com.br/Images/logo.png" }}
        style={{
          top: "40%",
          left: "5%",
          width: "90%",
          height: 280,
          resizeMode: "stretch",
        }}
      />
      <Text
        style={{
          textAlign: "center",
          position: "absolute",
          backgroundColor: "#F2F2F2",
          color: "#66519E",
          fontSize: 40,
          fontWeight: "bold",
          top: 290,
          left: "5%",
          width: "90%",
          paddingBottom: 50,
        }}
      >
        Oops! No events subscribed yet.
      </Text>
      {!state.user && (
        <>
          <Text
            style={{
              textAlign: "center",
              position: "absolute",
              backgroundColor: "#F2F2F2",
              color: "#66519E",
              fontSize: 20,
              top: 430,
              left: "5%",
              width: "90%",
            }}
          >
            You are not logged in.
          </Text>
          <Pressable
            style={{
              position: "absolute",
              backgroundColor: "#1E1E1E",
              top: 480,
              left: "35%",
              borderRadius: 20,
              borderWidth: 2,
              padding: 5,
              width: 120,
              zIndex: 5,
            }}
            onPress={() => navigation.navigate("Modal")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#ffcd00",
                fontSize: 20,
                fontWeight: "bold",
                zIndex: 3,
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default Events;
function GlogalContext(GlogalContext: any) {
  throw new Error("Function not implemented.");
}
