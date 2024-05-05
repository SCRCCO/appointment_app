import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, Dimensions } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import persColors from "../assets/Shared/PersColors";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId && setActive) {
        // Added setActive to the check
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 16,
        backgroundColor: persColors.blue500,
        borderRadius: 90,
        alignItems: "center",
        marginTop: 20,
        width: Dimensions.get("screen").width * 0.8,
      }}
    >
      <Text
        style={{
          fontSize: 17,
          color: persColors.white,
          fontWeight: "bold",
        }}
      >
        Login con Google
      </Text>
    </TouchableOpacity>
  );
};
export default SignInWithOAuth;
