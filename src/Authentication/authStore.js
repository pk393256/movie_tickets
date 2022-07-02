import { legacy_createStore as createStore } from "redux";
import { authReducer } from "./authReducer";

export const store = createStore( authReducer ,{isAuth:false},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
    console.log(store.getState())
});