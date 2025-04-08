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