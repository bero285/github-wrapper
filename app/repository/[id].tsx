import BackButton from "@/components/ui/BackButton";
import RepoContent from "@/components/ui/repository/RepoContent";
import RepoDetailCard from "@/components/ui/repository/RepoDetailCard";
import RepoError from "@/components/ui/repository/RepoError";
import RepoHeader from "@/components/ui/repository/RepoHeader";
import RepoLoading from "@/components/ui/repository/RepoLoading";
import Screen from "@/components/ui/Screen";
import Statistic from "@/components/ui/Statistic";
import { Colors } from "@/constants/Colors";
import githubController from "@/services/github.cotroller";
import { commonStyles } from "@/styles/commonStyles";
import { Repository, RepositoryContent } from "@/types/types";
import { formatDate } from "@/utils/formatDate";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const RepositoryScreen = () => {
  const { fullName } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [contentLoader, setContentLoader] = useState(false);
  const [error, setError] = useState("");
  const [path, setPath] = useState("");
  const [repositoryData, setRepositoryData] = useState<Repository>(
    {} as Repository
  );
  const [repositoryContent, setRepositoryContent] = useState<
    RepositoryContent[]
  >([] as RepositoryContent[]);

  useEffect(() => {
    setLoading(true);
    githubController
      .getRepositoryData(String(fullName))
      .then((res) => {
        setRepositoryData(res);
      })
      .catch((err) => {
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fullName]);

  const fetchContent = () => {
    setContentLoader(true);
    githubController
      .getRepositoryContent(String(fullName), path)
      .then((res) => {
        setRepositoryContent(res);
      })
      .catch((err) => {
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setContentLoader(false);
      });
  };

  useEffect(() => {
    fetchContent();
  }, [path]);

  const clearPath = () => {
    if (path && !contentLoader) {
      const pathArray = path.split("/");
      pathArray.pop();
      setPath(pathArray.join("/"));
    }
  };

  if (loading) {
    return <RepoLoading />;
  }

  if (error) {
    return <RepoError error={error} />;
  }

  return (
    <Screen>
      <BackButton />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={commonStyles.container}>
          <RepoHeader repositoryData={repositoryData} />
          <Text style={styles.description}>
            {repositoryData?.description
              ? repositoryData?.description
              : "No description"}
          </Text>

          <View style={styles.repoDetails}>
            <Statistic item={repositoryData} />
          </View>

          <View style={styles.repoDetails}>
            <RepoDetailCard
              name="Created"
              value={formatDate(repositoryData?.created_at)}
              icon={<AntDesign name="calendar" color="white" size={16} />}
            />
            <RepoDetailCard
              name="Updated"
              value={formatDate(repositoryData?.updated_at)}
              icon={<AntDesign name="calendar" color="white" size={16} />}
            />
            <RepoDetailCard
              name="Language"
              value={repositoryData?.language}
              icon={<Feather name="code" color="white" size={16} />}
            />
          </View>

          <RepoContent
            repositoryContent={repositoryContent}
            contentLoader={contentLoader}
            setPath={setPath}
            path={path}
            clearPath={clearPath}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default RepositoryScreen;

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    color: Colors.text,
    marginTop: 10,
  },
  repoDetails: {
    backgroundColor: Colors.repBackground,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 15,
  },
});
