import { makeStyles } from "@material-ui/core/styles"; 

//https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f

const useStyles = makeStyles((theme) => ({

  test:{
    position:"absolute",
    width:"100%",
    height:"10%",
    backgroundColor:"yellow",
    bottom:"0",
    left:"0",
    zIndex:"100000"
  }

}));

export default useStyles;
