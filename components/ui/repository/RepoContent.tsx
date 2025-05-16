import { Colors } from "@/constants/Colors";
import { commonStyles } from "@/styles/commonStyles";
import { RepositoryContent } from "@/types/types";
import { AntDesign } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FileItem from "../FileItem";
import Loader from "../Loader";

interface RepoContentProps {
  path: string;
  repositoryContent: RepositoryContent[];
  contentLoader: boolean;
  clearPath: () => void;
  setPath: Dispatch<SetStateAction<string>>;
}

const RepoContent: React.FC<RepoContentProps> = ({
  path,
  repositoryContent,
  contentLoader,
  clearPath,
  setPath,
}) => {
  return (
    <View style={styles.repoContent}>
      <View style={styles.repoContentHead}>
        <View style={styles.repoContentLeft}>
          <AntDesign name="filetext1" size={20} color="white" />
          <Text style={[commonStyles.headerText, { fontSize: 20 }]}>Files</Text>
        </View>
        {path && (
          <Pressable onPress={clearPath} style={styles.repoMoveUp}>
            <Text style={{ color: "#fff" }}>
              <AntDesign name="arrowup" size={18} color="white" />
            </Text>
          </Pressable>
        )}
      </View>

      <View style={styles.repoContentMain}>
        {contentLoader && (
          <View style={{ paddingVertical: 20 }}>
            <Loader />
          </View>
        )}
        {!contentLoader &&
          repositoryContent?.map((item: RepositoryContent, index: number) => {
            return (
              <FileItem
                item={item}
                key={index}
                isLast={index === repositoryContent.length - 1}
                onPress={() => {
                  if (item.type === "dir") {
                    setPath((prev) => prev + `/${item.name}`);
                  }
                }}
              />
            );
          })}
      </View>
    </View>
  );
};

export default RepoContent;

const styles = StyleSheet.create({
  repoContent: {
    gap: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  repoContentHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  repoContentLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  repoMoveUp: {
    backgroundColor: Colors.repBackground,
    padding: 10,
    borderRadius: 10,
  },

  repoContentMain: {
    backgroundColor: Colors.repBackground,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 15,
    marginTop: 10,
  },
});
