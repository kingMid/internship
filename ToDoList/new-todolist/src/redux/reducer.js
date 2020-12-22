const initState = {
    inputValue :'write Something',
    list:[
        '早上8.30起床',
        '早上8.50拿快递',
        '早上9.00上班'
    ]
}
export default (state = initState,action)=>{

    console.log(state,action);
    switch (action.type){
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputValue: action.value
            }
        case 'ADD_ITEM':
            let newState = JSON.parse(JSON.stringify(state))
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        default :
            return state
    }

}