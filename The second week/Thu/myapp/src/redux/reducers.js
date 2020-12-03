import  {combineReducers} from "redux";

let count = (state=0,action) => {

    switch (action.type){
        case 'ADD_NUM' :
            return state +1
        default :
            return  state
    }

};

export default combineReducers({
    count
})
