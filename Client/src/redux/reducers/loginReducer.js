
import { 
LOGIN,

} from "../action_types/loginActionTypes"

const initailState = {
    isAuth: null
}

const loginReducer = (state = initailState, action)=>{
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isAuth: true
            }
        default:
            return{
                ...state
            } 
    }
}

export default loginReducer