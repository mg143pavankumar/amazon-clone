import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },

  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },

  glow: {
    flexGrow: 1,
  },

  main: {
    minHeight: "80vh",
  },

  footer: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },

  section: {
    marginTop: 10,
    marginBottom: 20,
  },

  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },
  transparentBg: {
    backgroundColor: "transparent",
  },
});

export default useStyles;
