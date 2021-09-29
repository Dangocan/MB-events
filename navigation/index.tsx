/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Image, View, Text } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import Events from "../screens/Events";
import EventsSubscribed from "../screens/EventsSubscribed";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import { GlobalContext } from "../App";
import LinkingConfiguration from "./LinkingConfiguration";
import { useContext } from "react";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group
        screenOptions={({ navigation }) => ({ presentation: "modal" })}
      >
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const state = useContext(GlobalContext);
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Events"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#161616" },
        tabBarActiveTintColor: "#EBC733",
      }}
    >
      <BottomTab.Screen
        name="Events"
        component={Events}
        options={({ navigation }: RootTabScreenProps<"Events">) => ({
          title: "Events",
          headerStyle: { backgroundColor: "#161616" },
          headerTitle: () => (
            <Text style={{ color: "#ffffff", fontSize: 20 }}>Events</Text>
          ),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar-o" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() =>
                !state.user
                  ? navigation.navigate("Modal")
                  : state.setUser(false)
              }
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="user-circle-o"
                size={25}
                color="#ffffff"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("Events")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <View style={{ width: 60, height: 60, overflow: "hidden" }}>
                <Image
                  source={{ uri: "https://mblabs.com.br/Images/logo.png" }}
                  style={{
                    top: 8,
                    width: 60,
                    height: 75,
                    marginLeft: 5,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="EventsSubscribed"
        component={EventsSubscribed}
        options={({ navigation }: RootTabScreenProps<"EventsSubscribed">) => ({
          title: "Subscribed",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar-check-o" color={color} />
          ),
          headerStyle: { backgroundColor: "#161616" },
          headerTitle: () => (
            <Text style={{ color: "#ffffff", fontSize: 20 }}>
              Events Subscribed
            </Text>
          ),
          headerRight: () => (
            <Pressable
              onPress={() =>
                !state.user
                  ? navigation.navigate("Modal")
                  : state.setUser(false)
              }
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="user-circle-o"
                size={25}
                color="#ffffff"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("Events")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <View style={{ width: 60, height: 60, overflow: "hidden" }}>
                <Image
                  source={{ uri: "https://mblabs.com.br/Images/logo.png" }}
                  style={{
                    top: 8,
                    width: 60,
                    height: 75,
                    marginLeft: 5,
                    resizeMode: "cover",
                  }}
                />
              </View>
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
