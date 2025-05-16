import { commonStyles } from "@/styles/commonStyles";
import { Repository } from "@/types/types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const RepoHeader = ({ repositoryData }: { repositoryData: Repository }) => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: repositoryData.owner?.avatar_url }}
        style={commonStyles.avatar}
      />
      <View style={styles.headerTextContainer}>
        <Text style={commonStyles.headerText}>{repositoryData?.name}</Text>
        <Text style={commonStyles.subTitle}>
          {repositoryData?.owner?.login}
        </Text>
      </View>
    </View>
  );
};

export default RepoHeader;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  headerTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
});
