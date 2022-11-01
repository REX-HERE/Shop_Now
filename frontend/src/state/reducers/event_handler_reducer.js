import { LogDebug } from "../../constants/constant_vals";
import { TAB_HOVER } from "../action_creator";


export const TabHoverReducer = (
    state = {index: false, hover: false, tabColor: "black"},
    action
) => {
    switch (action.type){
        case TAB_HOVER:
            if(LogDebug){
                console.debug(`TabHoverReducer: action.payload = ${JSON.stringify(action.payload)}`)
            }
            return action.payload;
        
        default:
            return state;
    }
}