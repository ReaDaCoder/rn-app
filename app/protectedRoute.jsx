import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import AuthContext from "./authContext";
import { Redirect } from "expo-router";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user === null) {
    return <ActivityIndicator size="large" color="#FF4C52" />;
  }

  return user ? children : <Redirect href="/login" />;
}
