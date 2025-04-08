import React from "react";
import { AuthProvider } from "./authContext";
import { Slot } from "expo-router";
import { AppRegistry } from "react-native";
// import homePage from "./home";
import HomePage from "./home";

import { name as appName } from "../app.json";

export default function App() {
  return (
    <AuthContext.Provider value={{ user, setUser, auth, setAuth, logout }}>
  {children}
</AuthContext.Provider>

    // <AuthProvider>
    //   <homePage/>
    // </AuthProvider>
  );
}

AppRegistry.registerComponent(appName, () => Root);
