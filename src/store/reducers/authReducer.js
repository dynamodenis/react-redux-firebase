const initialState = {
    authError:null
}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return{
                ...state,
                authError:"Login Failed"
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                authError:null
            }

        case 'SIGNOUT_SUCCCESS':
            return state

        case 'SIGNUP_SUCCESS':
            return{
                ...state,
                authError:null
            }

        case "SIGNUP_ERROR":
            return{
                ...state,
                authError:action.err.message
            }
        default:
            return state
    }
}

export default authReducer