import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem("jwtToken");
      if (token) {
        setUser({ token });
      }
    };
    loadToken();
  }, []);

  
  const login = async (token) => {
    try {
      await AsyncStorage.setItem("jwtToken", token);
      setUser({ token });
    } catch (error) {
      console.error("Error storing token:", error);
    }
  };

  
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("jwtToken");
      setUser(null);
    } catch (error) {
      console.error("Error removing token:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
