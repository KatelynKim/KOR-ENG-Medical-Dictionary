import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import { Divider } from "@material-ui/core";
import useStyles from "../style/CategoryPageStyle";
import { useEffect, useState } from "react";
import { mergeClasses } from "@material-ui/styles";

function CategoryPage() {
  const classes = useStyles();

  let [categories, setCategories] = useState({});
  console.log("you are now in category page");
  useEffect(() => {
    console.log("fetching categories");
    const fetchData = async () => {
      const data = await fetch("http://127.0.0.1:8000/api/categories/").then(
        (res) => res.json()
      );
      console.log(data);
      setCategories(data);
    };

    fetchData();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.categoryList}>
        <ul>
          {categories &&
            !!categories.length &&
            categories.map((category, i) => <li key={i}>{category.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CategoryPage;
