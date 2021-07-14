import {makeStyles} from "@material-ui/core/styles";

//https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f

const useStyles = makeStyles((theme) => ({
    
    header:{
        position: 'absolute',
        color: 'white',
        backgroundColor:'#3d405b',
        height:'5vh',
        width: '100%',
        margin: '0',
        top: '0',
        left: '0',
        zIndex:'1000',
    },

    appTitle:{
        position:"absolute",
        top:"50%",
        left:"5%",
        transform: 'translate(0,-50%)'            
    }                 
}));

export default useStyles;