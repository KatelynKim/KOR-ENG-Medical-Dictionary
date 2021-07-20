import {makeStyles} from "@material-ui/core/styles";
 

const useStyles = makeStyles((theme) => ({

    categoryList:{
        position:"relative", 
        bottom:" 0",
        right:"50"
    },

    container:{
        width:"100%",
        height:"auto%", 
        position:"absolute", 
        top:"20vh",
        zIndex:"-1"
    }
    
  
}));

export default useStyles;