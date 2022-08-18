import { applyMiddleware, combineReducers } from "redux";
import reducerMovies from "./reducerMovies";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const middeware = [thunk]
const rootReducer = combineReducers ({
    reducerMovies ,  
   
})

const devTool= composeWithDevTools(applyMiddleware(...middeware))
const store = configureStore({
    reducer : rootReducer,
    devTool
}
)


// console.log('store ', (store));
export default store
    
    