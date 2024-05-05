import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Button, TouchableOpacity } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import persColors from "../../assets/Shared/PersColors";
import Header from "../Components/Home/Header";
import SearchBar from "../Components/Home/SearchBar";

export default function Home() {
  const { isLoaded, signOut } = useAuth();

  return (
    <View style={{ padding: 20 }}>
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
    </View>
  );
}
