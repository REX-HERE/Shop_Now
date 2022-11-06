import React from 'react';
import internalServerErrorImage from '../../../images/internalServer500.png'
import { Render_error_image } from './render_error_image';

export const InternalServerError = () => {

    return (
        <Render_error_image image={internalServerErrorImage} name="internal-server-error-image"/>
    );
};