//action types
import { Axios } from 'axios';
let GM = "GM"
let GN = "GN"

//actions
let gmAction = async() => {
    await Axios.get(url).then().catch();
    return { type: GM, payload: "Good Morning MR Anil" }
}
let gnAction = () => {
    return { type: GN, payload: "Good Night MR Anil" }
}

export { gmAction, gnAction, GM, GN }  //named export 
//action - is funciton return actionable object