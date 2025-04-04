import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import { useState } from "react";

type ItemProps = { name: string; id?: number };

const Itemcomponent = ({ name }: ItemProps) => {
  let [color, setColor] = useState("#f8a530");
  return (
    <View style={styles.screenContainer}>
      <AppButton
        name={name}
        onPress={() => setColor("#30f861")}
        color={color}
      />
    </View>
  );
};
export default Itemcomponent;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
