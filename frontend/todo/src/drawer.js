import React,{Component} from 'react'
import {Box, Typography ,Drawer,List,ListItem, Divider} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles,styled } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link,BrowserRouter as Router,withRouter} from 'react-router-dom'
// make custom my style function

let useStyles=makeStyles(theme=>({
    
   drawerPaper :{
            backgroundColor:"rgb(63, 81, 181)",
            
            color:"#F5007D",
            '& listItem':{
                backgroundColor:"green"
            }
        }
  
}))



function Sidebar(props){
    const classes=useStyles()
    console.log(props)
    return (
                <Drawer variant="persistent" docked="false" open={props.open ||  false} classes={{paper:classes.drawerPaper}}>
                     <List>
                        
                        <ListItem style={{backgroundColor:"yellow"}}><ArrowBackIcon onClick={props.changeToggle} /></ListItem><Divider/>
                        <ListItem > <Link to="/addNewToDo" onClick={props.changeToggle}>add New task </Link> </ListItem><Divider/>
                        <ListItem ><Link to="/" onClick={props.changeToggle}>See all todo's</Link></ListItem><Divider/>
                       
                    </List>   
                </Drawer>
            )
}

export default withRouter(Sidebar) ;