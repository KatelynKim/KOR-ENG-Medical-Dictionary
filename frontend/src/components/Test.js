import React from "react";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import { Divider } from "@material-ui/core";
import useStyles from "../style/TestStyle";

function Test(props) { 
  const classes = useStyles(); 
  console.log("PROPS", props)
  return (
    <div className={classes.test}> 
        
    </div>
  );
}

export default Test;
