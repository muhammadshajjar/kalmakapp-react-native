import React, { useState } from "react";

import { Bars } from "react-loader-spinner";
import { COLORS } from "../constants";
import { View } from "react-native";
const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loader = (
    <View
      style={{
        alignSelf: "center",
        marginTop: 10,
      }}
    >
      {isLoading && (
        <Bars
          height="50"
          width="50"
          color={COLORS.primaryGreen}
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
        />
      )}
    </View>
  );
  return [loader, isLoading, setIsLoading];
};

export default useLoader;
