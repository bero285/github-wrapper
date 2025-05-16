import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const BackButton = () => {
  const router = useRouter();
  return (
    <View style={styles.backButtonContainer}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <AntDesign name="arrowleft" size={20} color="white" />
      </Pressable>
    </View>
  );
};
export default BackButton;

const styles = StyleSheet.create({
  backButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "flex-start",
  },
  backButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.dark,
  },
});
