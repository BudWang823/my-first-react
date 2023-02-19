const state = {
    showTabbar: true,
}
const TabbarReducer = (preState = state, action) => {
    let newState = { ...preState }
    switch (action.type) {
        case 'hide_tabbar':
            newState.showTabbar = false
            return newState
        case 'show_tabbar':
            newState.showTabbar = true
            return newState
       
        default:
            return preState
    }

}

export default TabbarReducer