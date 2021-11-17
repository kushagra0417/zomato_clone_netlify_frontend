import { GET_USER ,GET_SPECIFIC_USER,CLEAR_USER} from "./user.type";



const INITIAL_STATE={

    user:{},
};



const UserReducer =(state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case GET_USER:
            return {...state,
            
            user:action.payload,
            };
           
            case GET_SPECIFIC_USER:
                return {...state,
                
                    
                    };
            case CLEAR_USER:
                return { };
        default:
            return {
                ...state,
            }
    }

}

export default UserReducer;


