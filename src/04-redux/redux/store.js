import { createStore } from "redux";
// 初始化状态
const state = {
    showTabbar: true
}
const reducer = (preState = state, action) => {
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
const store = createStore(reducer)
export default store