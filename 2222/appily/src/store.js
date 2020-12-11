/**
 * @Description: store.js
 * @author zhangzhong
 * @date 2020/12/4 
*/
import {createStore} from 'redux'
import  reducers  from './reducer/reducer'

//createStore是由redux提供的方法来创建我store，这个方法有两个参数 第一个参数reducer， 第二参数时state
let store = createStore(reducers)

export default store