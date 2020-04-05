import React,{Component} from 'react'
import {Box, AppBar, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
const styles={
    title:{
        marginLeft:"1em"
    }
} 

function Navbar(props) {
   
        
        const useStyles=props.classes;
        return (
           <AppBar position="relative">
                <Toolbar>
                        <MenuIcon  color="secondary" onClick={props.changeToggle} fontSize="large" />
                        <Typography variant="h5" className={useStyles.title} color="secondary">
                                TODO's
                        </Typography>

                </Toolbar>
           </AppBar>
            
        )
    }

export default withStyles(styles)(Navbar);