import React from 'react';
import {BAD_REQUEST_ERROR_CODE, INTERNAL_SERVER_ERROR_CODE} from "../../../constants/constant_vals"
import { InternalServerError } from "./internalServerError"
import { Bad_request } from './bad_request';
import { LogInfo } from '../../../constants/constant_vals';


export const HTTPError = props => {
    if(LogInfo){
        console.info(`HTTPError: props.statusCode = ${props.statusCode}`)
    }

    switch (props.statusCode) {
        case INTERNAL_SERVER_ERROR_CODE:
            return <InternalServerError/>
        case BAD_REQUEST_ERROR_CODE:
            return <Bad_request/>
        default:
            return null
    }
};