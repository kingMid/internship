import { createStore} from "redux";
import reducers from "./reducers";


let initState = {
    num:0
}
//createStore是由redux提供的方法来创建我store，这个方法有两个参数 第一个参数reducer， 第二参数时state
let store = createStore(reducers,initState)


export default store

