import {createStore ,combineReducers} from "redux";
import  count from '../pages/buttonMain/reducer'


const reducer = combineReducers({
    count
})

const  store = createStore(reducer);

export default store;



