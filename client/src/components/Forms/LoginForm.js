import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { login } from "../../store/utils/thunkCreators";

const Login = (props) => {
    const { user, login, classes } = props;
  
    const handleLogin = async (event) => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
  
      await login({ username, password });
    };
  
    if (user.id) {
      return <Redirect to="/home" />;
    }
  
    return (
      <Grid className={classes.form}>
        <form onSubmit={handleLogin}>
          <Typography className={classes.title}>Welcome back!</Typography>
          <Grid>
              <FormControl className={classes.formGroup} required>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
                </FormControl>
              <FormControl className={classes.formGroup} required>
              <TextField
                label="Password"
                aria-label="password"
                type="password"
                name="password"
              />
              </FormControl>
              <Grid 
                container 
                justifyContent="center"
                className={classes.btnWrapper}
              >
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  size="large" >
                  Login
                </Button>
              </Grid>
          </Grid>
        </form>
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
      login: (credentials) => {
        dispatch(login(credentials));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  