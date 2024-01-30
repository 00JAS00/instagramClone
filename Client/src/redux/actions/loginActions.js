import axios from 'axios'

import {
LOGIN,
LOGOUT,
ERRORFORM
} from '../action_types/loginActionTypes'

const URL = "http://localhost:3001/instaclone/"

export const getLogin = ({email,password}) => async (dispatch)=>{
    try {
        const response = await axios(`${URL}?email=${email}&password=${password}`)
        const {data} = response
        // data = {access: true}

        if(data.access === true){
            dispatch({
                type: LOGIN,
                payload: data.access,
            })
        }
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: ERRORFORM,
            //within response.data from the error the backend sent us the possible wrong answers
            payload: error.response.data
        })
    }
}