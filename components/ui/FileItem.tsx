import { Colors } from "@/constants/Colors";
import { RepositoryContent } from "@/types/types";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface FileItemProps {
  item: RepositoryContent;
  isLast: boolean;
  onPress: () => void;
}

const FileItem: React.FC<FileItemProps> = ({ item, isLast, onPress }) => {
  if (!item) return null;
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, { borderBottomWidth: isLast ? 0 : 1 }]}>
        {item.type === "dir" ? (
          <AntDesign name="folder1" size={18} color="#6DACE4" />
        ) : (
          <AntDesign name="file1" size={18} color="#525961" />
        )}
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

export default FileItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
    borderColor: Colors.file,
    paddingRight: 10,
  },
  text: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "400",
    flex: 1,
  },
});
