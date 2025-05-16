import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface RepoDetailCardProps {
  name: string;
  value: string;
  icon: React.ReactNode;
}

const RepoDetailCard: React.FC<RepoDetailCardProps> = ({
  name,
  value,
  icon,
}) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.subTitle}>
        {name}: {value}
      </Text>
    </View>
  );
};

export default RepoDetailCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    flex: 1,
    borderRadius: 10,
  },
  subTitle: {
    color: "#fff",
    fontSize: 16,
  },
});
