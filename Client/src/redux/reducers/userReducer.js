import {
SINGUP,

} from '../action_types/userActionTypes'

const initailState = {
    id: '',
    createdAt: '',
    name: '',
    email: '',
    username: '',
    picture: ''
}

const userReducer = (state = initailState, action)=>{
    switch(action.type){
        case SINGUP:
            return {
                ...state,
                id: action.payload.id,
                createdAt: action.payload.createdAt,
                name: action.payload.name,
                email: action.payload.email,
                username: action.payload.username,
                picture: action.payload.picture,
            }

        default:
            return{
                ...state
            } 
    }
}

export default userReducer