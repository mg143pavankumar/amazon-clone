import React, { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
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
import axios from "axios";
import Cookies from "js-cookie";

const RegisterScreen = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  const { redirect } = router.query;

  // check user for existence
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConformPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    }

    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", data);
      router.push(redirect || "/");
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
  };

  return (
    <Layout title="Register">
      <form onSubmit={submitHandler} className={classes.form}>
        <Typography component="h1" variant="h1">
          Register
        </Typography>
        <List>
          <ListItem>
            <TextField
              inputProps={{ type: "text" }}
              variant="outlined"
              fullWidth
              id="name"
              label="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: "email" }}
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: "password" }}
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: "password" }}
              variant="outlined"
              fullWidth
              id="cpassword"
              label="Confirm Password"
              onChange={(e) => setConformPassword(e.target.value)}
            />
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Register{" "}
            </Button>
          </ListItem>

          <ListItem>
            Already have an account?
            <NextLink href={`/login?redirect=${redirect || "/"}`} passHref>
              <Link> Login</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
};

export default RegisterScreen;
