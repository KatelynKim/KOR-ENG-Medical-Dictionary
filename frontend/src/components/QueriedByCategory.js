import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import { Divider, Table } from "@material-ui/core";
import useStyles from "../style/QueriedByCategoryStyle";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableCell,
  TableContainer,
} from "@material-ui/core";

function QueriedByCategory(props) {
  const classes = useStyles();
  const category = props.category;
  const termArray = props.queriedList; 
    
    // if (termArray && !!termArray.length) {
    //   termArray.forEach((term) => {
    //     if (term.category.includes(category.id)) {
    //         setQueriedList([...queriedList, term]) 
    //     }
    //   });
    // }  

console.log("TERMARRAY DATA", termArray)

  return (
    <div className={classes.container}>
      Showing results for "{category.name}"
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small">
          <TableHead>
            <TableRow className={classes.row}>
              <TableCell align="center">Term</TableCell>
              <TableCell align="left">Translation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {termArray &&
              termArray.map((row) => {
                return (
                  <TableRow key={row.term}>
                    <TableCell align="center">
                      <Typography> {row.term}</Typography>
                    </TableCell>
                    <TableCell align="left">
                      {row.translations.map((translation, i) => (
                        <Typography key={i} className={classes.translated}>
                          {translation.english}
                        </Typography>
                      ))}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default QueriedByCategory;
