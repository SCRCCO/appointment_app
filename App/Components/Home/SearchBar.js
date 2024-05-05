import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import persColors from "../../../assets/Shared/PersColors";
import { useState } from "react";

export default function SearchBar({ setSearchText }) {
  const [searchInput, setSearchinput] = useState();
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          borderWidth: 0.6,
          borderColor: persColors.gray400,
          padding: 10,
          borderRadius: 30,
          backgroundColor: persColors.white,
        }}
      >
        <View></View>
        <Ionicons name="search-outline" size={24} color={persColors.blue700} />
        <TextInput
          placeholder="Cerca i servizi disponibili"
          onChangeText={(value) => setSearchinput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
          style={{
            width: "80%",
          }}
        />
      </View>
    </View>
  );
}
