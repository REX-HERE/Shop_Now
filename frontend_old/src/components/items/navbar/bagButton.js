import { Badge } from '@material-ui/core'
import LocalMallIcon from "@material-ui/icons/LocalMall";
import React from 'react'
import { useSelector } from 'react-redux'
import { LogInfo } from '../../../constants/constant_vals'

const BagButton = () => {
    const addToCart = useSelector(state => state.AddToCartRed)
    if(LogInfo){
        console.info(`Bagbutton: rendering`)


    }

    return (
        <Badge badgeContent={addToCart.total_qty}
                color="secondary">
            <LocalMallIcon style={{color: "black"}}/>
        </Badge>
    )
}

export default BagButton