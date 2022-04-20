//what is reducer?
//reducer is pure function, taking two parameter ie state,action
import { INCR, DECR } from './product.action'
let initialState = {
    name: "Iphone 12",
    price: 45000,
    image: '',
    qty: 1
}
let productReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case INCR:
            return { ...state, qty: state.qty + 1 }
        case DECR:
            return { ...state, qty: state.qty - 1 }
        default:
            return state
    }
}

export { productReducer }