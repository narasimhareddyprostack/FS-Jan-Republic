import { GM, GN } from './message.action'
let initialState = {
    message: "Hello........MR Rajni Kanth"
}
let messageReducer = (state = initialState, action) => {
    console.log(action);
    console.log(action.type)
    switch (action.type) {
        case GM:
            return { message: action.payload }
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