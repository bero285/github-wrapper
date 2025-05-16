import { commonStyles } from "@/styles/commonStyles";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../BackButton";
import Loader from "../Loader";

const RepoLoading = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackButton />
      <View style={commonStyles.stateWrapper}>
        <Loader />
      </View>
    </SafeAreaView>
  );
};

export default RepoLoading;
