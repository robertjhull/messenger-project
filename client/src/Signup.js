import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import bubbleSVG from "../src/img/bubble.svg";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import background from "../src/img/bg-img.png";


const useStyles = makeStyles(() => ({
  root : {
    minHeight: "100vh",
    flexWrap: "wrap-reverse",
  },
  imageContainer : {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    minHeight: "75vh",
    minWidth: "315px",
    flex: "1 1 40%",
  },
  imageLayer : {
    backgroundColor: "#3a8cffba", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
  },
  imageText : {
    marginTop: "40px",
    width: "65%",
    fontSize: "2.8rem",
    paddingBottom: 50,
  },
  formContainer : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    flex: "1 1 60%",
  },
  header : {
    height: "20%",
    width: "90%",
    marginLeft: "10%",
  },
  loginWrapper : {
    top: 20,
    right: 20,
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  form : {
    height: "80%",
    width: "60%",
  },
  title : {
    fontSize: "1.9rem",
  },
  formGroup : {
    width: "100%",
    margin: "20px 0",
  },
  loginBtnWrapper : {
    width: "160px",
    height: "56px",
    display: "flex",
    marginLeft: "20px",
    boxShadow: `0px 3px 1px -2px rgb(0 0 0 / 20%), 
                0px 2px 2px 0px rgb(0 0 0 / 14%), 
                0px 1px 5px 0px rgb(0 0 0 / 12%)`,
  },
  createBtnWrapper : {
    width: "160px",
    height: "56px",
    display: "flex",
    margin: "30px auto",
  }
}));

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Box className={classes.imageContainer}>
        <Box className={classes.imageLayer}>
            <img src={bubbleSVG} alt=""></img>
            <Typography className={classes.imageText}>Converse with anyone with any language.</Typography>
        </Box>
      </Box>
      <Box className={classes.formContainer}>
        <Box className={classes.header}>
          <Grid className={classes.loginWrapper}>
            <Typography color="textSecondary">Already have an account?</Typography>
            <Box className={classes.loginBtnWrapper}>
              <Button 
                fullWidth="true"
                color="primary"
                onClick={() => history.push("/login")} >
                  Login
              </Button>
            </Box>
          </Grid>
        </Box>
        <Box className={classes.form}>
          <form onSubmit={handleRegister}>
            <Typography className={classes.title}>Create an account.</Typography>
            <Grid>
              <Grid>
                <FormControl className={classes.formGroup}>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl className={classes.formGroup}>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl className={classes.formGroup} error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl className={classes.formGroup} error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Box className={classes.createBtnWrapper}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  fullWidth="true"
                  color="primary"
                  size="large" >
                  Create
                </Button>
              </Box>
            </Grid>
          </form>
        </Box>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
