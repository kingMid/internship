const initState = {
    num:0
}

const count = (state = initState,action) => {
    // console.log(state)
    switch (action.type){
        case  'ADD_NUM' :
            return {
                ...state,
                num: state.num+1
            }

        case   'REDUCE_NUM' :
            return {
                ...state,
                num: state.num-1
            }

        default  :
            return state

    }

};
export default count


