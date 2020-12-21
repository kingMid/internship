/**
 * @Description: reducer.js
 * @author zhangzhong
 * @date 2020/12/4 
*/

import { combineReducers } from "redux";
import right from '../components/Right/reducer'
import left from '../components/Left/reducer'
import mid from '../components/Mid/reducer'

let reducers = combineReducers({
        right,
        mid,
        left

    }

)
export default reducers
