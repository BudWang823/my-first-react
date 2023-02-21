

import { getCinemas } from '../../../api/films'


function getCinemasAction() {
    return async (dispatch) => {
        const res = await getCinemas()
        dispatch({
            type: 'change_list',
            payload: res.data.cinemas
        })
    }

}


export default getCinemasAction


