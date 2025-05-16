import EmptyContainer from "@/components/ui/EmptyContainer";
import Loader from "@/components/ui/Loader";
import RepositoryCard from "@/components/ui/RepositoryCard";
import Screen from "@/components/ui/Screen";
import { Colors } from "@/constants/Colors";
import useDebounce from "@/hooks/useDebounce";
import githubController from "@/services/github.cotroller";
import { commonStyles } from "@/styles/commonStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

const index = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);
  const [repositories, setRepositories] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasmore, setHasMore] = useState(true);

  const fetchRepositories = useCallback(async () => {
    setLoading(true);
    githubController
      .searchRepositories(debouncedSearch, page)
      .then((res) => {
        setHasMore(res.items.length > 0);
        if (res.items.length === 0) {
          setError("No repositories found");
          return;
        } else if (!repositories.length) {
          setRepositories(res.items);
        } else {
          setRepositories((prev: any) => {
            return [...prev, ...res.items];
          });
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [page, debouncedSearch]);

  useEffect(() => {
    setPage(1);
    setRepositories([]);
    setError("");
    setHasMore(true);
    if (debouncedSearch.length > 3) {
      fetchRepositories();
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (page > 1 && hasmore) {
      fetchRepositories();
    }
  }, [page]);

  const handleLoadMore = () => {
    if (!loading && repositories.length > 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Screen>
      <View style={commonStyles.container}>
        <Text style={commonStyles.headerText}>Github Search</Text>
        <View style={styles.search}>
          <AntDesign name="github" size={24} color="black" />
          <TextInput
            placeholder="Search Github"
            onChangeText={(text) => setSearch(text)}
            style={styles.searchInput}
            value={search}
          />
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 30, gap: 10 }}
          data={repositories}
          renderItem={({ item }) => <RepositoryCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={loading ? <Loader /> : null}
          ListEmptyComponent={
            <EmptyContainer loading={loading} isEmpty={error ? true : false} />
          }
        />
      </View>
    </Screen>
  );
};

export default index;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.search,
    borderRadius: 5,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 44,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});
