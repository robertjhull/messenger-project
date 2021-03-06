import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import SignupForm from "./components/Forms/SignupForm";
import LoginForm from "./components/Forms/LoginForm";
import Banner from "./components/Forms/Banner";
import FormHeader from "./components/Forms/FormHeader";
import { theme } from "./themes/theme";

const useStyles = makeStyles((theme) => ({
  root : {
    minHeight: "100vh",
    flexWrap: "wrap-reverse",
  },
  main : {
    minHeight: "100vh",
  },
  form : {
    marginTop: theme.spacing(10),
    width: "60%",
  },
  formGroup : {
    width: "100%",
    margin: "20px 0",
  },
  btnWrapper: {
    marginTop: theme.spacing(3),
  }
}));

const Welcome = ({ loginPage }) => {
  const classes = useStyles(theme);
  return (
    <ThemeProvider theme={classes}>
      <Grid 
        container 
        component="main" 
        className={classes.root} 
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Banner />
        <Grid 
          container 
          item
          xs={12}
          sm={7}
          direction="column" 
          alignItems="center"
          className={classes.main} 
        >
          <FormHeader loginPage={loginPage}/>
          { loginPage ? (
            <LoginForm classes={classes} />
          ) : (
            <SignupForm classes={classes} />
          )}
        </ Grid>
      </Grid>
    </ ThemeProvider>
  );
};

export default Welcome;
