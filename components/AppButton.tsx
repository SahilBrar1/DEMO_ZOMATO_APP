import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface AppButtonProps {
  onPress: () => void;
  name: string;
  color?: string;
}

const AppButton: React.FC<AppButtonProps> = ({ onPress, name, color }) => (
  <TouchableOpacity
    activeOpacity={0.1}
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      color ? { backgroundColor: color } : null,
    ]}
  >
    <Text style={styles.appButtonText}>{name}</Text>
  </TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    // elevation: 8,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  appButtonText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
