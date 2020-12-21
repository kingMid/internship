let initState = {
    leftNum:5,
    midNum:2,
    rightNum:1000
}
let right = (state=initState,action) => {

    switch (action.type){

        case 'RIGHT_ADD' :
            return {
                ...state,
                midNum:state.midNum+1
            }
        default :
            return  state
    }

};
export default  right