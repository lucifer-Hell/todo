import {ADD_TO_DO , REMOVE_TO_DO} from './actionCreators'

const IntialState={
    todos:[],
    id:0
}

function rootReducer(state=IntialState,action){
    let newState;
    switch(action.type){
        case ADD_TO_DO:
            newState={...state}
            newState.todos.push(action.task)
            return { ...newState,id:++newState.id}
           
        case REMOVE_TO_DO:
            let todos=(state.todos).filter((val,index)=>(index!=action.id))
            debugger;

            console.log(newState)
            return {todos:todos,id:todos.length}
  
        default:
            return state;
    }
   
}

export default rootReducer;