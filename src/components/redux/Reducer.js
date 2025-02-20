const initialstate = {
    count: 0,
    cart: []
}
export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADDITEM':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                count: state.cart.length + 1,
            }
        case 'DELITEM':
            const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cart: updatedCart,
                count: updatedCart.length,
            }


        default:
            return state;
    }
}