import { CART_TOTAL, DELIVERY_CHARGES, LOAD_FILTERED_PRODUCTS, LOAD_FILTER_ATTRIBUTES, LOAD_HOME_PAGE, LOAD_SHOPPING_BAG, LOAD_SHOPPING_BAG_PRODUCTS, LOAD_TABS_DATA, MANAGE_GOOGLE_AUTH_SIGN_IN, MANAGE_GOOGLE_AUTH_SIGN_OUT, MANAGE_SIGN_IN, MANAGE_SIGN_IN_ERROR, MANAGE_SIGN_OUT, MANAGE_SIGN_UP_ERROR, PAYMENT_DATA_RECIEVED, PAYMENT_INFO_RECIEVED, PAYMENT_RESPONSE, PAYMENT_RESPONSE_ERROR, REMOVE_FILTER_ATTRIBUTES, RESET_ADD_TO_CART, RESET_CART_TOTAL, RESET_DELIVERY_CHARGES, RESET_FILTER_Q_STATUS, RESET_PAYMENT_RESPONSE, RESET_PAYMENT_RESPONSE_ERROR, RESET_SHIPPING_ADDRESS, RESET_SHOPPING_BAG, RESET_SIGN_IN_ERROR, RESET_SIGN_UP, SAVED_SORTED_LIST, SAVE_FILTER_Q_STATUS, SEARCH, SEARCH_ERROR, SELECT_PRODUCT_DATA, SET_G_OAUTH, SHIPPING_ADDRESS_RECIEVED } from "../action_creator";
import _ from "lodash";
import { LogTrace } from "../../constants/constant_vals";


export const SignInReducer = (
    state = {
        is_signed_in: null, timestamp: null, first_name: null
    }, action) =>{
            switch (action.type){
                case MANAGE_SIGN_IN:
                    return {
                        ...state, is_signed_in: true, token_id: action.payload.jwt, error_msg: null,
                        first_name: action.payload.first_name, timestamp: Date.now()
                    };
                case MANAGE_SIGN_IN_ERROR:
                    return {
                        ...state, is_signed_in: false, error_msg: action.payload, timestamp: Date.now()
                    };
                case RESET_SIGN_IN_ERROR:
                    return {
                        ...state, error_msg: null
                    };
                case MANAGE_SIGN_OUT:
                    _.omit(state, 'token_id', 'error_msg')
                    return {
                        ...state, is_signed_in: false, first_name: null
                    };
                default:
                    return state;
            }
};

export const GoogleAuthReducer = (
    state = {is_signed_in_OAuth: null, first_name: null, G_OAuth: null},
    action) => {
        switch (action.type) {
            case SET_G_OAUTH:
                return {
                    ...state,
                    is_signed_in_OAuth: action.payload.G_OAuth.isSignedIn.get(),
                    first_name: action.payload.first_name,
                    G_OAuth: action.payload.G_OAuth
                };
            case MANAGE_GOOGLE_AUTH_SIGN_IN:
                return{
                    ...state,
                    is_signed_in_OAuth: true,
                    first_name: action.payload.first_name,
                    G_OAuth: action.payload.G_OAuth
                };
            case MANAGE_GOOGLE_AUTH_SIGN_OUT:
                return{
                    ...state,
                    is_signed_in_OAuth: false,
                    first_name: null
                };
            default:
                return state;
        }
    }

    export const SignUpReducer = (
        state= {timestamp: null, error_msg: null},
        action
        ) =>{
            switch (action.type){

                //no need to manage signUP since after taking formvalues,
                // we create a account and go back to signIn page.

                case MANAGE_SIGN_UP_ERROR:
                    return {
                        ...state,
                        error_msg: action.payload,
                        timestamp: Date.now()
                    };
                case RESET_SIGN_UP:
                    return {
                        account_status: null, 
                        error_msg: null
                    }
                default:
                    return state;
            }
        }

export const HomePageReducer = (
    state = {is_loading: true},
    action
) => {
    if(LogTrace){
        console.trace(`HOME PAGE REDUCER: action.type = ${action.type}`)
    }
    
    switch (action.type){
        case LOAD_HOME_PAGE:
            if(LogTrace){
                console.trace(`HOME PAGE REDUCER: action.payload = ${JSON.stringify(action.payload)}`)
            }
            return action.payload;
        default:
            return state;
    }
}

export const TabsReducer = (
    state = {is_loading: true},
    action
) => {
    switch (action.type) {
        case LOAD_TABS_DATA:
            return action.payload;
        default:
            return state;
    }
}

export const AddToCartReducer = (
    state = {total_qty: 0, product_qty: {}},
    action
) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                total_qty: action.payload.total_qty,
                product_qty: action.payload.product_qty
            };
        case RESET_ADD_TO_CART:
            return {
                total_qty: 0,
                product_qty: {}
            }
        default:
            return state;
    }
}

export const FilterProductsReducer = (
    state = {is_loading: true},
    action
) => {
    switch (action.type) {
        case LOAD_FILTERED_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}

export const FilterAttributesReducer = (
    state = {is_loading: true},
    action
) => {
    switch (action.type) {
        case LOAD_FILTER_ATTRIBUTES:
            return action.payload;
        case REMOVE_FILTER_ATTRIBUTES:
            return null
        default:
            return state;
    }
}

export const SelectProductDetailReducer = (
    state = {is_loading: true},
    action
) => {
    switch (action.type) {
        case SELECT_PRODUCT_DATA:
            return action.payload;
        default:
            return state;
    }
}

export const ShoppingBagReducer = (
    state = {is_loading: true},
    action
) => {
    switch (action.type) {
        case LOAD_SHOPPING_BAG:
            return action.payload
        case RESET_SHOPPING_BAG:
            return {is_loading: false, data: {}}
        default:
            return state;
    }
}

export const FilterQueryReducer = (
    state = null, action
) => {
    switch (action.type) {
        case SAVE_FILTER_Q_STATUS:
            return action.payload
        case RESET_FILTER_Q_STATUS:
            return null
        default:
            return state;
    }
}

export const CartTotalReducer = (
    state = 0,
    action
) => {
    switch (action.type){
        case CART_TOTAL:
            return action.payload
        case RESET_CART_TOTAL:
            return 0
        default:
            return state;
    }
}

export const DeliveryChargesReducer = (
    state = 0,
    action
) => {
    switch (action.type) {
        case DELIVERY_CHARGES:
            return action.payload
        case RESET_DELIVERY_CHARGES:
            return 0
        default:
            return state;
        }
}

export const SavedSortedListReducer = (
    state = null,
    action
) => {
    switch(action.type) {
        case SAVED_SORTED_LIST:
            return action.payload
        default:
            return state;
    }
}

export const ShippingAddressReducer = (
    state = {values: null, submitted: false},
    action
) => {
    switch (action.type) {
        case SHIPPING_ADDRESS_RECIEVED:
            return action.payload
        case RESET_SHIPPING_ADDRESS:
            return {values: null, submitted: false};
        default:
            return state;
    }
}

export const PaymentDataReducer = (
    state = {values: null, submitted: false},
    action
) => {
    switch(action.type) {
        case PAYMENT_DATA_RECIEVED:
            return action.payload
        default:
            return state;
    }
}

// export const ShippingOptionReducer

export const PaymentResponseReducer = (
    state = {error: false, error_msg: null, timestamp: null},
    action
) => {
    switch (action.type){
        case PAYMENT_RESPONSE:
            return action.payload
        case PAYMENT_RESPONSE_ERROR:
            return {...state, error: true, error_msg: action.payload.error_msg, timestamp: Date.now()}
        case RESET_PAYMENT_RESPONSE:
            return {error: false, error_msg: null, timestamp: null}
        case RESET_PAYMENT_RESPONSE_ERROR:
            return {error: false, error_msg: null, timestamp: null}
    }
}

export const SearchKeywordReducer = (
    state = {error: false, error_msg: null, data: [{keyword: ' '}]},
    action
) => {
    switch (action.type) {
        case SEARCH:
            return {...action.payload, error: false, error_msg: null}
        case SEARCH_ERROR:
            return {...state, error: true, error_msg: "AN ERROR OCCURED"}
        default:
            return state;
    }
}


