import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Ratebutton from "./Ratebutton";
<<<<<<< HEAD
import SearchBar from "./SearchBar";
=======
>>>>>>> 54b040124280cf6f87b26e0ceb6f09792398a191

interface AppButtonProps {
  onPress?: () => void;
  name: string;
  color?: string;
}

const AppButton: React.FC<AppButtonProps> = ({ name }) => (
<<<<<<< HEAD
  <TouchableOpacity
    activeOpacity={0.1}
    style={[
      styles.appButtonContainer,
    ]}
  ><View>
    </View>
    
    <View>

    <Image style={styles.img} source={require('../assets/images/pizzaimg.jpg') } resizeMode="cover"/>
    </View>
    <View style={styles.time} >
    <Ionicons name="time"  />
    <Text>23 min  </Text>
   
    <Text>  2.2km</Text>
    </View>
    <View style={styles.textflex} >
    <Text style={styles.appButtonText}>{name}</Text>
   <Ratebutton/>
   </View>
   
=======
  <TouchableOpacity activeOpacity={0.1} style={[styles.appButtonContainer]}>
    <View>
      <Image
        style={styles.img}
        source={require("../assets/images/pizzaimg.jpg")}
        resizeMode="cover"
      />
    </View>
    <View style={styles.time}>
      <Ionicons name="time" />
      <Text>23 min</Text>

      <Text> 2.2km</Text>
    </View>
    <View style={styles.textflex}>
      <Text style={styles.appButtonText}>{name}</Text>
      <Ratebutton />
    </View>
>>>>>>> 54b040124280cf6f87b26e0ceb6f09792398a191
    <Text>flat Rs. 150 off above Rs. 299</Text>
  </TouchableOpacity>

);

export default AppButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    height: 280,
    borderWidth: 3,
    borderRadius: "7%",
  },
  appButtonText: {
<<<<<<< HEAD
  fontSize:20,
=======
    fontSize: 18,
>>>>>>> 54b040124280cf6f87b26e0ceb6f09792398a191
    color: "black",
    fontWeight: "bold",
  },
  img: {
    height: 200,
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  time: {
    display: "flex",
    flexDirection: "row",
  },
  dot: {
    fontWeight: "bold",
  },
  textflex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
