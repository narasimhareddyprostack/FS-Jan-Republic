//action types
let GM = "GM"
let GN = "GN"

//actions
let gmAction = () => {
    return { type: GM }
}
let gnAction = () => {
    return { type: GN }
}

export { gmAction, gnAction, GM, GN }  //named export 
//action - is funciton return actionable object