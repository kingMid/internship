/**
 * @Description: actioon.js
 * @author zhangzhong
 * @date 2020/12/3
*/

//定义一个action方法，可以接受参数，* **** 增加数量
let AddNum =()=>{
    console.log("ssss")
    //返回一个action对象
    return {
        type:'ADD_NUM'
    }
}
export default AddNum