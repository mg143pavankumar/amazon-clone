import React from "react";
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

const LoginScreen = () => {
  const classes = useStyles();
  return (
    <Layout title = "Login">
      <form className={classes.form}>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              inputProps={{ type: "email" }}
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
            />
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: "password" }}
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
            />
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login{" "}
            </Button>
          </ListItem>

          <ListItem>
            Don't have an accout? &nbsp;
            <NextLink href="/register" passHref>
              <Link> Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
};

export default LoginScreen;
