import React from "react";
import FlatlistComponent from "@/components/FlatlistComponent";
import { Button } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <FlatlistComponent />
    </>
  );
};

export default HomeScreen;
