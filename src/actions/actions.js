export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export function addToCart(item){
    return {
        type: 'ADD_TO_CART',
        item
    }
}

export function addToHistory(item){
    return {
        type: 'ADD_HISTORY',
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
export function changePassword(item) {
    return {
        type: 'CHANGE_PASSWORD',
        item
    }
}
export function clearCart() {
    return {
        type: 'CLEAR_CART'
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