import { Colors } from "@/constants/Colors";
import { commonStyles } from "@/styles/commonStyles";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Repository } from "../../types/types";
import Statistic from "./Statistic";

interface RepositoryCardProps {
  item: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ item }) => {
  const id: string = item.id.toString();
  return (
    <Link
      href={{
        pathname: "/repository/[id]",
        params: { id: String(item.id), fullName: item.full_name },
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: item.owner.avatar_url }}
            style={commonStyles.avatar}
          />
          <Text style={styles.name}>{item.full_name}</Text>
        </View>

        <Text style={styles.description} numberOfLines={3}>
          {item.description}
        </Text>

        <View style={styles.topicsContaianer}>
          {item.topics.map((topic, index) => (
            <Text key={index} style={styles.topic}>
              {topic}
            </Text>
          ))}
        </View>
        <Statistic item={item} />
      </View>
    </Link>
  );
};

export default RepositoryCard;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 12,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    flexShrink: 1,
    color: Colors.text,
  },
  description: {
    color: Colors.subText,
    fontSize: 14,
  },
  topicsContaianer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  topic: {
    backgroundColor: Colors.topicBackground,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    color: Colors.topic,
    fontSize: 12,
  },
});
