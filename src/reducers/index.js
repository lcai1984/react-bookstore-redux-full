export function cart(state = {}, action = {}) {
    switch (action.type) {
        case 'READ_CART':
            let cart = localStorage.getItem("cart");
            cart = JSON.parse(cart);
            return {
                ...state,
                items: cart || []
            };
        case 'CART_ADD':
            const addCart = [...state.items, action.payload.productId];
            localStorage.setItem("cart", JSON.stringify(addCart));
            return {
                ...state,
                items: addCart
            };
        case 'CART_REMOVE':
            const removeCart = state.items.filter(id => id !== action.payload.productId);
            localStorage.setItem("cart", JSON.stringify(removeCart));
            return {
                ...state,
                items: removeCart
            };
        case 'CHECKOUT':
            return {
                ...state,
                items: []
            }
        default:
            return state;
    }
};
export function products(state = {}, action = {}) {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};