import {createStore} from "redux";

import rootReducer from "../reducers/reducer";

const initialState = {
    num: 0
};
const store = createStore(rootReducer,initialState);


export default store