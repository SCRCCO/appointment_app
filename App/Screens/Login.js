import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import SignInWithOAuth from "../../components/SignInWithOAuth";
import persColors from "../../assets/Shared/PersColors";

const screenWidth = Dimensions.get("window").width;

export default function Login() {
  return (
    <View style={{ alignItems: "center", backgroundColor: persColors.gray200 }}>
      <Image
        source={require("../../assets/image_processing20220103-19040-2urele.gif")}
        style={[styles.image, { width: screenWidth }]}
      />
      <View
        style={{
          backgroundColor: persColors.white,
          padding: 25,
          alignItems: "center",
          marginTop: -50,

          borderRadius: 20,
          alignItems: "center",

          width: Dimensions.get("screen").width * 0.9,
        }}
      >
        <Text style={styles.heading}>Xhoj</Text>
        <Text style={styles.heading}>Prenotazione massaggi</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Riservati un momento per te stesso,Prenota ora!
        </Text>
        <SignInWithOAuth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    elevation: 2,
  },
  image: {
    height: 400, // Adjust height as needed
    width: 300, // Make sure the image covers the entire width
  },
});
