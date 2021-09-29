import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useContext } from "react";
import { View, Text } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { GlobalContext } from "../../App";
import EventCard from "../../components/EventCard";
import { IEventCard, RootTabScreenProps } from "../../types";

const Events = ({ navigation }: any) => {
  const state = useContext(GlobalContext);

  return (
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
          Free Events:
        </Text>
        <FlatList
          renderItem={({ item }) => (
            <EventCard nav={navigation} event={item as IEventCard} />
          )}
          data={state.eventDummy.filter((item) => !item.prize && item)}
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
          Paid Events:
        </Text>
        <FlatList
          data={state.eventDummy.filter((item) => item.prize && item)}
          renderItem={({ item }) => (
            <EventCard nav={navigation} event={item as IEventCard} />
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
  );
};

export default Events;
