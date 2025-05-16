import { commonStyles } from "@/styles/commonStyles";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../BackButton";

const RepoError = ({ error }: { error: string }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackButton />
      <View style={commonStyles.stateWrapper}>
        <Text style={commonStyles.subTitle}>{error}</Text>
      </View>
    </SafeAreaView>
  );
};

export default RepoError;
