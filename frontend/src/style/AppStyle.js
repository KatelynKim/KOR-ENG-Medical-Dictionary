import { makeStyles } from "@material-ui/core/styles"; 

//https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f

const useStyles = makeStyles((theme) => ({

  table: { 
    position:"absolute",
    color: "white", 
    width: "50%", 
    margin: "0",
    zIndex:"-1",
    top: "30vh",
    left: "50%",
    transform:'translate(-50%,0)', 
  },

  row: {
    backgroundColor: "#F4F1DE",
  },

  searchForm: {
    position: "absolute",
    top: "20vh",
    width: "40%",  
    left:"50%",
    transform:'translate(-50%,0)',
    zIndeX:'10000'
  },

  searchBar: {   
    width:"100%",
    zIndex:"50000", 

  },

  suggestion: {    
    width:'99%',
    padding:"5px",
    textAlign:"left",
    background:"white",
    cursor: "pointer",
    borderTop: "0.5px solid #81B29A",
    borderBottom: "0.5px solid #81B29A",  
    borderLeft: "1px solid #81B29A",  
    borderRight: "1px solid #81B29A",   
    zIndex:"40000"
  }, 

  individualTerm:{ 
    margin:"0", 
    zIndex:"20000",
    '&:hover':{
        backgroundColor:"#F2CC8F"
    }
  },

  translated:{
    cursor:"pointer",
    '&:hover':{
      backgroundColor:"#F2CC8F"
  }
  },

  addButton:{
    position:"fixed",
    bottom:"5%",
    right:"5%",
    backgroundColor:"#E07A5F"
  }
}));

export default useStyles;
