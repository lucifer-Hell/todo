import React from 'react'
import {Box, Container,Button, Paper, Typography ,Grid, List, ListItem} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
function AllToDos(props){

    let styles=makeStyles({
        paper:{
            alignContent:"center",
            margin:"80px",
            width:"70%",
           
            padding:"30px"
        },
        spacing:{
            display:"flex-inline",
            marginRight:"1em"
           
        },
       
        lists:{
            display:"inline-block",
            alignItems:"center"
        }
      

    })
    const classes=styles();

    function removeTask(index){
        console.log(index)
        props.dispatch({type:"RemoveToDo",id:index})
    }
    function display(){
       
        console.log("length of props :"+props.todos.length)
       
        if(props.id>0) {
              return props.todos.map((val,index)=>{
                    return <ListItem key={index}>{val}<span value={index} ><DeleteIcon color="secondary" onClick={removeTask.bind(this,index)} /></span></ListItem>
                })  
            
         }
         else {
              return "Start adding some tasks"
         }
    }
   
    
    return(
                <Container  >
                    <Paper className={classes.paper} >
                        <Box  style={{textAlign:"center"}}>
                            <Grid contianer>
                                    <Grid item>
                                    <Typography   component="h3" display="inline" variant ="h3">
                                          Your to-do's:
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <List className={classes.lists}>
                                         {display()}                              
                                        </List>
                                    </Grid>

                            </Grid>
                             
                               

                        </Box>
                    </Paper>
                </Container>


    )
}
function mapStateToProps(state){
   
    console.log(state.todos)
    
    return {...state}
}

export default connect(mapStateToProps)(AllToDos);