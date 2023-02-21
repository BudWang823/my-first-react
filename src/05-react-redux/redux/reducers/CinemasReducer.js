const state = {
    list: []
}
const CinemasReducer = (preState = state, action) => {
    let newState = { ...preState }
    switch (action.type) {
        case 'change_list':
            newState.list = action.payload
            return newState
        default:
            return preState
    }

}
export default CinemasReducer