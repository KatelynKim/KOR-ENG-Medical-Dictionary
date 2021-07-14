import useStyles from "../style/HeaderStyle";
import { Typography } from "@material-ui/core";

const Header = () => {
    const classes = useStyles();


    return (
      <div className={classes.header}> 
        <Typography className={classes.appTitle}>
            KOR-ENG Medical Dictionary
        </Typography>
      </div>
    );
  };
  
  export default Header;
  