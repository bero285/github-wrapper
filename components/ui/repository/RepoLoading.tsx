import { commonStyles } from "@/styles/commonStyles";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../BackButton";
import Loader from "../Loader";
import Screen from "../Screen";

const RepoLoading = () => {
  return (
    <Screen>
      <BackButton />
      <View style={commonStyles.stateWrapper}>
        <Loader />
      </View>
    </Screen>
  );
};

export default RepoLoading;
