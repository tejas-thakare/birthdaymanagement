
import {createStore} from 'redux';

const counterReducer = (state={uname:"",password:"",username:""},action)=>{

    if(action.type==="save")
    {    
        return {
            uname:action.load.uname,
            password:action.load.password,
            username:action.load.username,
            cost:action.load.cost,
            userId:action.load.id
        };
    }
    
    return state;

} 

const store = createStore(counterReducer);

export default store;
