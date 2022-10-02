
import {createStore} from 'redux';

const counterReducer = (state={uname:"",password:"",username:"",userid:"",venuecost:0,packagecost:0,date:null},action)=>{

    if(action.type==="save")
    {    
        return {
            uname:action.load.uname,
            password:action.load.password,
            username:action.load.username,
            userid:action.load.userid,
            venuecost:action.load.venuecost,
            packagecost:action.load.packagecost,
            date:action.load.date
            
        };
    }
    
    return state;

} 

const store = createStore(counterReducer);

export default store;
