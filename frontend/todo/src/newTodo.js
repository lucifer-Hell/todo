import React,{useState,useEffect} from 'react'
import {Box, Container,Button, Paper, Typography ,TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
function NewToDo(props){

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
           
        }
      

    })
    const classes=styles();
    let [currTask,changeCurrTask]=useState("")
    let [msgState,changeMsgState]=useState("")

    function handleSubmit(e){
        let event=e;    
        e.preventDefault();
            console.log(currTask);
            event.target.reset();
            props.dispatch({type:"AddToDo",task:currTask})
            changeMsgState("added")
    }
    function displayMsg(){
        if (msgState==="changing"){
            return "Press add button to add task"
        }
        else if (msgState==="added") return "Task added sucessfully !"
        else return ""
    }

    return(
                <Container  >
                    <Paper className={classes.paper} xs={12}>
                        <Box  style={{textAlign:"center"}}>
                               <form onSubmit={(e)=>handleSubmit(e)}>
                                    <Typography className={classes.spacing   } component="span" display="inline" variant ="h6">
                                            New Task:
                                    </Typography>
                                    <TextField name="todo" className={ `${classes.spacing}`} onChange={(e)=>{changeMsgState("changing");changeCurrTask(e.target.value)}} > </TextField>
                                    <Button type="submit"  style={{marginTop:"4px"}} variant="contained" color="secondary">
                                        ADD IT
                                    </Button>
                                    </form>
                                <Typography   component="div" display="block" variant ="h6">
                                          {displayMsg()}
                                    </Typography>

                        </Box>
                    </Paper>
                </Container>


    )


}
function mapStateToProps(state){
        return {...state}
}


export default connect(mapStateToProps)(NewToDo);