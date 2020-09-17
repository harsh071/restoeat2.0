export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export function addToCart(item){
    return {
        type: 'ADD_TO_CART',
        item
    }
}

export function removeFromCart(item) {
    return {
        type: 'REMOVE_FROM_CART',
        item
    }
}
export function emailAddress(item) {
    return {
        type: 'EMAIL_ADDRESS',
        item
    }
}

export function deliveryAddress(item) {
    return {
        type: 'DELIVERY_ADDRESS',
        item
    }
}

export function login(item) {
    return {
        type: 'LOGIN',
        item
    }
}