import { STATUS_SUCCESS } from "./authAction";

export const authReducer=(store,action)=>{
    switch(action.type){
        case STATUS_SUCCESS:
            return {isAuth:action.payload}
        default:
            return store;
            
    }
}
//data.token=="QpwL5tke4Pnpja7X4"? {isAuth:true}:{isAuth:false}