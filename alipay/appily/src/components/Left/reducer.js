

let initState = {
    leftNum:5,
    midNum:2,
    rightNum:1000
}
let left = (state=initState,action) => {

    switch (action.type){
        case 'LEFT_ADD' :
            return {
                ...state,
                leftNum:state.leftNum+1
            }
        default :
            return  state
    }

};
export default left