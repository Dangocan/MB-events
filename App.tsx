import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { IEventCard } from "./types";

interface IGlobalContext {
  user: any;
  setUser?: any;
  eventDummy: IEventCard[];
}

export const GlobalContext = React.createContext<IGlobalContext>({
  user: false,
  eventDummy: [
    {
      name: "FrontEnd Nacional Conference",
      description:
        "A national frontEnd Conference, tons of knowledge in your hands for free",
      date: new Date(2022, 10, 1),
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    },
    {
      name: "BackEnd Nacional Conference",
      description:
        "A national BackEnd Conference, tons of knowledge in your hands for free",
      date: new Date(2022, 6, 10),
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    },
    {
      name: "FrontEnd Nacional Conference P",
      description:
        "A national frontEnd Conference, tons of knowledge in your hands for free",
      date: new Date(2022, 10, 1),
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
      prize: "300,00",
    },
    {
      name: "BackEnd Nacional Conference P",
      description:
        "A national BackEnd Conference, tons of knowledge in your hands for free",
      date: new Date(2022, 6, 10),
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
      prize: "300,00",
    },
  ],
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [user, setUser] = useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <GlobalContext.Provider
          value={{
            user: user,
            setUser: setUser,
            eventDummy: [
              {
                name: "FrontEnd Nacional Conference",
                description:
                  "A national frontEnd Conference, tons of knowledge in your hands for free",
                date: new Date(2022, 10, 1),
                details:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
              },
              {
                name: "BackEnd Nacional Conference",
                description:
                  "A national BackEnd Conference, tons of knowledge in your hands for free",
                date: new Date(2022, 6, 10),
                details:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
              },
              {
                name: "FrontEnd Nacional Conference P",
                description:
                  "A national frontEnd Conference, tons of knowledge in your hands for free",
                date: new Date(2022, 10, 1),
                details:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
                prize: "300,00",
              },
              {
                name: "BackEnd Nacional Conference P",
                description:
                  "A national BackEnd Conference, tons of knowledge in your hands for free",
                date: new Date(2022, 6, 10),
                details:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
                prize: "300,00",
              },
            ],
          }}
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </GlobalContext.Provider>
      </SafeAreaProvider>
    );
  }
}
