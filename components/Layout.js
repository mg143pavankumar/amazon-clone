import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import useStyles from "../utils/style";

export default function Layout({ title, desciption, children }) {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Amazon Clone` : `Amazon Clone`}</title>
        {desciption && <meta name="description" content={desciption}></meta>}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>amazon clone</Typography>
              </Link>
            </NextLink>
            <div className={classes.glow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
            </div>
            <div>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Amazon Clone</Typography>
        </footer>{" "}
      </ThemeProvider>
    </div>
  );
}
