import { View, FlatList, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ItemComponent from "./ItemComponent";
import { fetchPosts } from "../apis/api";

const FlatlistComponent = () => {
  //useQuery
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  //useQuery

  if (isLoading) {
    return <Text style={styles.text}>Loading....</Text>;
  }
  if (isError) {
    return <Text style={styles.text}>Error fetching data!</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemComponent name={item.name} />}
      />
    </View>
  );
};

export default FlatlistComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding: 10,
  },
  text: {
    fontSize: 60,
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
