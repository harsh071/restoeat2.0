const MENU_ITEMS = [
    {id: 1, content: 'Round hollow puri fried and filled with a mixture of flavoured water, tamarind chutney, chilly, chat masala, potatoes, and onions.', title: 'Pasta', price: 10,quantity:0},
    {id: 2, content: 'Crispy turnovers filled with spiced potatoes and peas.', title: 'Burger', price: 10,quantity:0},
    {id: 3, content: 'Consists of a spicy mix, vegetables, potato mash, and soft bun.\n', title: 'Pizza', price: 20,quantity:0},
    {id: 4, content: 'Urad dal dumplings dipped in yogurt topped with potatoes, chickpeas, housemade tamarind and mint sauce with roasted cumin and chat masala.', title: 'Fries', price: 30,quantity:0},
    {id: 5, content: 'Paneer cooked with sauteed vegetables in a spicy chilli sauce.\n', title: 'Hashbrown', price: 40,quantity:0},

];

const reducer = (state, action) => {
    if(state === undefined){
        return {
            menuItems: MENU_ITEMS,
            cart: [],
            email:'',
            delivery_address:'',
            loggedIn: false
        }
    }

    switch (action.type){
        case 'ADD_TO_CART': {
            let cart = [...state.cart]
            console.log(action.item)
            cart.splice(action.item.id-1, 0, action.item);

            return {
                ...state,
                cart

            }
        }

        case 'REMOVE_FROM_CART': {
            const cart = [...state.cart]
            cart.splice(action.item.index,1)
            console.log(action)
            return {
                ...state,
                cart

            }
        }
        case 'EMAIL_ADDRESS': {
            console.log("sssss",action)


            return {
                ...state,
                email:action.item

            }
        }
        case 'DELIVERY_ADDRESS': {

            return {
                ...state,
                delivery_address:action.item

            }
        }
        case 'LOGIN': {

            return {
                ...state,
                loggedIn:action.item

            }
        }
        default:
        {
            return state
        }
    }
}

export default reducer;