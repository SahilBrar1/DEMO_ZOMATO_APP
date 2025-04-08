<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FlatlistComponent from "@/components/FlatlistComponent";
// import Mybutton from "@/components/Mybutton";
// import Login from "@/screens/login";

const index = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Mybutton />
      <Login /> */}
      <FlatlistComponent />
    </QueryClientProvider>
  );
};

export default index;
// import React from "react";
//  import Mybutton from "@/components/Mybutton";
//  import Login from "@/screens/Login";
//  import { View } from "react-native";
//  const index = () => {
    
  
//      return (
//        <View>
       
//          <Login />
//          </View>
//      );
//    };
  
//    export default index;
=======
import { registerRootComponent } from "expo";
import App from "../App";

registerRootComponent(App);
>>>>>>> 601e7e0 (navigation)
=======
import { registerRootComponent } from "expo";
import App from "../App";

registerRootComponent(App);
>>>>>>> 601e7e0 (navigation)
=======
import { registerRootComponent } from "expo";
import App from "../App";

registerRootComponent(App);
>>>>>>> origin/logic-dev
