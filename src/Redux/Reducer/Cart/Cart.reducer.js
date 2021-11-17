import { GET_CART,ADD_CART,DELETE_CART,DECRMENT_QTY,INCREMENT_QTY } from "./Cart.type";



const INITIAL_STATE={
  cart:[]
};



const CartReducer = (state=INITIAL_STATE,action)=>{

    switch (action.type) {
    
        case ADD_CART:
            return{
                ...state,
                cart:action.payload
            };
            case DELETE_CART:
            return{
                ...state,
                cart:action.payload
            };

        case GET_CART:    
        return{
            ...state,
            cart:action.payload
        };
        case INCREMENT_QTY:    
        return{
            ...state,
            cart:action.payload
        };
        case DECRMENT_QTY:    
        return{
            ...state,
            cart:action.payload
        };
        default:
            return {
                ...state,
            }
    }

}

export default CartReducer;


