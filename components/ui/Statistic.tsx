import { Repository } from "@/types/types";
import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Statistic = ({ item }: { item: Repository }) => {
  return (
    <View style={styles.statistic}>
      <View style={styles.stat}>
        <Feather name="star" size={16} color="#f4c542" />
        <Text style={styles.statText}>{item.stargazers_count}</Text>
      </View>
      <View style={styles.stat}>
        <Feather name="git-branch" size={16} color="#aab2bd" />
        <Text style={styles.statText}>{item.forks_count}</Text>
      </View>
      <View style={styles.stat}>
        <AntDesign name="eyeo" size={16} color="#aab2bd" />
        <Text style={styles.statText}>{item.watchers_count}</Text>
      </View>
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  statistic: {
    flexDirection: "row",
    gap: 25,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statText: {
    color: "#e0e0e0",
    fontSize: 14,
  },
});
