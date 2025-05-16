import { commonStyles } from "@/styles/commonStyles";
import React from "react";
import { Text, View } from "react-native";
import BackButton from "../BackButton";
import Screen from "../Screen";

const RepoError = ({ error }: { error: string }) => {
  return (
    <Screen>
      <BackButton />
      <View style={commonStyles.stateWrapper}>
        <Text style={commonStyles.subTitle}>{error}</Text>
      </View>
    </Screen>
  );
};

export default RepoError;
