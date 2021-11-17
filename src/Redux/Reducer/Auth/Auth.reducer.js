import { SIGN_IN,SIGN_UP,GOOGLE_AUTH,SIGN_OUT } from "./Auth.type";



const INITIAL_STATE={
  
};



const AuthReducer = (state=INITIAL_STATE,action)=>{

    switch (action.type) {
    
        case SIGN_IN:
            return{
                ...state,
            };
            case SIGN_UP:
            return{
                ...state,
            };

        case GOOGLE_AUTH:    
        return{
            ...state,
        };
        case SIGN_OUT:    
        return{
            ...state,
        };
        default:
            return {
                ...state,
            }
    }

}

export default AuthReducer;


