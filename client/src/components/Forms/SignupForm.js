import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "../../store/utils/thunkCreators";

const SignupForm = (props) => {
  const { user, register, classes } = props;
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
      <Box className={classes.form}>
        <form onSubmit={handleRegister}>
          <Typography variant="h4">Create an account.</Typography>
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
              <Grid container justifyContent="center" >
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  size="large"
                  className={classes.btnWrapper}
                >
                  Create
                </Button>
              </Grid>
          </Grid>
        </form>
      </Box>
    )
}

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
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
  