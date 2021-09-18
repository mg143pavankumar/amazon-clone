import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import {
  Typography,
  List,
  ListItem,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import useStyles from "../utils/style";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";

import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";
import CheckoutWizard from "../components/CheckoutWizard";

const Shipping = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const router = useRouter();
  const { redirect } = router.query;

  // check user for existence
  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/shipping");
    }

    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, []);

  const submitHandler = async ({
    fullName,
    address,
    city,
    postalCode,
    country,
  }) => {
    // saving data into the cookies
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    router.push("/payment");
  };

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography component="h1" variant="h1">
          Shipping Address
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLenght: 2,
              }}
              render={({ field }) => (
                <TextField
                  inputProps={{ type: "text" }}
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === "minLenght"
                        ? "Full Name lenght is more than 1"
                        : "Full Name is required"
                      : ""
                  }
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  {...field}
                />
              )}
            />
          </ListItem>
          <ListItem>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLenght: 5,
              }}
              render={({ field }) => (
                <TextField
                  inputProps={{ type: "text" }}
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === "minLenght"
                        ? "Address lenght is more than 5"
                        : "Address is required"
                      : ""
                  }
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"
                  {...field}
                />
              )}
            />
          </ListItem>
          <ListItem>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLenght: 2,
              }}
              render={({ field }) => (
                <TextField
                  inputProps={{ type: "text" }}
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === "minLenght"
                        ? "City lenght is more than 1"
                        : "City Name is required"
                      : ""
                  }
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="City"
                  {...field}
                />
              )}
            />
          </ListItem>
          <ListItem>
            <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLenght: 2,
              }}
              render={({ field }) => (
                <TextField
                  inputProps={{ type: "text" }}
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? errors.postalCode.type === "minLenght"
                        ? "Postal Code lenght is more than 1"
                        : "Postal Code is required"
                      : ""
                  }
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="Postal Code"
                  {...field}
                />
              )}
            />
          </ListItem>
          <ListItem>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLenght: 2,
              }}
              render={({ field }) => (
                <TextField
                  inputProps={{ type: "text" }}
                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === "minLenght"
                        ? "Country lenght is more than 1"
                        : "Country is required"
                      : ""
                  }
                  variant="outlined"
                  fullWidth
                  id="country"
                  label="Country"
                  {...field}
                />
              )}
            />
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Continue{" "}
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
};

export default Shipping;
