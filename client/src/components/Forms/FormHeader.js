import {
    Grid,
    Typography,
    Button,
    makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { theme } from "../../themes/theme";

const useStyles = makeStyles((theme) => ({
    headerText : {
        fontSize: ".9rem",
    },
    headerBtn : {
        margin: "30px 40px 30px 20px",
        color: `${theme.palette.primary.main}`,
        background: "transparent",
    },
}));

const FormHeader = ({ loginPage }) => {
    const history = useHistory();
    const classes = useStyles(theme);

    return (
        <Grid 
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography color="textSecondary" className={classes.headerText}>
                {loginPage ? "Don't have an account?" : "Already have an account?" }
            </Typography>
            
            {loginPage ? (
              <Button 
                size="large"
                className={classes.headerBtn}
                onClick={() => history.push("/register")}
              >
                Create Account
              </Button>
            ) : (
              <Button 
                size="large"
                className={classes.headerBtn}
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
            )}
        </Grid>
    )
} 

export default FormHeader;