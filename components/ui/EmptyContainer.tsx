import { Colors } from "@/constants/Colors";
import { commonStyles } from "@/styles/commonStyles";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface EmptyContainerProps {
  isEmpty: boolean;
  loading: boolean;
}

const EmptyContainer: React.FC<EmptyContainerProps> = ({
  isEmpty,
  loading,
}) => {
  if (loading) return null;
  return (
    <View style={styles.container}>
      <FontAwesome
        name={isEmpty ? "exclamation-circle" : "search"}
        size={48}
        color={Colors.subText}
        style={styles.icon}
      />
      <Text style={commonStyles.headerText}>
        {isEmpty ? "No repositories found" : "Start searching"}
      </Text>
      <Text style={styles.subtitle}>
        {isEmpty
          ? "We couldn't find any repositories with that name."
          : "Search for GitHub repositories by name."}
      </Text>
    </View>
  );
};

export default EmptyContainer;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
    gap: 12,
  },
  icon: {
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 16,
    color: Colors.subText,
    textAlign: "center",
    maxWidth: 280,
  },
});
