import { GM, GN } from './message.action'
let initialState = {
    message: "Hello"
}
let messageReducer = (state = initialState, action) => {
    console.log(action);
    console.log(action.type)
    switch (action.type) {
        case GM:
            return { message: "Good Morning !....." }
        case GN:
            return { message: "Good Night!...." }
        default:
            return state
    }
}
export { messageReducer }

//what is reducer?
//reducer is pure funciton, take two paramenter, 
//1.state
//2.action