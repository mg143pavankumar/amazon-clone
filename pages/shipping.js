import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";

const ShippingScreen = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  // check user for existence
  if (!userInfo) {
    router.push("/login?redirect=/shipping");
  }

  return (
    <>
      <h1>Shipping Screen</h1>
    </>
  );
};

export default ShippingScreen;
