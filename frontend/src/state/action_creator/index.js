import Cookies from 'js-cookie';
import {Base64} from 'js-base64';
import { Auth_Details_Cookie, Cart_Total_Cookie, Product_Info_Cookie } from '../../constants/cookies';
import { LogInfo, LogLog } from '../../constants/constant_vals';
import { AuthApi } from '../../api/api';
import history from '../../history';
import axios from 'axios';

const {
    REACT_APP_PAYMENT_URL,
    REACT_APP_PAYMENT_PORT
} = process.env
// Action IDs
export const MANAGE_SIGN_IN= "MANAGE_SIGN_IN";
export const MANAGE_SIGN_OUT= "MANAGE_SIGN_OUT";
export const MANAGE_SIGN_IN_ERROR= "MANAGE_SIGN_IN_ERROR";
export const RESET_SIGN_IN_ERROR = "RESET_SIGN_IN_ERROR";
export const SET_GOOGLE_AUTH= "SET_GOOGLE_AUTH";
export const MANAGE_GOOGLE_AUTH_SIGN_IN= "MANAGE_GOOGLE_AUTH_SIGN_IN";
export const MANAGE_GOOGLE_AUTH_SIGN_OUT= "MANAGE_GOOGLE_AUTH_SIGN_OUT";
export const MANAGE_SIGN_UP_ERROR= "MANAGE_SIGN_UP_ERROR";
export const RESET_SIGN_UP= "RESET_SIGN_UP";

export const SHIPPING_ADDRESS_RECIEVED = "SHIPPING_ADDRESS_RECIEVED";
export const RESET_SHIPPING_ADDRESS = "RESET_SHIPPING_ADDRESS";
export const SHIPPING_OPTION_RECIEVED = "SHIPPING_OPTION_RECIEVED";
export const RESET_SHIPPING_OPTION = "RESET_SHIPPING_OPTION";
export const PAYMENT_INFO_RECIEVED = "PAYMENT_INFO_RECIEVED";
export const PAYMENT_RESPONSE = "PAYMENT_RESPONSE";
export const PAYMENT_RESPONSE_ERROR = "PAYMENT_RESPONSE_ERROR";
export const RESET_PAYMENT_RESPONSE = "RESET_PAYMENT_RESPONSE";
export const RESET_PAYMENT_RESPONSE_ERROR = "RESET_PAYMENT_RESPONSE_ERROR";


export const SignIn = formValues => async dispatch => {

    if(LogInfo){
        console.info(`[ACTION]: SignIn API called, formValues = ${formValues}`)
    }

    const user_hash = Base64.encode(`${formValues.user_name}:${formValues.password}`);
    AuthApi.defaults.headers.common['Authorization'] = `Basic ${user_hash}`
    const response = await AuthApi.post('/authenticate').catch(err => {
        if(LogInfo){
            console.info(`[ACTION]: dispatch MANAGE_SIGN_IN_ERROR err.message = ${err.message}`)
        }
        dispatch({type: MANAGE_SIGN_IN_ERROR, payload: err.message});
    });

    if(response){
        if(response.data.jwt){
            if(LogInfo){
                console.info(`[ACTION]: dispatch MANAGE_SIGN_IN response.data.jwt = ${response.data.jwt}`)
            }
            dispatch({type: MANAGE_SIGN_IN, payload: response.data});
            Cookies.set(Auth_Details_Cookie, response.data, {expires: 2});//2 days for expiry
            history.push('/');
        } else {
            if(LogInfo){
                console.info(`[ACTION]: dispatch MANAGE_SIGN_IN_ERROR response.data.error = ${response.data.error}`)
            }
            dispatch({type: MANAGE_SIGN_IN_ERROR, payload: response.data.error});
        }
    }

}

export const SignOut = () => {
    if(LogInfo){
        console.info(`[ACTION]: signOut, Cookie is removed...`)
    }
    Cookies.remove(Auth_Details_Cookie)
    return {
        type: MANAGE_SIGN_OUT
    }
}

export const SignInUsingGoogleOAuth = googleAuth => async dispatch => {
    if(LogInfo){
        console.info(`[SignInUsingGoogleOAuth], googleAuth = ${googleAuth}`)
    }

    // if already not signed in
    if(googleAuth && !googleAuth.isSignedIn.get()){
        if(LogInfo){
            console.info(`[SignInUsingGoogleOAuth], user has not signed in yet`)
        }
        // signing in-
        googleAuth.SignIn(JSON.parse(googleAuth.currentUser.get().getId())).then(async () => {
                // sign in worked - 
                if(googleAuth.isSignedIn.get()){
                    if(LogInfo){
                        console.info(`[SignInUsingGoogleOAuth], user Signed in`)
                    }

                    dispatch({
                        type: MANAGE_GOOGLE_AUTH_SIGN_IN,
                        payload: {
                            firstName: googleAuth.currentUser.get().getBasicProfile().getGivenName(),
                            oAuth: googleAuth
                        }
                    })
                    history.push("/");
                }
            }
        )
    }
}

export const SignOutUsingGoogleOAuth = googleAuth => async dispatch => {
    if(LogInfo){
        console.info(`[SignOutUsingGoogleOAuth], googleAuth = ${googleAuth},` +
            `googleAuth.isSignedIn.get() = ${googleAuth.isSignedIn.get()}`)
    }

    // can be done only when alreasy signed in
    if (googleAuth && googleAuth.isSignedIn.get()){
        if(LogInfo){
            console.info(`[SignOutUsingGoogleOAuth], user trying to signout`)
        }
        googleAuth.SignOut().then(() => {
            if(!googleAuth.isSignedIn.get()){
                if(LogInfo){
                    console.info(`[SignOutUsingGoogleOAuth], user Signed out`)
                }
                dispatch({
                    type: MANAGE_GOOGLE_AUTH_SIGN_OUT,
                    payload: null
                })
            }
        });
        
    }
}

export const SignUp = formValues => async dispatch =>{
    if(LogInfo){
        console.info(`[action]: SignUp, API = ${JSON.stringify(formValues)}.`)
    }

    const response = await AuthApi.post('/signup', {
        'username': formValues.username,
        'password': formValues.password,
        'firstname': formValues.firstName,
        'lastname': formValues.lastName,
        'email': formValues.email.toLowerCase(),
    }).catch(e => {
        if(LogInfo){
            console.info(`[ACTION]: SignUp, dispatch MANAGE_SIGN_UP_ERROR, err.message = ${e.message}.`)
        }
        dispatch({
            type: MANAGE_SIGN_UP_ERROR,
            payload: e.message
        });
    });

    if(response){
        if(response.data.account_creation_status === 'success'){
            if(LogInfo){
                console.info(`[ACTION]: dispatch MANAGE_SIGN_UP, account_creation_status = ${response.data.account_creation_status}.`)
            }
            history.push("/signin");
        } else {
            if(LogLog){
                console.log('response.data.error_msg = ' + response.data.error_msg);
            }
            if(LogInfo){
                console.info(`[ACTION]: dispatch MANAGE_SIGN_UP_ERROR response.data.error_msg = ${response.data.error_msg}.`)
            }
            dispatch({
                type: MANAGE_SIGN_UP_ERROR,
                payload: response.data.error_msg
            });
        }
    }
}

export const SetAuthDetailsUsingCookie = cookieData => {
    if(LogInfo){
        console.info(`[ACTION]: Auth using Cookie, cookieData = ${cookieData}`)
    }
    return {
        type: MANAGE_SIGN_IN,
        payload: cookieData
    }
}

export const SetShippingAddress = payload => {
    if(LogInfo){
        console.info(`[ACTION]: setShippingAddress, payload = ${JSON.stringify(payload)}`) //user input
    }
    return {
        type: SHIPPING_ADDRESS,
        payload: payload
    }
}

export const SetPaymentInfo = payload => {
    if(LogInfo){
        console.info(`[ACTION]: setPaymentInfo payload = ${JSON.stringify(payload)}`)
    }
    
    return {
        type: PAYMENT_INFO,
        payload: payload
    }
}

export const SendPaymentToken = (token) => async dispatch => {
    if(LogInfo){
        console.info(`[ACTION]: SendPaymentToken, Token = ${JSON.stringify(token)}`)
    }

    //id not recieved in response
    if(!token || (token && !token.hasOwnProperty("id"))) {
        if(LogInfo){
            console.info(`[ACTION]: SendPaymentToken, PAYMENT_RESPONSE_ERROR, errorMsg: "unable to fetch token. Try again later"`)
        }
        dispatch({
            type: PAYMENT_RESPONSE_ERROR,
            payload: {errorMsg: "unable to fetch token. Try again later"}
        })
    }

    let url 
    if(REACT_APP_PAYMENT_URL){
        url = `${REACT_APP_PAYMENT_URL}/payment`
    } else {
        url = `http://localhost:${REACT_APP_PAYMENT_PORT}/payment`
    }

    let config = {
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(token)
    };

    if(LogInfo){
        console.info(`URL = ${config.url}`)
    }

    axios(config).then( (response) => {
        if(LogLog){
            console.log(JSON.stringify(response.data));
        }
        let PaymentResponse = {
            ...response.data,
            last4: token.card.last4,
            exp_year: token.card.exp_year, exp_month: token.card.exp_month,
            brand: token.card.brand
        }

        if(PaymentResponse.payment_failed){
            history.push(`/checkout/cancel-payment/${response.data.charge_id}`)
        } else {
            history.push(`/checkout/success-payment/${response.data.charge_id}`)
            Cookies.remove(Cart_Total_Cookie)
            Cookies.remove(Product_Info_Cookie)
        }

        dispatch({
            type: PAYMENT_RESPONSE,
            payload: {...PaymentResponse, error: false, errorMsg: null}
        })

    }).catch( (e) => {
        console.error(`[ACTION]: SendPaymentToken, Error = ${e}`)
        dispatch({
            type: PAYMENT_RESPONSE_ERROR,
            payload: {errorMsg: "Some Error Occured"}
        })
    });
}



