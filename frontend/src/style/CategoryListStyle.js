import {makeStyles} from "@material-ui/core/styles";

//https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f

const useStyles = makeStyles((theme) => ({
    
    categoryListContainer:{
        position: 'absolute',   
        height:'8vh',
        width: '100%',
        margin: '0',
        top: '5vh',
        left: '0', 
    },

    categoryList:{  
        fontSize:"20px",
        listStyle: "None",
        textDecoration:"None"
        

    },
    
    categoryListItem:{
        display: "inline",
        listStyle: "None", 
        
    },

    link:{
        textDecoration:"None",
        color:"black",
        paddingLeft:"1em",
        paddingRight:"1em",
        marginTop:"0",

        '&:hover':{
            color:'#E07A5F'
        }

       
    }
}));

export default useStyles;