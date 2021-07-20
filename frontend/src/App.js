import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import useStyles from "./style/AppStyle";
import { TextField } from "@material-ui/core";
import useFullPageLoader from "./components/useFullPageLoader";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "./reducers/wordReducer";
import { Backdrop } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
function App() {
  let [text, setText] = useState([]);
  let [suggestions, setSuggestions] = useState([]);

  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const classes = useStyles();
  const history = useHistory();  

  const dataLoadedStatus = useSelector((state) => state.dataStatusReducer);
  const termArray = useSelector((state) => state.wordReducer.data);

  console.log(termArray);
  const dispatch = useDispatch();

  const handleSubmit = (translation) => {
    console.log("a word has been clicked");
    history.push({
      pathname: `termdetail/${translation.english}`,
      state: { translation: translation },
    });
  };

  useEffect(() => {
    if (!dataLoadedStatus) {
      try {
        dispatch(loadData());
      } catch {
        console.log("Data could not be loaded");
      }
    }
  });

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = termArray.filter((term) => {
        const regex = new RegExp(`${text}`, "gi");
        return term.term.match(regex);
      });
    }
    console.log(matches);
    setSuggestions(matches);
    setText(text);
  };

  const onSuggestHandler = (translation) => {
    history.push({
      pathname: `termdetail/${translation.english}`,
      state: { translation: translation },
    });
  };

  return (
    <div className="App">
      <div className={classes.searchForm}>
        <TextField
          className={classes.searchBar}
          type="text"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
          variant="outlined"
        />

        {suggestions &&
          suggestions.map((suggestion, i) => (
            <div key={i} className={classes.suggestion}>
              <strong>{suggestion.term}</strong>

              {suggestion.translations.map((translation) => (
                <div
                  key={i}
                  className={classes.individualTerm}
                  onClick={() => onSuggestHandler(translation)}
                >
                  {translation.english}
                </div>
              ))}
            </div>
          ))}
      </div>

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
                        <Typography
                          key={i}
                          onClick={() => handleSubmit(translation)}
                          className={classes.translated}
                        >
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
      <button className={classes.button} onClick={() => dispatch(loadData())}>
        {" "}
        hey
      </button>

      {/* {loader} */}
    </div>
  );
}

export default App;
