import React from 'react'
import badRequestImage from '../../../images/badRequest400.png'
import { Render_error_image } from './render_error_image'

export const Bad_request = () => {
    return (
        <Render_error_image image={badRequestImage} name="bad-request-image"/>
    )
}

