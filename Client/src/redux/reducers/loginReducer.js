
import { 
ERRORFORM,
LOGIN, 
LOGOUT,
} from "../action_types/loginActionTypes"

const initailState = {
    isAuth: null,
    errorForm: ''
}

const loginReducer = (state = initailState, action)=>{
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isAuth: action.payload,
                errorForm: ''
            }

        case ERRORFORM:
            return {
                ...state,
                errorForm: action.payload
            }


        default:
            return{
                ...state
            } 
    }
}

export default loginReducer