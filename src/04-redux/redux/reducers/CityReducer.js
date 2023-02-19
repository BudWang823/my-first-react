const state = {
    cityName: '北京'
}
const CityReducer = (preState = state, action) => {
    let newState = { ...preState }
    switch (action.type) {
        case 'upDate_cityName':
            newState.cityName = action.value
            return newState
        default:
            return preState
    }

}
export default CityReducer