import axios from 'axios'

import {
LOGIN,
LOGOUT
} from '../action_types/loginActionTypes'

const URL = "http://localhost:3001/instaclone/"

export const getLogin = (user,password) => async (dispatch)=>{
    try {
        const response = await axios(`${URL}`)
        const {data} = response
        console.log(data)
    } catch (error) {
        window.alert(error)
    }
}