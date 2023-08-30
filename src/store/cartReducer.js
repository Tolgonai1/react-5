
const defaultState = {
    productInCart: []
}
export const cartReducer =(state=defaultState,action)=>{
    switch (action.type) {
        case 'ADD_CART':
            return {...state,productInCart: action.payload}
        default:
            return state
    }
}
