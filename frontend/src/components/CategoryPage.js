import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import { Divider } from "@material-ui/core";
import useStyles from "../style/CategoryPageStyle";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import QueriedByCategory from "./QueriedByCategory";

function CategoryPage() {
  const classes = useStyles();
  const history = useHistory();
  const termArray = useSelector((state) => state.wordReducer.data);
  let [category, setCategory] = useState(0);
  let [queriedList, setQueriedList] = useState([]);

  console.log("TERMARRAY", termArray);

  let [categories, setCategories] = useState({}); 
  useEffect(() => {
    console.log("fetching categories");
    const fetchData = async () => {
      const categoryData = await fetch(
        "http://127.0.0.1:8000/api/categories/"
      ).then((res) => res.json());
      console.log(categoryData);
      setCategories(categoryData);
    };

    fetchData();
  }, []);

  const onClickCategory = (category) => {
    setCategory(category); 
    queriedList=[]
    if (termArray && !!termArray.length) { 
        termArray.forEach((term) => {
          if (term.category.includes(category.id)) {
              queriedList.push(term) 
          } 
          setQueriedList(queriedList)
        });
      } 


    // history.push({
    //   pathname: `${category.name}`,
    //   state: { queriedList: queriedList },
    // });
  };

  console.log("QUERIEDLIST", queriedList)
 

  return (
    <div className={classes.container}>
      <div className={classes.categoryList}>
        <ul>
          {categories &&
            !!categories.length &&
            categories.map((category, i) => (
              <li key={i} onClick={() => onClickCategory(category)}>
                {category.name}
              </li>
            ))}
        </ul>
      </div>
      <QueriedByCategory category={category} queriedList={queriedList}></QueriedByCategory>
    </div>
  );
}

export default CategoryPage;
