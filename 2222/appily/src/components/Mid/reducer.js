

let initState = {
    leftNum:5,
    midNum:2,
    rightNum:1000
}
let mid = (state=initState,action) => {

    switch (action.type){
        case 'MID_ADD' :
            return {
                ...state,
                rightNum:state.rightNum+1
            }
        default :
            return  state
    }

};
export default mid
