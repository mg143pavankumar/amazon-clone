import React,{useState} from "react";
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
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const submitHandler = async (e) => {
    e.preventDefault();

    try{
      const {data} = await axios.post("/api/users/login", {email, password});
      alert("Successfully logged in");
    }catch(err){
      alert(err.response.data ? err.response.data.message : err.message);
    }

  }
  return (
    <Layout title = "Login">
      <form onSubmit = {submitHandler} className={classes.form}>
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
              onChange = {e => setEmail(e.target.value)}
            />
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: "password" }}
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              onChange = {e => setPassword(e.target.value)}
            />
          </ListItem>

          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login{" "}
            </Button>
          </ListItem>

          <ListItem>
            Do not have an accout? &nbsp;
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
