import { LogInfo, LogLog, MAX_PRODUCTS_PER_PAGE } from "../../constants/constant_vals"
import { ADD_SELECTED_CATEGORY, CLEAR_ALL_FILTERS, LOAD_SELECTED_CATEGORY_FROM_URL, REMOVE_SELECTED_CATEGORY, RESET_SELECTED_CATEGORY, RESET_SELECT_PRODUCT_PAGE, RESET_SELECT_SORT, SELECT_PRODUCT_PAGE, SELECT_SORT,} from "../action_creator"


const InitialSelectedFilterAttributeState = {
    genders: [],
    prices: [],
    brands: [],
    wardrobes: [],
    oldQuery: null,
    newQuery: null
}

const InitialSortState = {
    id: 1,
    value: null,
    is_loaded_from_URL: true
}

const InitailPaginationState = {
    pageNumber: 1,
    maxProducts: MAX_PRODUCTS_PER_PAGE,
    is_loaded_from_URL: true
}

const FILTER_ATTRIBUTES = ["genders", "prices", "brands", "wardrobes"]


const RemoveIfPresent = (list, id) => {
    if(list.length === 0){
        return null
    }

    if(LogLog){
        console.log(`list = ${JSON.stringify(list)}`)
    }

    let present = false

    let FilteredList = list.filter(obj => {
        if(obj.id !== id){
            return obj;
        }
        present = true
    })

    if(present){
        return FilteredList
    }

    return null
}

const ApplyPayloadToPrevState = (PrevState, payload) => {
    if(LogInfo){
        console.info(`SelectedFilterAtrReducer, payload = ${JSON.stringify(payload)}`)
    }
    FILTER_ATTRIBUTES.forEach((attribute) => {
        if(LogInfo){
            console.info(`payload[attribute] = ${JSON.stringify(payload[attribute])}`)
        }
        if(payload[attribute].id) {
            if(payload[attribute].hasOwnProperty("append") && payload[attribute].append === false) {
                // swap the object property
                PrevState = {...PrevState, [attribute]: [payload[attribute]]}
            } else {
                let filters = RemoveIfPresent(PrevState[attribute], payload[attribute].id)
                if(LogInfo){
                    console.info(`PrevState = ${JSON.stringify(PrevState)}, 
                    filters = ${JSON.stringify(filters)}`)
                }
                if(filters){

                    // removing single object from list
                    PrevState = {...PrevState, [attribute]: filters}
                } else {
                    // adding single object in list
                    PrevState = {...PrevState, [attribute]: [...PrevState[attribute], payload[attribute]]}
                }
            }
        
        } else if (payload[attribute].attrilist) {

            // adding a list of objects
            PrevState = {...PrevState, [attribute]: payload[attribute].attrilist};
            if(LogLog){
                console.info(`newState = ${JSON.stringify(PrevState)}`)
            }
        }
    })

}

export const SelectedFilterAtrReducer = (
    state = InitialSelectedFilterAttributeState,
    action
) => {
    switch(action.type) {
        case ADD_SELECTED_CATEGORY:
            return ApplyPayloadToPrevState(state, action.payload);

        case REMOVE_SELECTED_CATEGORY:
            return {...InitialSelectedFilterAttributeState, oldQuery: state.oldQuery, newQuery: action.payload.newQuery}
        
        case RESET_SELECTED_CATEGORY:
            return {genders: [],prices: [],brands: [],wardrobes: []}

        case LOAD_SELECTED_CATEGORY_FROM_URL:
            return ApplyPayloadToPrevState(InitialSelectedFilterAttributeState, action.payload);
        
        default:
            return state;
    }
}

export const SelectSortReducer = (
    state = InitialSortState,
    action
) => {
    switch (action.type) {
        case SELECT_SORT:
            return action.payload

        case RESET_SELECT_SORT:
            return InitialSortState

        default:
            return state;
    }
}

export const SelectPageReducer = (
    state = InitailPaginationState,
    action
) => {
    switch(action.type){
        case SELECT_PRODUCT_PAGE:
            return action.payload

        case RESET_SELECT_PRODUCT_PAGE:
            return InitailPaginationState

        default:
            return state;
    }
}

export const ClearFiltersReducer = (
    state = false,
    action
) => {
    switch (action.type){
        case CLEAR_ALL_FILTERS:
            return action.payload;
        default:
            return state;
    }
}