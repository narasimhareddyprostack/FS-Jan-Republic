//action types
const INCR = 'INCR'
const DECR = 'DECR'
//action
let incrAction = () => {
    //api, data
    return { type: INCR, payload: data }
}
let decrAction = () => {
    return { type: DECR }
}
export { INCR, DECR, incrAction, decrAction }

//what is action,
//funciton, return actionable object