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

const RegisterScreen = () => {
  const classes = useStyles();
  return (
    <Layout title = "Register">
      <form className={classes.form}>
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
            />
          </ListItem>
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
            <TextField
              inputProps={{ type: "password" }}
              variant="outlined"
              fullWidth
              id="cpassword"
              label="Confirm Password"
            />
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Register{" "}
            </Button>
          </ListItem>

          <ListItem>
            Already have an accout? &nbsp;{" "}
            <NextLink href="/login" passHref>
              <Link> Login</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
};

export default RegisterScreen;
