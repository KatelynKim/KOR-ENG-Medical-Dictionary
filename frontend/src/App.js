import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import useFullPageLoader from "./components/useFullPageLoader";
import Test from "./components/Test";
import { useSelector, useDispatch } from "react-redux";
import { loadData} from "./reducers/wordReducer";

function App() {
  // let [termArray, setTermArray] = useState([]);
  let [text, setText] = useState([]);
  let [suggestions, setSuggestions] = useState([]);

  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const classes = useStyles();
  const history = useHistory();
  const [fetched, setFetched] = useState(false); 

  const termArray= useSelector(state=>state.data) 

  const dispatch = useDispatch();

  const handleSubmit = (translation) => {
    console.log("a word has been clicked");
    history.push({
      pathname: `termdetail/${translation.english}`,
      state: { translation: translation },
    });
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     showLoader();
  //     const termData = await axios.get(`http://127.0.0.1:8000/api/`);
  //     setTermArray(termData.data);
  //     setFetched(true);
  //   };

  //   const runFetchData = async () => {
  //     if (!fetched) {
  //       fetchData();
  //     } else {
  //       hideLoader();
  //     }
  //   };
  //   runFetchData();
  // }, [fetched]);

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
            {termArray.map((row) => {
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

      {loader}
    </div>
  );
}

export default App;
