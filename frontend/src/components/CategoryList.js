import useStyles from "../style/CategoryListStyle";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core"; 

const CategoryList = () => {
  const classes = useStyles();

  return (
    <div className={classes.categoryListContainer}>
      <ul className={classes.categoryList}>
        <li className={classes.categoryListItem}>
          <Link className={classes.link} to="/home">Home</Link>
        </li>
        <li className={classes.categoryListItem}>
          <Link className={classes.link} to="/home"> Saved </Link>
        </li>
        <li className={classes.categoryListItem}> 
          <Link className={classes.link} to="/categories">Categories</Link> 
        </li>

        <li className={classes.categoryListItem}> 
          <Link className={classes.link} to="/home">Translator Forum</Link> 
        </li>
 
      </ul>
      <Divider />
    </div>
  );
};

export default CategoryList;
