import { 
SINGUP,

} from "../action_types/userActionTypes"
export const singUp = (userData) => async (dispatch)=>{
    try {
        const response = await axios.post(URL, userData)
        const {data} = response
        console.log(data)

        dispatch({
            type: SINGUP,
            payload: data
        })
    } catch (error) {
        console.log(error)
        window.alert(error.response.data)
    }
}