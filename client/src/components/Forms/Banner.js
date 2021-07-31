import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import bubbleSVG from "../../img/bubble.svg";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import background from "../../img/bg-img.png";
import { theme } from "../../themes/theme";

const useStyles = makeStyles((theme) => ({
  background : {
    background: `linear-gradient(${theme.palette.fade.main}, ${theme.palette.fade.light}), url(${background}) repeat`,
    backgroundSize: "cover",
    height: "100vh",
    color: "#fff",
    textAlign: "center",
  },
  imageText : {
    width: "70%",
    fontSize: "1.8rem",
    margin: "40px 0"
  },
}));

const Banner = () => {
    const classes = useStyles(theme);
    return (
        <Grid 
            container 
            item
            xs={12}
            sm={5}
            className={classes.background} 
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <img src={bubbleSVG} alt=""></img>
            <Typography className={classes.imageText}>
                Converse with anyone with any language.
            </Typography>
        </Grid>
    )
}

export default Banner;