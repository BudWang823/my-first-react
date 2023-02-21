

import { getCinemas } from '../../../api/films'

//  redux trunk
// function getCinemasAction() {
//     return async (dispatch) => {
//         const res = await getCinemas()
//         dispatch({
//             type: 'change_list',
//             payload: res.data.cinemas
//         })
//     }

// }
//  redux-promise
// function getCinemasAction() {
//     return getCinemas().then(res => {
//         return {
//             type: 'change_list',
//             payload: res.data.cinemas
//         }
//     })
// }



async function getCinemasAction() {
    console.log(123123)
    const res = await getCinemas()
    return {
        type: 'change_list',
        payload: res.data.cinemas
    }

}


export default getCinemasAction


