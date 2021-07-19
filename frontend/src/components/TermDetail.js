import React from "react";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import { Divider } from "@material-ui/core";
import useStyles from "../style/TermDetailStyle";

function TermDetail() {
  console.log("you are now in term details page")
  const location = useLocation(); 
  const classes = useStyles();
  const data = location.state.translation; 

  return (

    <div >
      <div className={classes.detailContainer}>
        <Typography className={classes.koreanTerm}>{data.original_term} - {data.english} </Typography>
        <Divider />
        <Typography className={classes.abbreviation}>          
          Abbreviations:  {data.abbreviation}         
        </Typography>
        <Typography className={classes.description}>{data.information}</Typography>
        <Divider />
        <p>Scraped from <a href="https://en.wikipedia.org/wiki/Main_Page">Wikipedia </a></p>
      </div>
    </div>
  );
}

export default TermDetail;
