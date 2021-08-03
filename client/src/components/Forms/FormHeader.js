import {
    Grid,
    Typography,
    Button,
    makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { theme } from "../../themes/theme";

const useStyles = makeStyles((theme) => ({
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
            <Typography color="textSecondary" variant="subtitle1">
                {loginPage ? "Don't have an account?" : "Already have an account?" }
            </Typography>
            
            <Button 
               size="large"
               className={classes.headerBtn}
               onClick={() => history.push(loginPage ? "/register" : "/login")}
            >
              {loginPage ? "Create Account" : "Login" }
            </Button>
        </Grid>
    )
} 

export default FormHeader;