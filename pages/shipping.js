import React from "react";
import { useRouter } from "next/router";

const ShippingScreen = () => {
  const router = useRouter();
  router.push("/login");

  return <div>Shipping Screen</div>;
};

export default ShippingScreen;
