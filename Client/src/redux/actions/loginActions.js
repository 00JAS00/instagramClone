import axios from 'axios'

import {
LOGIN,
LOGOUT
} from '../action_types/loginActionTypes'

const URL = "http://localhost:3001/instaclone/"

export const getLogin = (email,password) => async (dispatch)=>{
    try {
        const response = await axios(`${URL}?email=${email}&password=${password}`)
        const {data} = response
        console.log(data)

        dispatch({
            type: LOGIN,
            payload: data,
        })
    } catch (error) {
        window.alert(error)
    }
}