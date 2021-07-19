import { makeStyles } from "@material-ui/core/styles"; 
 

const useStyles = makeStyles((theme) => ({
    detailContainer:{
        position:"absolute",
        top:"20vh",
        width:"50%",
        left:"5%",
    },

    koreanTerm:{
        fontSize: '3rem'
    },

    abbreviation:{
        fontSize: '1rem',
        paddingTop:'1rem'
    },

    description:{
        paddingTop:'2rem',
        paddingBottom:'2rem'
    }
 
}));

export default useStyles;
