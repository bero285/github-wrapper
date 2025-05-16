import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    flex: 1,
    gap: 20,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.subText,
  },
  stateWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    flex: 1,
    paddingBottom: 64,
  },
});
