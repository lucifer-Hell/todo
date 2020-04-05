import React ,{Component, useEffect,useState} from 'react';
import Navbar from './navbar.js';
import Sidebar from './drawer.js';
import NewToDo from './newTodo.js';
import AllToDos from './allTodos.js';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer.js'
import {createStore} from 'redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// create a store
const store=createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App(){
  let [toggle,setToggleState]=React.useState(false)
  useEffect(()=>{
   console.log("re-rendered") 
  },[toggle]);


  function changeToggle(){
    setToggleState(!toggle)
    console.log(toggle)
  }
  
  return (
    <Provider store={store}>
       <Router>
    <div>
          <Navbar changeToggle={changeToggle} />
          <Sidebar open={toggle} changeToggle={changeToggle} />
      
        <Switch>
         
         <Router path="/addNewToDo"><NewToDo /></Router>
         <Router exact path="/"><AllToDos /></Router>

        </Switch>
          
    </div>
    </Router>
    </Provider>
       
  )

}

export default App;
